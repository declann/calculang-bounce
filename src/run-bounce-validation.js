var m = require('./bounce-validation');

var out = [...Array(100).keys()].map((t_in) => ({
  t_in,
  impact_x: m.impact_x({ t_in: t_in }),
  impact_y: m.impact_y({ t_in: t_in }),
  impact_dy: Math.round(m.impact_dy({ t_in: t_in })),
}));

console.log(
  JSON.stringify({
    all: out,
    summary: out.reduce((acc, val, {}) => ({
      impact_x: acc.impact_x + Math.abs(val.impact_x),
      impact_y: acc.impact_y + Math.abs(val.impact_y),
      impact_dy: acc.impact_dy + Math.abs(val.impact_dy),
    })),
  })
); // anti-pattern!
console.log;
