module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Disallow import or require of moment.js",
        category: "Best Practices",
        recommended: true,
      },
      messages: {
        noMoment: "Using moment.js is not allowed. Please use date-fns or dayjs instead.",
      },
      schema: [],
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === "moment") {
            context.report({ node, messageId: "noMoment" });
          }
        },
        CallExpression(node) {
          if (
            node.callee.name === "require" &&
            node.arguments.length &&
            node.arguments[0].value === "moment"
          ) {
            context.report({ node, messageId: "noMoment" });
          }
        },
      };
    },
  };
  