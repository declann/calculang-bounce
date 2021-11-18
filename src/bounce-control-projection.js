/*

Working off the following:

```javascript
function draw() {
  x += 4;
  y += dy;
  if (y > 185) {
    dy = - dy;
    ellipse(x, 190, 36, 25);
  } else {
    dy = dy * 0.98 + 3;
    ellipse(x, y, 30, 30);
  }
}
```

from Bret Victor, http://worrydream.com/LearnableProgramming/

*/

var limit = 1000; // allows us to validate first 1000 time periods only

var control_projection = [];
var x = 100 /* because I want to start at 100 */,
  y = 50,
  dy = 0;
for (var i = 0; i < limit; i++) {
  x += 4;
  y += dy;
  if (y > 185) {
    dy = -dy;
    y = 190; // (from below)
    //ellipse(x, 190, 36, 25);
  } else {
    dy = dy * 0.98 + 3;
    //ellipse(x,y,30,30);
  }
  control_projection.push({ x, y, dy });
}

export default control_projection;
