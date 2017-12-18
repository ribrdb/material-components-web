package(default_visibility = ["//visibility:public"])
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(name="rewrite_at_imports",
    data = ["rewrite-decl-statements-for-closure-test.js"],
    entry_point="__main__/scripts/rewrite-decl-statements-for-closure-test.js",
)
