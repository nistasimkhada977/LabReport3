function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(225);
    midPointCircle(150, 300, 200);
}

function midPointCircle(radius, xC, yC) {
    //initializing the first point (x0,y0) = (0,r)
    var x0 = 0;
    var y0 = radius;
    var d = 0.85;
    var p0;
    //calculating intital decision paramter as:
    //If radius is integer

    if (radius % 1 == 0) {
        p0 = 1 - radius;
    } else {
        p0 = (5 / 4) - radius;
    }


    var pk = p0;
    var x = x0;
    var y = y0;
    //when x>=y then we reach the solution thats why loop goes only to x,y
    while (x < y) {
        if (pk < 0) {
            circle(xC + x, yC + y, d);

            x = x + 1;
            y = y;
            pk = pk + (2 * x) + 1;

        } else {

            circle(xC + x, yC + y, d);

            x = x + 1;
            y = y - 1;
            pk = pk + (2 * x) - (2 * y) + 1;
        }
        determinesymmetric(x, y, xC, yC, d);
    }
}

function determinesymmetric(x, y, xC, yC, d) {
    circle(xC - x, yC + y, d);
    circle(xC + x, yC - y, d);
    circle(xC - x, yC - y, d);
    circle(xC + y, yC + x, d);
    circle(xC - y, yC + x, d);
    circle(xC + y, yC - x, d);
    circle(xC - y, yC - x, d);
}