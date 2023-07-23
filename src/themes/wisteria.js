// Wisteria
// Adapted from: https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/prism-react-renderer/src/themes/oceanicNext.ts

const colors = {
  char: "#bcc0fb",
  comment: "#9598C7",
  keyword: "#EBC6F7",
  primitive: "#5a9bcf",
  string: "#BEC1ED",
  variable: "#D0C6F7",
  boolean: "#ff8b50",
  punctuation: "#D0C6F7",
  tag: "#fc929e",
  function: "#CCEBFF",
  className: "#bcc0fb",
  method: "#6699CC",
  operator: "#fc929e",
  atrule: "#B1DEFD",
};

const theme = {
  plain: {
    backgroundColor: "#1A1D3B",
    color: "#dadde1",
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ["attr-value"],
      style: {
        color: colors.string,
      },
    },
    {
      types: [
        "comment",
        "block-comment",
        "prolog",
        "doctype",
        "cdata",
        "shebang",
      ],
      style: {
        color: colors.comment,
      },
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: colors.primitive,
      },
    },
    {
      types: ["boolean"],
      style: {
        color: colors.boolean,
      },
    },
    {
      types: ["tag"],
      style: {
        color: colors.tag,
      },
    },
    {
      types: ["string"],
      style: {
        color: colors.string,
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: colors.punctuation,
      },
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: colors.char,
      },
    },
    {
      types: ["function"],
      style: {
        color: colors.function,
      },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: colors.variable,
      },
    },
    {
      types: ["keyword"],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ["atrule"],
      style: {
        color: colors.atrule,
      },
    },
    {
      types: ["class-name"],
      style: {
        color: colors.className,
      },
    },
    {
      types: ["important"],
      style: {
        fontWeight: "400",
      },
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
  ],
};

module.exports = theme;
