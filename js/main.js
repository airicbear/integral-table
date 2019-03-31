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
      "\\int x^{ n } dx = \\frac{1}{ n  + 1} x^{ n  + 1}",
      "\\int \\frac{1}{x} dx = \\ln{\\left|x\\right|}",
      "\\int udv = uv - \\int vdu",
      "\\int \\frac{1}{ a x + b } dx = \\frac{1}{ a } \\ln| a x + b |",
    ]
  },
  "section2": {
    "title": "Integrals of Rational Functions",
    "integrals": [
      "\\int \\frac{1}{\\left(x + a \\right)^{2}} dx = - \\frac{1}{x + a }",
      "\\int \\left(x + a \\right)^{ n } dx = \\frac{\\left(x + a \\right)^{ n  + 1}}{ n + 1}, \\quad n \\neq 1",
      "\\int x\\left(x + a \\right)^{ n } dx = \\frac{\\left(x + a \\right)^{ n  + 1}\\left(\\left( n + 1\\right) x - a \\right)}{\\left( n + 1\\right)\\left( n + 2\\right)}",
      "\\int \\frac{1}{1 + x^{2}} dx = \\tan^{-1} x",
      "\\int \\frac{1}{ a ^{2} + x^{2}} dx = \\frac{1}{ a } \\tan^{-1} \\frac{x}{ a }",
      "\\int \\frac{x}{ a ^{2} + x^{2}} dx = \\frac{1}{2} \\ln\\left| a ^{2} + x^{2}\\right|",
      "\\int \\frac{x^{2}}{ a ^{2} + x^{2}} dx = x - a \\tan^{-1} \\frac{x}{ a }",
      "\\int \\frac{x^3}{ a ^{2} + x^{2}} dx = \\frac{1}{2} x^{2} - \\frac{1}{2} a ^{2} \\ln\\left| a ^{2} + x^{2}\\right|",
      "\\int \\frac{1}{ a x^{2} + b x + c} dx = \\frac{2}{\\sqrt{4 a  c - b ^{2}}} \\tan^{-1} \\frac{2 a x + b }{\\sqrt{4 a  c - b  ^ {2}}}",
      "\\int \\frac{1}{\\left(x + a \\right)(x + b )} dx = \\frac{1}{ b - a } \\ln\\frac{ a  + x}{ b + x}, \\quad a \\neq b ",
      "\\int \\frac{x}{\\left(x + a \\right)^{2}} = \\frac{ a }{ a  + x} + \\ln\\left| a + x\\right|",
      "\\int \\frac{x}{ a x^{2} + b x + c} dx = \\frac{1}{2 a } \\ln\\left| a x^{2} + b x + c \\right| - \\frac{ b }{ a  \\sqrt{4 a  c - b ^{2}}} \\tan^{-1} \\frac{2 a x + b }{\\sqrt{4 a  c - b ^{2}}}",
    ]
  },
  "section3": {
    "title": "Integrals with Roots",
    "integrals": [
      "\\int \\sqrt{x - a } dx = \\frac{2}{3}\\left(x - a \\right)^{3/2}",
      "\\int \\frac{1}{\\sqrt{x \\pm a }} dx = 2 \\sqrt{x \\pm a }",
      "\\int \\frac{1}{\\sqrt{ a  - x}} dx = -2 \\sqrt{ a  - x}",
      "\\int x\\sqrt{x - a } dx = \\frac{2}{3} a \\left(x - a \\right)^{3/2} + \\frac{2}{5} \\left(x - a \\right)^{5/2}",
      "\\int \\sqrt{ a x + b } dx = \\left(\\frac{2 b }{3 a } + \\frac{2x}{3}\\right) \\sqrt{ a x + b }",
      "\\int \\left( a x + b \\right)^{3/2} dx = \\frac{2}{5a }\\left( a x + b \\right)^{5/2}",
      "\\int \\frac{x}{\\sqrt{x \\pm a }} dx = \\frac{2}{3} \\left(x \\mp 2 a \\right) \\sqrt{x \\pm a }",
      "\\int \\sqrt{\\frac{x}{ a  - x}} dx = - \\sqrt{x\\left( a - x\\right)} - a \\tan^{-1} \\frac{\\sqrt{x\\left( a - x\\right)}}{x - a }",
      "\\int \\sqrt{\\frac{x}{ a  + x}} dx = \\sqrt{x\\left( a + x\\right)} - a \\ln \\left[\\sqrt{x} + \\sqrt{x + a }\\right]",
      "\\int x \\sqrt{ a x + b } dx = \\frac{2}{15a ^{2}} \\left(-2 b ^{2} + a b x + 3a ^{2}x^{2}\\right) \\sqrt{ a x + b }",
      "\\int \\sqrt{x \\left( a x + b \\right)} dx = \\frac{1}{4 a ^{3/2}} \\left[(2 a x + b ) \\sqrt{ a x \\left( a x + b \\right)} - b ^{2} \\ln \\left| a \\sqrt{x} + \\sqrt{ a \\left( a x + b \\right)}\\right|\\right]",
      "\\int \\sqrt{x^3 \\left( a x + b \\right)} dx = \\left[\\frac{ b }{12 a } - \\frac{ b^{2}}{8 a ^{2}x} + \\frac{x}{3}\\right] \\sqrt{x^3 \\left( a x + b \\right)} + \\frac{ b^3}{8 a ^{5/2}} \\ln \\left| a \\sqrt{x} + \\sqrt{ a \\left( a x + b \\right)}\\right|",
      "\\int \\sqrt{x^{2} \\pm a ^{2}} dx = \\frac{1}{2} x \\sqrt{x^{2} \\pm a ^{2}} \\pm \\frac{1}{2} a ^{2} \\ln\\left|x + \\sqrt{x^{2} \\pm a ^{2}}\\right|",
      "\\int \\sqrt{ a ^{2} - x^{2}} dx = \\frac{1}{2} x \\sqrt{ a ^{2} - x^{2}} + \\frac{1}{2} a ^{2} \\tan^{-1} \\frac{x}{\\sqrt{ a ^{2} - x^{2}}}",
      "\\int x \\sqrt{x^{2} \\pm a ^{2}} dx = \\frac{1}{3} \\left(x^{2} \\pm a ^{2}\\right)^{3/2}",
      "\\int \\frac{1}{\\sqrt{x^{2} \\pm a ^{2}}} dx = \\ln\\left|x + \\sqrt{x^{2} \\pm a ^{2}}\\right|",
      "\\int \\frac{1}{\\sqrt{ a ^{2} - x^{2}}} dx = \\sin^{-1} \\frac{x}{ a }",
      "\\int \\frac{x}{\\sqrt{x^{2} \\pm a ^{2}}} dx = \\sqrt{x^{2} \\pm a ^{2}}",
      "\\int \\frac{x}{\\sqrt{ a ^{2} - x^{2}}} dx = - \\sqrt{ a ^{2} - x^{2}}",
      "\\int \\frac{x^{2}}{\\sqrt{x^{2} \\pm a ^{2}}} dx = \\frac{1}{2} x\\sqrt{x^{2} \\pm a ^{2}} \\mp \\frac{1}{2} a ^{2} \\ln\\left|x + \\sqrt{x^{2} \\pm a ^{2}}\\right|",
      "\\int \\sqrt{ a x^{2} + b x + c} dx = \\frac{ b + 2 a x}{4 a } \\sqrt{ a x^{2} + b x + c} + \\frac{4 a  c - b ^{2}}{8 a ^{3/2}} \\ln\\left|2 a x + b  + 2\\sqrt{ a \\left( a x^{2} + b x + c \\right)}\\right|",
      "\\int x \\sqrt{ a x^{2} + b x + c} = \\frac{1}{48 a ^{5/2}} \\left(2 \\sqrt{ a } \\sqrt{ a x^{2} + b x + c} \\times \\left(-3b^{2} + 2 a b x + 8 a \\left(c +  a x^{2}\\right)\\right) + 3 \\left(b^3 - 4 a bc \\right) \\ln\\left|b + 2 a x + 2 \\sqrt{ a } \\sqrt{ a x^{2} + b x + c}\\right|\\right)",
      "\\int \\frac{1}{\\sqrt{ a x^{2} + b x + c}} dx = \\frac{1}{\\sqrt{ a }} \\ln\\left|2 a x + b  + 2 \\sqrt{ a \\left( a x^{2} + b x + c \\right)}\\right|",
      "\\int \\frac{x}{\\sqrt{ a x^{2} + b x + c}} dx = \\frac{1}{ a } \\sqrt{ a x^{2} + b x + c} - \\frac{ b }{2 a ^{3/2}} \\ln\\left|2 a x + b  + 2\\sqrt{ a \\left( a x^{2} + b x + c \\right)}\\right|",
      "\\int \\frac{dx}{\\left( a ^{2} + x^{2}\\right)^{3/2}} = \\frac{x}{ a ^{2} \\sqrt{ a ^{2} + x^{2}}}",
    ]
  },
  "section4": {
    "title": "Integrals with Logarithms",
    "integrals": [
      "\\int \\ln{ a x} dx = x \\ln{ a x} - x",
      "\\int \\frac{\\ln{ a x}}{x} dx = \\frac{1}{2} \\left(\\ln{ a x}\\right)^{2}",
      "\\int \\left( a x + b \\right) dx = \\left(x + \\frac{ b }{ a }\\right) \\ln\\left( a x + b \\right) - x, \\quad a \\neq 0",
      "\\int \\ln\\left(x^{2} + a ^{2}\\right) dx = x \\ln\\left(x^{2} + a ^{2}\\right) + 2 a \\tan^{-1} \\frac{x}{ a } - 2x",
      "\\int \\ln\\left(x^{2} - a ^{2}\\right) dx = x \\ln\\left(x^{2} - a ^{2}\\right) + a \\ln \\frac{x + a }{x - a } - 2x",
      "\\int \\ln \\left( a x^{2} + b x + c \\right) dx = \\frac{1}{ a } \\sqrt{4 a  c - b ^{2}} \\tan^{-1} \\frac{2 a x + b }{\\sqrt{4 a  c - b ^{2}}} - 2x + \\left(\\frac{ b }{2 a } + x\\right) \\ln\\left( a x^{2} + b x + c \\right)",
      "\\int x \\ln\\left( a x + b \\right) dx = \\frac{ b x}{2 a } - \\frac{1}{4} x^{2} + \\frac{1}{2} \\left(x^{2} - \\frac{ b^{2}}{ a ^{2}}\\right) \\ln\\left( a x + b \\right)",
      "\\int x \\ln\\left( a ^{2} - b ^{2} x^{2}\\right) dx = - \\frac{1}{2} x^{2} + \\frac{1}{2} \\left(x^{2} - \\frac{ a ^{2}}{ b^{2}}\\right) \\ln\\left( a ^{2} - b ^{2} x^{2}\\right)",
    ],
  },
  "section5": {
    "title": "Integrals with Exponentials",
    "integrals": [
      "\\int e^{ a x} dx = \\frac{1}{ a } e^{ a x}",
      "\\int \\sqrt{x} e^{ a x} dx = \\frac{1}{ a } \\sqrt{x} e^{ a x} + \\frac{i \\sqrt{\\pi}}{2 a ^{3/2}} \\erf\\left(i \\sqrt{ a x}\\right), \\quad \\where \\erf\\left(x\\right) = \\frac{2}{\\sqrt{\\pi}} \\int_{0}^{\\pi} e^{-t^{2}} dt",
      "\\int xe^x dx = \\left(x - 1\\right) e^x",
      "\\int xe^{ a x} dx = \\left(\\frac{x}{ a } - \\frac{1}{ a ^{2}}\\right) e^{ a x}",
      "\\int x^{2} e^x dx = \\left(x^{2} - 2x + 2\\right) e^x",
      "\\int x^{2} e^{ a x} dx = \\left(\\frac{x^{2}}{ a } - \\frac{2x}{ a ^{2}} + \\frac{2}{ a ^3}\\right) e^{ a x}",
      "\\int x^3 e^x dx = \\left(x^3 - 3x^{2} + 6x - 6\\right) e^x",
      "\\int x^{ n } e^{ a x} dx = \\frac{x^{ n } e^{ a x}}{ a } - \\frac{ n }{ a } \\int x^{ n  - 1} e^{ a x} dx",
      "\\int x^{ n } e^{ a x} dx = \\frac{\\left(-1\\right)^{ n }}{ a ^{ n  + 1}} \\Gamma[1 + n , - a x], \\quad \\where \\Gamma( a , x) = \\int_x^\\infty t^{ a  - 1} e^{-1} dt",
      "\\int e^{ a x^{2}} dx = - \\frac{i \\sqrt{\\pi}}{2 \\sqrt{ a }} \\erf \\left(ix \\sqrt{ a }\\right)",
      "\\int e^{- a x^{2}} dx = \\frac{\\sqrt{\\pi}}{2 \\sqrt{ a }} \\erf \\left(x \\sqrt{ a }\\right)",
      "xe^{- a x^{2}} dx = - \\frac{1}{2 a } e^{- a x^{2}}",
      "\\int x^{2} e^{- a x^{2}} dx = \\frac{1}{4} \\sqrt{\\frac{\\pi}{ a ^3}} \\erf\\left(x \\sqrt{ a }\\right) - \\frac{x}{2 a } e^{- a x^{2}}"
    ],
  },
  "section6": {
    "title": "Integrals with Trigonometric Functions",
    "integrals": [
      "\\int \\sin{ a x} dx = - \\frac{1}{ a } \\cos{ a x}",
      "\\int \\sin^{2}{ a x} dx = \\frac{x}{2} - \\frac{\\sin{2 a x}}{4 a }",
      "\\int \\sin^{ n }{ a x} dx = - \\frac{1}{ a } \\cos{ a x} \\quad {}_2F_1 \\left[\\frac{1}{2}, \\frac{1 - n }{2}, \\frac{3}{2}, \\cos^{2}{ a x}\\right]",
      "\\int \\sin^3{ a x} dx = - \\frac{3 \\cos{ a x}}{4 a } + \\frac{\\cos{3 a x}}{12 a }",
      "\\int \\cos{ a x} dx = \\frac{1}{ a } \\sin{ a x}",
      "\\int \\cos^{2}{ a x} dx = \\frac{x}{2} + \\frac{\\sin{2 a x}}{4 a }",
      "\\int \\cos^p{ a x} dx = - \\frac{1}{ a  \\left(1 + p\\right)} \\cos^{1 + p}{ a x} \\times {}_2F_1 \\left[\\frac{1 + p}{2}, \\frac{1}{2}, \\frac{3 + p}{2}, \\cos^{2}{ a x}\\right]",
      "\\int \\cos^3{ a x} dx = \\frac{3 \\sin{ a x}}{4 a } + \\frac{\\sin{3 a x}}{12 a }",
      "\\int \\cos{ a x} \\sin{ b x} dx = \\frac{\\cos\\left[\\left( a - b \\right) x\\right]}{2 \\left( a - b \\right)} - \\frac{\\cos\\left[\\left( a + b \\right) x\\right]}{2 \\left( a + b \\right)}, \\quad a \\neq b ",
      "\\int \\sin^{2}{ a x} \\cos{ b x} dx = - \\frac{\\sin\\left[\\left(2 a - b \\right) x\\right]}{4 \\left(2 a - b \\right)} + \\frac{\\sin{ b x}}{2 b } - \\frac{\\sin\\left[\\left(2 a + b \\right) x\\right]}{4 \\left(2 a + b \\right)}",
      "\\int \\sin^{2}{x} \\cos{x} dx = \\frac{1}{3} \\sin^3{x}",
      "\\int \\cos^{2}{ a x} \\sin{ b x} dx = \\frac{\\cos\\left[\\left(2 a - b \\right) x\\right]}{4 \\left(2 a - b \\right)} - \\frac{\\cos{ b x}}{2 b } - \\frac{\\cos{\\left[\\left(2 a + b \\right) x\\right]}}{4 \\left(2 a + b \\right)}",
      "\\int \\cos^{2}{ a x} \\sin{ a x} dx = - \\frac{1}{3 a } \\cos^3{ a x}",
      "\\int \\sin^{2}{ a x} \\cos^{2}{ b x} dx = \\frac{x}{4} - \\frac{\\sin{2 a x}}{8 a } - \\frac{\\sin{\\left[2 \\left( a - b \\right) x\\right]}}{16 \\left( a - b \\right)} + \\frac{\\sin{2 b x}}{8 b } - \\frac{\\sin{\\left[2 \\left( a + b \\right) x\\right]}}{16 \\left( a + b \\right)}",
      "\\int \\sin^{2}{ a x} \\cos^{2}{ a x} dx = \\frac{x}{8} - \\frac{\\sin{4 a x}}{32 a }",
      "\\int \\tan{ a x} dx = - \\frac{1}{ a } \\ln{\\cos{ a x}}",
      "\\int \\tan^{2}{ a x} dx = -x + \\frac{1}{ a } \\tan{ a x}",
      "\\int \\tan^{ n }{ a x} dx = \\frac{\\tan^{ n  + 1}  a x}{ a  \\left(1 + n \\right)} \\times {}_2F_1 \\left(\\frac{ n + 1}{2}, 1, \\frac{ n + 3}{2}, - \\tan^{2}{ a x}\\right)",
      "\\int \\tan^3{ a x} dx = \\frac{1}{ a } \\ln{\\cos{ a x}} + \\frac{1}{2 a } \\sec^{2}{ a x}",
      "\\int \\sec{x} dx = \\ln{\\left|\\sec{x} + \\tan{x}\\right|} = 2 \\tanh^{-1} \\left(\\tan{\\frac{x}{2}}\\right)",
      "\\int \\sec^{2}{ a x} dx = \\frac{1}{ a } \\tan{ a x}",
      "\\int \\sec^3{x} dx = \\frac{1}{2} \\sec{x} \\tan{x} + \\frac{1}{2} \\ln{\\left|\\sec{x} + \\tan{x}\\right|}",
      "\\int \\sec{x} \\tan{x} dx = \\sec{x}",
      "\\int \\sec^{2}{x} \\tan{x} dx = \\frac{1}{2} \\sec^{2}{x}",
      "\\int \\sec^{ n }{x} \\tan{x} dx = \\frac{1}{ n } \\sec^{ n }{x}, \\quad n \\neq 0",
      "\\int \\csc{x} dx = \\ln{\\left|\\tan{\\frac{x}{2}}\\right|} = \\ln{\\left|\\csc{x} - \\cot{x}\\right|} + C",
      "\\int \\csc^{2}{ a x} dx = - \\frac{1}{ a } \\cot{ a x}",
      "\\int \\csc^3{x} dx = - \\frac{1}{2} \\cot{x} \\csc{x} + \\frac{1}{2} \\ln{\\left|\\csc{x} - \\cot{x}\\right|}",
      "\\int \\csc^{ n }{x} \\cot{x} dx = - \\frac{1}{ n } \\csc^{ n }{x}, \\quad n \\neq 0",
      "\\int \\sec{x} \\csc{x} dx =  \\ln{\\left|\\tan{x}\\right|}",
    ],
  },
  "section7": {
    "title": "Products of Trigonometric Functions and Monomials",
    "integrals": [
      "\\int x \\cos{x} dx = \\cos{x} + x \\sin{x}",
      "\\int x \\cos{ a x} dx = \\frac{1}{ a ^{2}} \\cos{ a x} + \\frac{x}{ a } \\sin{ a x}",
      "\\int x^{2} \\cos{x} dx = 2x \\cos{x} + \\left(x^{2} - 2\\right) \\sin{x}",
      "\\int x^{2} \\cos{ a x} dx = \\frac{2x \\cos{ a x}}{ a ^{2}} + \\frac{ a ^{2} x^{2} - 2}{ a ^{3}} \\sin{ a x}",
      "\\int x^{ n } \\cos{x} dx = - \\frac{1}{2} \\left(i\\right)^{n + 1} \\left[\\Gamma{\\left( n + 1, - ix\\right)} + \\left(-1\\right)^{ n } \\Gamma{\\left( n + 1, ix\\right)}\\right]",
      "\\int x^{ n } \\cos{ a x} dx = \\frac{1}{2} \\left(i a \\right)^{1 - n } \\left[\\left(-1\\right)^{ n } \\Gamma{\\left( n + 1, -i a x\\right)} - \\Gamma{\\left( n + 1, ix a \\right)}\\right]",
      "\\int x \\sin{x} dx = -x \\cos{x} + \\sin{x}",
      "\\int x \\sin{ a x} dx = - \\frac{x \\cos{ a x}}{ a } + \\frac{\\sin{ a x}}{ a ^2}",
      "\\int x^2 \\sin{x} dx = \\left(2 - x^2\\right) \\cos{x} + 2x \\sin{x}",
      "\\int x^2 \\sin{ a x} dx = \\frac{2 - a ^2 x^2}{ a ^3} \\cos{ a x} + \\frac{2x \\sin{ a x}}{ a ^2}",
      "\\int x^{ n } \\sin{x} dx = - \\frac{1}{2} \\left(i\\right)^{ n } \\left[\\Gamma{\\left( n + 1, -ix\\right)} - \\left(-1\\right)^{ n } \\Gamma{\\left( n + 1, -ix\\right)}\\right]",
    ],
  },
  "section8": {
    "title": "Products of Trigonometric Functions and Exponentials",
    "integrals": [
      "\\int e^{x} \\sin{x} dx = \\frac{1}{2} e^{x} \\left(\\sin{x} - \\cos{x}\\right)",
      "\\int e^{ b x} \\sin{ a x} dx = \\frac{1}{ a ^{2} + b ^{2}} e^{ b x} \\left( b \\sin{ a x} - a \\cos{ a x}\\right)",
      "\\int e^{x} \\cos{x} dx = \\frac{1}{2} e^{x} \\left(\\sin{x} + \\cos{x}\\right)",
      "\\int e^{ b x} \\cos{ a x} dx = \\frac{1}{ a ^{2} + b ^{2}} e^{ b x} \\left( a \\sin{ a x} + b \\cos{ a x}\\right)",
      "\\int xe^{x} \\sin{x} dx = \\frac{1}{2} e^{x} \\left(\\cos{x} - x \\cos{x} + x \\sin{x}\\right)",
      "\\int xe^{x} \\cos{x} dx = \\frac{1}{2} e^{x} \\left(x \\cos{x} - \\sin{x} + x \\sin{x}\\right)"
    ],
  },
  "section9": {
    "title": "Integrals of Hyperbolic Functions",
    "integrals": [
      "\\int \\cosh{ a x} dx = \\frac{1}{ a } \\sinh{ a x}",
      `\\int e^{ a x} \\sinh{ b x} dx = \\left\\{\\begin{array}{ll}
        \\dfrac{e^{ a x}}{ a ^{2} - b ^{2}} \\left[ a \\cosh{ b x} - b \\sinh{ b x}\\right] & a \\neq b \\\\
        \\dfrac{e^{2 a x}}{4 a } + \\dfrac{x}{2} & a = b
      \\end{array}\\right.`,
      "\\int \\sinh{ a x} dx = \\frac{1}{ a } \\cosh{ a x}",
      `\\int e^{ a x} \\sinh{ b x} dx = \\left
      \\{\\begin{array}{ll}
        \\dfrac{e^{ a x}}{ a ^{2} - b ^{2}} \\left[- b \\cosh{ b x} + a \\sinh{ b x}\\right] & a \\neq b \\\\
        \\dfrac{e^{2 a x}}{4 a } - \\dfrac{x}{2} & a = b
      \\end{array}\\right.`,
      `\\int e^{ a x} \\tanh{ b x} dx = \\left
      \\{\\begin{array}{ll}
        \\dfrac{e^{\\left( a + 2 b \\right) x}}{ a + 2 b } {}_2F_1 \\left[1 + \\dfrac{ a }{2 b }, 1, 2 + \\dfrac{ a }{2 b }, -e^{2 b x}\\right] - \\dfrac{1}{ a } e^{ a x} {}_2F_1 \\left[\\dfrac{ a }{2 b }, 1, 1E, -e^{2 b x}\\right] & a \\neq b \\\\
        \\dfrac{e^{ a x} - 2 \\tan^{-1} \\left[e^{ a x}\\right]}{ a } & a = b
      \\end{array}\\right.`,
      "\\int \\tanh{ a x} dx = \\frac{1}{ a } \\ln{\\cosh{ a x}}",
      "\\int \\cos{ a x} \\cosh{ b x} dx = \\frac{1}{ a ^{2} + b ^{2}} \\left[ a \\sin{ a x} \\cosh{ b x} + b \\cos{ a x} \\sinh{ b x}\\right]",
      "\\int \\cos{ a x} \\sinh{ b x} dx = \\frac{1}{ a ^{2} + b^{2}} \\left[ b \\cos{ a x} \\cosh{ b x} + a \\sin{ a x} \\sinh{ b x}\\right]",
      "\\int \\sin{ a x} \\cosh{ b x} dx = \\frac{1}{ a ^{2} + b ^{2}} \\left[- a \\cos{ a x} \\cosh{ b x} + b \\sin{ a x} \\sinh{ b x}\\right]",
      "\\int \\sin{ a x} \\sinh{ b x} dx = \\frac{1}{ a ^{2} + b ^{2}} \\left[ b \\cosh{ b x} \\sin{ a x} - a \\cos{ a x} \\sinh{ b x}\\right]",
      "\\int \\sinh{ a x} \\cosh{ a x} dx = \\frac{1}{4 a } \\left[-2 a x + \\sinh{2 a x}\\right]",
      "\\int \\sinh{ a x} \\cosh{ b x} dx = \\frac{1}{ b ^{2} - a ^{2}} \\left[ b \\cosh{ b x} \\sinh{ a x} - a \\cosh{ a x} \\sinh{ b x}\\right]",
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
    .replace(/ (a) /g, "\\left(" + a + "\\right)") :
    variable === "b" ? str
    .replace(/ (b) /g, "\\left(" + b + "\\right)") :
    variable === "c" ? str
    .replace(/ (c) /g, "\\left(" + c + "\\right)") :
    variable === "n" ? str
    .replace(/ (n) /g, "\\left(" + n + "\\right)") :
    str;
}

function renderConstant(data, sectionElement, i, a, b, c, n) {
  const integralElement = sectionElement.children[1].children[i];
  let katexString = data[sectionElement.id].integrals[i];

  if (!a || !b || !c || !n) return;

  if ( a !== "a") {
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
