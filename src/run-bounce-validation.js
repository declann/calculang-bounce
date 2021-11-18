var m = require('./bounce-validation');

var out = [...Array(100).keys()].map((t_in) => ({
  t_in,
  impact_x: Math.round(m.impact_x({ t_in: t_in })),
  impact_y: Math.round(m.impact_y({ t_in: t_in })),
  impact_dy: Math.round(m.impact_dy({ t_in: t_in })),
}));

console.log(JSON.stringify(out));
