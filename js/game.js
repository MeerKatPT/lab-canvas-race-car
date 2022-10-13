class Game {
    constructor(ctx, width, height, car) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.car = car;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
        this.road = new Image();
    }

    // Clear the background using the image of the road
    drawBackground() {
        this.road.src = "/images/road.png"
        ctx.drawImage(this.road, 0, 0, 500, 700 )
    }

    stop() {
        clearInterval(this.intervalId)
    }

    checkGameOver() {
        
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.drawBackground();
        this.car.drawCar();
        this.updateObstacles();

    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            //updates the position of the obstacle
            this.obstacles[i].y +=1
            // draw the obstacles
            this.obstacles[i].draw()
        }

        // update obstacles every 3 seconds = 60secs * 3
        if (this.frames % 180 === 0) {
        
            // calculate the height of the rectangles/obstacles
            let minHeight = 50;
            let maxHeight = 100;
            // calculate the width of th obstacles
            let minWidth = 75;
            let maxWidth = 200;

            let height = Math.floor(
                Math.random() * (maxHeight - minHeight + 1) +
                minHeight);


            // add the obstacles to the array
            this.obstacles.push(new Enemy(65, 0, Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth),
                height, 'purple', this.ctx))

        }
    }
}