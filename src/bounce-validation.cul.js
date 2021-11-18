import { x, y, dy, t } from './bounce.cul.js';
export { x, y, dy, t };

import control_projection from './bounce-control-projection.js';
export { control_projection }; // for a look

export const dampener = () => 0.5; // set to 0.5 to expose bug //0.98;
export const dx = () => 4;

export const impact_x = () => x() - control_projection[t()].x;
export const impact_y = () => y() - control_projection[t()].y;
export const impact_dy = () => dy() - control_projection[t()].dy;
