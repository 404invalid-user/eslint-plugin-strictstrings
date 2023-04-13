module.exports = {
    meta: {
        name: "eslint-plugin-strictstrings",
        version: "1.0.0"
    },
    rules: {
        "single-quotes-no-space": {
            create: function (ctx) {
                return {
                    Literal(node) {
                        if (node.raw[0] === "'") {
                            if (/\s/.test(node.raw)) {
                                ctx.report({
                                    node,
                                    message: "Single quotes should not contain spaces."
                                });
                            }
                        }
                    }
                };
            }
        },
        "double-quotes-space": {
            create: function (ctx) {
                return {
                    Literal(node) {
                        if (node.raw[0] === '"') {
                            if (!/\s/.test(node.raw)) {
                                ctx.report({
                                    node,
                                    message: "Double quotes should contain a space."
                                });
                            }
                        }
                    }
                };
            }
        }
    }
};
