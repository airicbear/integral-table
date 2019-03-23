// GLOBAL VARIABLES

const INTEGRAL_CLASS = "integral";
const RENDER_OPTIONS = {
  "displayMode": true,
  "leqno": true,
  "fleqn": true,
  "throwOnError": false,
  "errorColor": "#353535",
  "strict": "warn",
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
      "\\int \\frac{dx}{\\left(a^2 + x^2\\right)^{3/2}} = \\frac{x}{a^2 \\sqrt{a^2 + x^2}}"
    ]
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
    .replace(/\|a/g, "|(" + a + ")")
    .replace(/a\^/g, "(" + a + ")^")
    .replace(/\{a/g, "{(" + a + ")")
    .replace(/4a/g, "4(" + a + ")")
    .replace(/ax/g, "(" + a + ")x")
    .replace(/a\}/g, "(" + a + ")}")
    .replace(/\(a/g, "((" + a + ")")
    .replace(/a\)/g, "(" + a + "))")
    .replace(/[ ]? (a)[ ]?/g, "(" + a + ")") :
    variable === "b" ? str
    .replace(/\|b/g, "|(" + b + ")")
    .replace(/b\^/g, "(" + b + ")^")
    .replace(/\{b/g, "{(" + b + ")")
    .replace(/4b/g, "4(" + b + ")")
    .replace(/bx/g, "(" + b + ")x")
    .replace(/b\}/g, "(" + b + ")}")
    .replace(/\(b/g, "((" + b + ")")
    .replace(/b\)/g, "(" + b + "))")
    .replace(/[ ]? (b)[ ]?/g, "(" + b + ")") :
    variable === "c" ? str
    .replace(/\|c/g, "|(" + c + ")")
    .replace(/c\^/g, "(" + c + ")^")
    .replace(/\}c/g, "}(" + c + ")")
    .replace(/4c/g, "4(" + c + ")")
    .replace(/cx/g, "(" + c + ")x")
    .replace(/c\}/g, "(" + c + ")}")
    .replace(/\(c/g, "((" + c + ")")
    .replace(/c\)/g, "(" + c + "))")
    .replace(/[ ]? (c)[ ]?/g, "(" + c + ")") :
    variable === "n" ? str
    .replace(/\|n/g, "|(" + n + ")")
    .replace(/^[ia]n\^/g, "(" + n + ")^")
    .replace(/\{n/g, "{(" + n + ")")
    .replace(/4n/g, "4(" + n + ")")
    .replace(/nx/g, "(" + n + ")x")
    .replace(/n\}/g, "(" + n + ")}")
    .replace(/\(n/g, "((" + n + ")")
    .replace(/n\)/g, "(" + n + "))")
    .replace(/[ ]? (n)[ ]?/g, "(" + n + ")") :
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