load(
    "@io_bazel_rules_closure//closure:defs.bzl",
    "closure_js_library",
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
    commands.append('$(location //scripts:rewrite_imports) $$DIR')
    native.genrule(name=name+'_gen',srcs=srcs,outs=rewritten_sources,
    tools=["//scripts:rewrite_imports"],
    cmd=(';').join(commands),
    )
    closure_js_library(name=name, srcs=rewritten_sources, **kwargs)

