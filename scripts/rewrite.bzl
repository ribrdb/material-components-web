load(
    "@io_bazel_rules_closure//closure:defs.bzl",
    "closure_js_library",
)

def rewrite_at_imports(name,src,dest):
    native.genrule(
        name=name,
        outs=[dest],
        srcs=[src],
        tools=["//scripts:rewrite_at_imports"],
        cmd = "$(location //scripts:rewrite_at_imports) $< $@",
    )

def rewrite_test_imports(name,src,dest):
    native.genrule(
        name=name,
        outs=[dest],
        srcs=[src],
        tools=["//scripts:rewrite_test_imports"],
        cmd = "$(location //scripts:rewrite_test_imports) $< $@",
    )

def rewritten_closure_js_library(name, srcs, **kwargs):
    rewritten_sources=[]
    commands = [
        'DIR=$(location closure/%s)'%srcs[0],
        'while [ $$(basename $$DIR) != closure ]',
        '  do DIR=$$(dirname $$DIR)',
        'done',
        'mkdir -p $$DIR']
    for src in srcs:
        new_src = 'closure/'+src
        commands.append('cp $(location %s) $(location %s)' % (src,new_src))
        rewritten_sources.append(new_src)
    commands.append('$(location //scripts:rewrite_at_imports) $$DIR')
    native.genrule(name=name+'_gen',srcs=srcs,outs=rewritten_sources,
    tools=["//scripts:rewrite_at_imports"],
    cmd=(';').join(commands),
    )
        # rewrite_at_imports('rewrite_'+src,src,new_src)
    closure_js_library(name=name, srcs=rewritten_sources, **kwargs)

def rewritten_closure_test_library(name, srcs, **kwargs):
    rewritten_sources=[]
    for src in srcs:
        new_src = 'closure/'+src
        rewritten_sources.append(new_src)
        rewrite_test_imports('rewrite_'+src,src,new_src)
    closure_js_library(name=name,srcs=rewritten_sources, **kwargs)
