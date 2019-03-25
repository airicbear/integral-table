// GLOBAL VARIABLES

const INTEGRAL_CLASS = "integral";
const RENDER_OPTIONS = {
  "displayMode": true,
  "leqno": true,
  "fleqn": true,
  "throwOnError": false,
  "errorColor": "#353535",
  "strict": "warn",
  "macros": {
    "\\erf": "\\text{erf}",
    "\\where": "\\text{where }",
  },
};
const NUM_INTEGRALS = () => document.getElementsByClassName(INTEGRAL_CLASS).length + 1;

const data = {
  "section1": {
    "title": "Basic Forms",
    "integrals": [
      "\\int x^n dx = \\frac{1}{n + 1} x^{n + 1}",
      "\\int \\frac{1}{x} dx = \\ln|x|",
      "\\int udv = uv - \\int vdu",
      "\\int \\frac{1}{ax + b} dx = \\frac{1}{a} \\ln|ax + b|",
    ]
  },
  "section2": {
    "title": "Integrals of Rational Functions",
    "integrals": [
      "\\int \\frac{1}{(x + a)^2} dx = - \\frac{1}{x + a}",
      "\\int (x + a)^n dx = \\frac{(x + a)^{n + 1}}{n + 1}, \\quad n \\neq 1",
      "\\int x(x + a)^n dx = \\frac{(x + a)^{n + 1}((n + 1) x - a)}{(n + 1)(n + 2)}",
      "\\int \\frac{1}{1 + x^2} dx = \\tan^{-1} x",
      "\\int \\frac{1}{a^2 + x^2} dx = \\frac{1}{a} \\tan^{-1} \\frac{x}{a}",
      "\\int \\frac{1}{a^2 + x^2} dx = \\frac{1}{2} \\ln\\left|a^2 + x^2\\right|",
      "\\int \\frac{x^2}{a^2 + x^2} dx = x - a \\tan^{-1} \\frac{x}{a}",
      "\\int \\frac{x^3}{a^2 + x^2} dx = \\frac{1}{2} x^2 - \\frac{1}{2} a^2 \\ln\\left|a^2 + x^2\\right|",
      "\\int \\frac{1}{ax^2 + bx + c} dx = \\frac{2}{\\sqrt{4ac - b^2}} \\tan^{-1} \\frac{2ax + b}{\\sqrt{4ac-b^2}}",
      "\\int \\frac{1}{(x + a)(x + b)} dx = \\frac{1}{b - a} \\ln\\frac{a + x}{b + x}, \\quad a \\neq b",
      "\\int \\frac{x}{(x + a)^2} = \\frac{a}{a + x} + \\ln\\left|a + x\\right|",
      "\\int \\frac{x}{ax^2 + bx + c} dx = \\frac{1}{2a} \\ln\\left|ax^2 + bx + c\\right| - \\frac{b}{a \\sqrt{4ac - b^2}} \\tan^{-1} \\frac{2ax + b}{\\sqrt{4ac - b^2}}",
    ]
  },
  "section3": {
    "title": "Integrals with Roots",
    "integrals": [
      "\\int \\sqrt{x - a} dx = \\frac{2}{3}(x - a)^{3/2}",
      "\\int \\frac{1}{\\sqrt{x \\pm a}} dx = 2 \\sqrt{x \\pm a}",
      "\\int \\frac{1}{\\sqrt{a - x}} dx = -2 \\sqrt{a - x}",
      "\\int x\\sqrt{x - a} dx = \\frac{2}{3} a(x - a)^{3/2} + \\frac{2}{5} (x - a)^{5/2}",
      "\\int \\sqrt{ax + b} dx = \\left(\\frac{2b}{3a} + \\frac{2x}{3}\\right) \\sqrt{ax + b}",
      "\\int (ax + b)^{3/2} dx = \\frac{2}{5a}(ax + b)^{5/2}",
      "\\int \\frac{x}{\\sqrt{x \\pm a}} dx = \\frac{2}{3} (x \\mp 2a) \\sqrt{x \\pm a}",
      "\\int \\sqrt{\\frac{x}{a - x}} dx = - \\sqrt{x(a - x)} - a \\tan^{-1} \\frac{\\sqrt{x(a - x)}}{x - a}",
      "\\int \\sqrt{\\frac{x}{a + x}} dx = \\sqrt{x(a + x)} - a \\ln \\left[\\sqrt{x} + \\sqrt{x + a}\\right]",
      "\\int x \\sqrt{ax + b} dx = \\frac{2}{15a^2} \\left(-2b^2 + abx + 3a^2x^2\\right) \\sqrt{ax + b}",
      "\\int \\sqrt{x (ax + b)} dx = \\frac{1}{4a^{3/2}} \\left[(2ax + b) \\sqrt{ax (ax + b)} - b^2 \\ln \\left|a \\sqrt{x} + \\sqrt{a(ax + b)}\\right|\\right]",
      "\\int \\sqrt{x^3 (ax + b)} dx = \\left[\\frac{b}{12a} - \\frac{b^2}{8a^2x} + \\frac{x}{3}\\right] \\sqrt{x^3 (ax + b)} + \\frac{b^3}{8a^{5/2}} \\ln \\left|a\\sqrt{x} + \\sqrt{a(ax + b)}\\right|",
      "\\int \\sqrt{x^2 \\pm a^2} dx = \\frac{1}{2} x \\sqrt{x^2 \\pm a^2} \\pm \\frac{1}{2} a^2 \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right|",
      "\\int \\sqrt{a^2 - x^2} dx = \\frac{1}{2} x \\sqrt{a^2 - x^2} + \\frac{1}{2} a^2 \\tan^{-1} \\frac{x}{\\sqrt{a^2 - x^2}}",
      "\\int x \\sqrt{x^2 \\pm a^2} dx = \\frac{1}{3} \\left(x^2 \\pm a^2\\right)^{3/2}",
      "\\int \\frac{1}{\\sqrt{x^2 \\pm a^2}} dx = \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right|",
      "\\int \\frac{1}{\\sqrt{a^2 - x^2}} dx = \\sin^{-1} \\frac{x}{a}",
      "\\int \\frac{x}{\\sqrt{x^2 \\pm a^2}} dx = \\sqrt{x^2 \\pm a^2}",
      "\\int \\frac{x}{\\sqrt{a^2 - x^2}} dx = - \\sqrt{a^2 - x^2}",
      "\\int \\frac{x^2}{\\sqrt{x^2 \\pm a^2}} dx = \\frac{1}{2} x\\sqrt{x^2 \\pm a^2} \\mp \\frac{1}{2} a^2 \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right|",
      "\\int \\sqrt{ax^2 + bx + c} dx = \\frac{b + 2ax}{4a} \\sqrt{ax^2 + bx + c} + \\frac{4ac - b^2}{8a^{3/2}} \\ln\\left|2ax + b + 2\\sqrt{a\\left(ax^2 + bx + c\\right)}\\right|",
      "\\int x \\sqrt{ax^2 + bx + c} = \\frac{1}{48a^{5/2}} \\left(2 \\sqrt{a} \\sqrt{ax^2 + bx + c} \\times \\left(-3b^2 + 2abx + 8a \\left(c + ax^2\\right)\\right) + 3 \\left(b^3 - 4abc\\right) \\ln\\left|b + 2ax + 2 \\sqrt{a} \\sqrt{ax^2 + bx + c}\\right|\\right)",
      "\\int \\frac{1}{\\sqrt{ax^2 + bx + c}} dx = \\frac{1}{\\sqrt{a}} \\ln\\left|2ax + b + 2 \\sqrt{a\\left(ax^2 + bx + c\\right)}\\right|",
      "\\int \\frac{x}{\\sqrt{ax^2 + bx + c}} dx = \\frac{1}{a} \\sqrt{ax^2 + bx + c} - \\frac{b}{2a^{3/2}} \\ln\\left|2ax + b + 2\\sqrt{a\\left(ax^2 + bx + c\\right)}\\right|",
      "\\int \\frac{dx}{\\left(a^2 + x^2\\right)^{3/2}} = \\frac{x}{a^2 \\sqrt{a^2 + x^2}}",
    ]
  },
  "section4": {
    "title": "Integrals with Logarithms",
    "integrals": [
      "\\int \\ln{ax} dx = x \\ln{ax} - x",
      "\\int \\frac{\\ln{ax}}{x} dx = \\frac{1}{2} \\left(\\ln{ax}\\right)^2",
      "\\int \\left(ax + b\\right) dx = \\left(x + \\frac{b}{a}\\right) \\ln\\left(ax + b\\right) - x, \\quad a \\neq 0",
      "\\int \\ln\\left(x^2 + a^2\\right) dx = x \\ln\\left(x^2 + a^2\\right) + 2a \\tan^{-1} \\frac{x}{a} - 2x",
      "\\int \\ln\\left(x^2 - a^2\\right) dx = x \\ln\\left(x^2 - a^2\\right) + a \\ln \\frac{x + a}{x - a} - 2x",
      "\\int \\ln \\left(ax^2 + bx + c\\right) dx = \\frac{1}{a} \\sqrt{4ac - b^2} \\tan^{-1} \\frac{2ax + b}{\\sqrt{4ac - b^2}} - 2x + \\left(\\frac{b}{2a} + x\\right) \\ln\\left(ax^2 + bx + c\\right)",
      "\\int x \\ln\\left(ax + b\\right) dx = \\frac{bx}{2a} - \\frac{1}{4} x^2 + \\frac{1}{2} \\left(x^2 - \\frac{b^2}{a^2}\\right) \\ln\\left(ax + b\\right)",
      "\\int x \\ln\\left(a^2 - b^2 x^2\\right) dx = - \\frac{1}{2} x^2 + \\frac{1}{2} \\left(x^2 - \\frac{a^2}{b^2}\\right) \\ln\\left(a^2 - b^2 x^2\\right)",
    ],
  },
  "section5": {
    "title": "Integrals with Exponentials",
    "integrals": [
      "\\int e^{ax} dx = \\frac{1}{a} e^{ax}",
      "\\int \\sqrt{x} e^{ax} dx = \\frac{1}{a} \\sqrt{x} e^{ax} + \\frac{i \\sqrt{\\pi}}{2a^{3/2}} \\erf\\left(i \\sqrt{ax}\\right), \\quad \\where \\erf\\left(x\\right) = \\frac{2}{\\sqrt{\\pi}} \\int_0^\\pi e^{-t^2} dt",
      "\\int xe^x dx = \\left(x - 1\\right) e^x",
      "\\int xe^{ax} dx = \\left(\\frac{x}{a} - \\frac{1}{a^2}\\right) e^{ax}",
      "\\int x^2 e^x dx = \\left(x^2 - 2x + 2\\right) e^x",
      "\\int x^2 e^{ax} dx = \\left(\\frac{x^2}{a} - \\frac{2x}{a^2} + \\frac{2}{a^3}\\right) e^{ax}",
      "\\int x^3 e^x dx = \\left(x^3 - 3x^2 + 6x - 6\\right) e^x",
      "\\int x^n e^{ax} dx = \\frac{x^n e^{ax}}{a} - \\frac{n}{a} \\int x^{n - 1} e^{ax} dx",
      "\\int x^n e^{ax} dx = \\frac{\\left(-1\\right)^n}{a^{n + 1}} \\Gamma[1 + n, -ax], \\quad \\where \\Gamma(a, x) = \\int_x^\\infty t^{a - 1} e^{-1} dt",
      "\\int e^{ax^2} dx = - \\frac{i \\sqrt{\\pi}}{2 \\sqrt{a}} \\erf \\left(ix \\sqrt{a}\\right)",
      "\\int e^{-ax^2} dx = \\frac{\\sqrt{\\pi}}{2 \\sqrt{a}} \\erf \\left(x \\sqrt{a}\\right)",
      "xe^{-ax^2} dx = - \\frac{1}{2a} e^{-ax^2}",
      "\\int x^2 e^{-ax^2} dx = \\frac{1}{4} \\sqrt{\\frac{\\pi}{a^3}} \\erf\\left(x \\sqrt{a}\\right) - \\frac{x}{2a} e^{-ax^2}"
    ],
  },
  "section6": {
    "title": "Integrals with Trigonometric Functions",
    "integrals": [
      "\\int \\sin{ax} dx = - \\frac{1}{a} \\cos{ax}",
      "\\int \\sin^2{ax} dx = \\frac{x}{2} - \\frac{\\sin{2ax}}{4a}",
      "\\int \\sin^n{ax} dx = - \\frac{1}{a} \\cos{ax} \\quad {}_2F_1 \\left[\\frac{1}{2}, \\frac{1 - n}{2}, \\frac{3}{2}, \\cos^2{ax}\\right]",
      "\\int \\sin^3{ax} dx = - \\frac{3 \\cos{ax}}{4a} + \\frac{\\cos{3ax}}{12a}",
      "\\int \\cos{ax} dx = \\frac{1}{a} \\sin{ax}",
      "\\int \\cos^2{ax} dx = \\frac{x}{2} + \\frac{\\sin{2ax}}{4a}",
      "\\int \\cos^p{ax} dx = - \\frac{1}{a \\left(1 + p\\right)} \\cos^{1 + p}{ax} \\times {}_2F_1 \\left[\\frac{1 + p}{2}, \\frac{1}{2}, \\frac{3 + p}{2}, \\cos^2{ax}\\right]",
      "\\int \\cos^3{ax} dx = \\frac{3 \\sin{ax}}{4a} + \\frac{\\sin{3ax}}{12a}",
      "\\int \\cos{ax} \\sin{bx} dx = \\frac{\\cos\\left[\\left(a - b\\right) x\\right]}{2 \\left(a - b\\right)} - \\frac{\\cos\\left[\\left(a + b\\right) x\\right]}{2 \\left(a + b\\right)}, \\quad a \\neq b",
      "\\int \\sin^2{ax} \\cos{bx} dx = - \\frac{\\sin\\left[\\left(2a - b\\right) x\\right]}{4 \\left(2a - b\\right)} + \\frac{\\sin{bx}}{2b} - \\frac{\\sin\\left[\\left(2a + b\\right) x\\right]}{4 \\left(2a + b\\right)}",
      "\\int \\sin^2{x} \\cos{x} dx = \\frac{1}{3} \\sin^3{x}",
      "\\int \\cos^2{ax} \\sin{bx} dx = \\frac{\\cos\\left[\\left(2a - b\\right) x\\right]}{4 \\left(2a - b\\right)} - \\frac{\\cos{bx}}{2b} - \\frac{\\cos{\\left[\\left(2a + b\\right) x\\right]}}{4 \\left(2a + b\\right)}",
      "\\int \\cos^2{ax} \\sin{ax} dx = - \\frac{1}{3a} \\cos^3{ax}",
      "\\int \\sin^2{ax} \\cos^2{bx} dx = \\frac{x}{4} - \\frac{\\sin{2ax}}{8a} - \\frac{\\sin{\\left[2 \\left(a - b\\right) x\\right]}}{16 \\left(a - b\\right)} + \\frac{\\sin{2bx}}{8b} - \\frac{\\sin{\\left[2 \\left(a + b\\right) x\\right]}}{16 \\left(a + b\\right)}",
      "\\int \\sin^2{ax} \\cos^2{ax} dx = \\frac{x}{8} - \\frac{\\sin{4ax}}{32a}",
      "\\int \\tan{ax} dx = - \\frac{1}{a} \\ln{\\cos{ax}}",
      "\\int \\tan^2{ax} dx = -x + \\frac{1}{a} \\tan{ax}",
      "\\int \\tan^n{ax} dx = \\frac{\\tan^{n + 1} ax}{a \\left(1 + n\\right)} \\times {}_2F_1 \\left(\\frac{n + 1}{2}, 1, \\frac{n + 3}{2}, - \\tan^2{ax}\\right)",
      "\\int \\tan^3{ax} dx = \\frac{1}{a} \\ln{\\cos{ax}} + \\frac{1}{2a} \\sec^2{ax}",
      "\\int \\sec{x} dx = \\ln{\\left|\\sec{x} + \\tan{x}\\right|} = 2 \\tanh^{-1} \\left(\\tan{\\frac{x}{2}}\\right)",
      "\\int \\sec^2{ax} dx = \\frac{1}{a} \\tan{ax}",
      "\\int \\sec^3{x} dx = \\frac{1}{2} \\sec{x} \\tan{x} + \\frac{1}{2} \\ln{\\left|\\sec{x} + \\tan{x}\\right|}",
      "\\int \\sec{x} \\tan{x} dx = \\sec{x}",
      "\\int \\sec^2{x} \\tan{x} dx = \\frac{1}{2} \\sec^2{x}",
      "\\int \\sec^n{x} \\tan{x} dx = \\frac{1}{n} \\sec^n{x}, \\quad n \\neq 0",
      "\\int \\csc{x} dx = \\ln{\\left|\\tan{\\frac{x}{2}}\\right|} = \\ln{\\left|\\csc{x} - \\cot{x}\\right|} + C",
      "\\int \\csc^2{ax} dx = - \\frac{1}{a} \\cot{ax}",
      "\\int \\csc^3{x} dx = - \\frac{1}{2} \\cot{x} \\csc{x} + \\frac{1}{2} \\ln{\\left|\\csc{x} - \\cot{x}\\right|}",
      "\\int \\csc^n{x} \\cot{x} dx = - \\frac{1}{n} \\csc^n{x}, \\quad n \\neq 0",
      "\\int \\sec{x} \\csc{x} dx =  \\ln{\\left|\\tan{x}\\right|}"
    ],
  },
};

// HELPER FUNCTIONS

function element(type, props = {}, children = []) {
  let element = document.createElement(type);
  for (key in props) {
    element[key] = props[key];
  }
  for (let i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
  return element;
}

function replaceVariable(str, variable, a, b, c, n) {
  // TODO: Use RegExp class
  // TODO: Fix conflicts with KaTeX
  return variable === "a" ? str
    .replace(/2a/g, "2\\left(" + a + "\\right)")
    .replace(/\|a/g, "|\\left(" + a + "\\right)")
    .replace(/a\^/g, "\\left(" + a + "\\right)^")
    .replace(/\^a/g, "^{\\left(" + a + "\\right)}")
    .replace(/\{a/g, "{\\left(" + a + "\\right)")
    .replace(/4a/g, "4\\left(" + a + "\\right)")
    .replace(/ax/g, "\\left(" + a + "\\right)x")
    .replace(/a\}/g, "\\left(" + a + "\\right)}")
    .replace(/\(a/g, "(\\left(" + a + "\\right)")
    .replace(/a\)/g, "\\left(" + a + "\\right))")
    .replace(/\)a/g, ")\\left(" + a + "\\right)")
    .replace(/[ ]? (a)[ ]?/g, "\\left(" + a + "\\right)") :
    variable === "b" ? str
    .replace(/\|b/g, "|\\left(" + b + "\\right)")
    .replace(/b\^/g, "\\left(" + b + "\\right)^")
    .replace(/\^b/g, "^{\\left(" + b + "\\right)}")
    .replace(/\{b/g, "{\\left(" + b + "\\right)")
    .replace(/4b/g, "4\\left(" + b + "\\right)")
    .replace(/bx/g, "\\left(" + b + "\\right)x")
    .replace(/b\}/g, "\\left(" + b + "\\right)}")
    .replace(/\(b/g, "(\\left(" + b + "\\right)")
    .replace(/b\)/g, "\\left(" + b + "\\right))")
    .replace(/\)b/g, ")\\left(" + b + "\\right)")
    .replace(/[ ]? (b)[ ]?/g, "\\left(" + b + "\\right)") :
    variable === "c" ? str
    .replace(/\|c/g, "|\\left(" + c + "\\right)")
    .replace(/\^c/g, "^{\\left(" + c + "\\right)}")
    .replace(/\}c/g, "}\\left(" + c + "\\right)")
    .replace(/4c/g, "4\\left(" + c + "\\right)")
    .replace(/cx/g, "\\left(" + c + "\\right)x")
    .replace(/c\}/g, "\\left(" + c + "\\right)}")
    .replace(/\(c/g, "(\\left(" + c + "\\right)")
    .replace(/c\)/g, "\\left(" + c + "\\right))")
    .replace(/\)c/g, ")\\left(" + c + "\\right)")
    .replace(/[ ]? (c)[ ]?/g, "\\left(" + c + "\\right)") :
    variable === "n" ? str
    .replace(/\|n/g, "|\\left(" + n + "\\right)")
    .replace(/^[ia]n\^/g, "\\left(" + n + "\\right)^")
    .replace(/\^n/g, "^{\\left(" + n + "\\right)}")
    .replace(/\{n/g, "{\\left(" + n + "\\right)")
    .replace(/4n/g, "4\\left(" + n + "\\right)")
    .replace(/nx/g, "\\left(" + n + "\\right)x")
    .replace(/n\}/g, "\\left(" + n + "\\right)}")
    .replace(/\(n/g, "(\\left(" + n + "\\right)")
    .replace(/n\)/g, "\\left(" + n + "\\right))")
    .replace(/[ ]? (n)[ ]?/g, "\\left(" + n + "\\right)") :
    str;
}

function renderConstant(data, sectionElement, i, a, b, c, n) {
  const integralElement = sectionElement.children[1].children[i];
  let katexString = data[sectionElement.id].integrals[i];

  if (!a || !b || !c || !n) return;

  if (a !== "a") {
    katexString = replaceVariable(katexString, "a", a, b, c, n);
  }

  if (b !== "b") {
    katexString = replaceVariable(katexString, "b", a, b, c, n);
  }

  if (c !== "c") {
    katexString = replaceVariable(katexString, "c", a, b, c, n);
  }

  if (n !== "n") {
    katexString = replaceVariable(katexString, "n", a, b, c, n);
  }

  katex.render(katexString, integralElement, RENDER_OPTIONS);
}

function renderSection(data, sectionElement) {
  const listElement = element("ol", {
    start: NUM_INTEGRALS(),
  });
  sectionElement.appendChild(listElement);

  for (let i = 0; i < data[sectionElement.id].integrals.length; i++) {
    const integralElement = element("li", {
      className: INTEGRAL_CLASS
    });
    listElement.appendChild(integralElement);
    
    katex.render(data[sectionElement.id].integrals[i], integralElement, RENDER_OPTIONS);
  }
}

function renderConstants(data, sectionElement, a, b, c, n) {
  for (let i = 0; i < data[sectionElement.id].integrals.length; i++) {
    renderConstant(data, sectionElement, i, a, b, c, n);
  }
}

function renderData(data, a, b, c, n) {
  for (const sectionString in data) {
    const sectionElement = document.getElementById(sectionString);
    if (sectionElement.children.length < 2) {
      renderSection(data, sectionElement);
    } else {
      renderConstants(data, sectionElement, a, b, c, n);
    }
  }
}

// MAIN FUNCTIONS

function pluginConstants(formName) {
  const constantsForm = document.forms[formName];
  const a = constantsForm["constantA"].value;
  const b = constantsForm["constantB"].value;
  const c = constantsForm["constantC"].value;
  const n = constantsForm["constantN"].value;
  renderData(data, a, b, c, n);
}

function main() {
  const mainElement = document.getElementById("main");
  for (const section in data) {
    mainElement.appendChild(element("section", {
      id: section,
    }, [
      element("h2", {
        textContent: data[section].title,
      }),
    ]));
  }
  renderData(data);
}

main();