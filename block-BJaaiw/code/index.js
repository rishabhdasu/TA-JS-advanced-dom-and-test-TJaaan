let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let radius = 6;
let paddleHeight = 5;
let paddleWidth = 55;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;
let score = 0;
let lives = 3;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);



    function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }

    function mouseMoveHandler(e) {
        let relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth/2;
        }
    }

    function collisionDetection() {
        for(let i=0; i<brickColumnCount; i++) {
            for(let j=0; j<brickRowCount; j++) {
                let b = bricks[i][j];
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }
        }
    }

    function drawScore() {
        c.font = `1rem Arial`;
        c.fillStyle = `red`;
        c.fillText(`Score: `+score, 8, 20);
    }

    function drawLives() {
        c.font = `1rem Arial`;
        c.fillStyle = `red`;
        c.fillText(`Lives: `+lives, canvas.width-65, 20);
    }


    function ball() {
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI *2, false);
        c.fillStyle = `yellow`;
        c.fill();
        c.closePath();
    }

    
    function drawPaddle() {
        c.beginPath();
        c.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        c.fillStyle = `red`;
        c.fill();
        c.closePath();
    }
    


    let brickRowCount = 3;
    let brickColumnCount = 5;
    let brickWidth = 40;
    let brickHeight = 10;
    let brickPadding = 10;
    let brickOffsetTop = 30;
    let brickOffsetLeft = 30;

    let bricks = [];

    for(let i = 0; i<brickColumnCount; i++) {
        bricks[i] = [];
        for(let j = 0; j<brickRowCount; j++) {
            bricks[i][j] = { x: 0, y: 0, status: 1 };
        }
    }

    function drawBricks() {
        for(let i = 0; i<brickColumnCount; i++) {
            for(let j = 0; j<brickRowCount; j++) {
                if(bricks[i][j].status == 1) {
                    let brickX = (i*(brickWidth+brickPadding))+brickOffsetLeft;
                    let brickY = (j*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[i][j].x = brickX;
                    bricks[i][j].y = brickY;
                    c.beginPath();
                    c.rect(brickX, brickY, brickWidth, brickHeight);
                    c.fillStyle = `red`;
                    c.fill();
                    c.closePath();
                }
            }
        }
    }


    function draw() {
        c.clearRect(0, 0, innerWidth, innerHeight);
        drawBricks();
        ball();
        drawPaddle();
        collisionDetection();
        drawScore();
        drawLives();
        if(x + dx > canvas.width-radius || x + dx < radius) {
            dx = -dx;
        }
        if(y + dy < radius) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-radius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
                lives--;
                if(!lives) {
                  alert("GAME OVER");
                  document.location.reload();
                }
                else {
                  x = canvas.width/2;
                  y = canvas.height-30;
                  dx = 3;
                  dy = -3;
                  paddleX = (canvas.width-paddleWidth)/2;
                }
              }
          
        }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

    draw();
