function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(225);
    midPointEllipse(200, 150, 300, 200);
}

function midPointEllipse(rX, rY, xC, yC) {
    var x0 = 0;
    var y0 = rY;

    //calculating initial decision paramter in Region 1

    var p1 = (rY * rY) - (rX * rX * rY) + (0.25 * rX * rX);

    var p1k = p1;
    var x = x0;
    var y = y0;

    while ((2 * rY * rY * x) < (2 * rX * rX * y)) {
        if (p1k < 0) {
            ellipse(xC + x, yC + y, 0.85);
            x = x + 1;
            y = y;
            p1k = p1k + (2 * rY * rY * x) + (rY * rY);
        }
        else {
            ellipse(xC + x, yC + y, 0.85);
            x = x + 1;
            y = y - 1;
            p1k = p1k + (2 * rY * rY * x) - (2 * rX * rX * y) + (rY * rY);
        }
        symmetryPoints(x, y, xC, yC);
    }


    if ((2 * rY * rY * x) >= (2 * rX * rX * y)) {
        var p2 = Math.pow(rY, 2) * Math.pow(x + 0.5, 2) + Math.pow(rX, 2) * Math.pow(y - 1, 2) - rX * rX * rY * rY;


        var p2k = p2;

        while (y > 0) {
            if (p2k > 0) {
                ellipse(xC + x, yC + y, 0.85);

                x = x;
                y = y - 1;
                p2k = p2k - (2 * rX * rX * y) + (rX * rX);
            }
            else {
                ellipse(xC + x, yC + y, 0.85);

                x = x + 1;
                y = y - 1;
                p2k = p2k + (2 * rY * rY * x) - (2 * rX * rX * y) + (rX * rX);
            }
            symmetryPoints(x, y, xC, yC);

        }
    }

}

function symmetryPoints(x, y, xC, yC) {
    ellipse(xC + x, yC - y, 0.85);
    ellipse(xC - x, yC + y, 0.85);
    ellipse(xC - x, yC - y, 0.85);
}