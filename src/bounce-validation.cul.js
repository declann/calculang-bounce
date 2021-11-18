import { x, y, dy, t } from './bounce.cul.js';
export { x, y, dy, t };

import control_projection from './bounce-control-projection.js';
export { control_projection }; // for a look

export const dampener = () => 0.98;
export const dx = () => 4;

export const impact_x = () => x() - control_projection[t()].x;
