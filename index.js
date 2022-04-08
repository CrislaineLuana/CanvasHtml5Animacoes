const canvas = document.querySelector('canvas')
canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext('2d');

function Circle(x, y, velX, velY, raio, color){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.raio = raio;
    this.color = color;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.raio, 0, Math.PI *2)
        c.strokeStyle = this.color;
        c.stroke();
    }

    this.uptade = function(){

        if(this.x + this.raio > innerWidth || this.x - this.raio < 0){
            this.velX = - this.velX
        }
        if(this.y + this.raio > innerHeight || this.y - this.raio < 0){
            this.velY = - this.velY
        }

        this.x += this.velX;
        this.y += this.velY;

        this.draw();
    }


}



function Square(x, y, velX, velY, width, height, color){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.width = width;
    this.height = height
    this.color = color;

    this.draw = function(){
        c.strokeStyle = this.color
        c.strokeRect(this.x, this.y, this.width, this.height)
    }

    this.uptade = function(){

        if(this.x + this.width > innerWidth || this.x - this.width < 0){
            this.velX = - this.velX
        }
        if(this.y + this.height > innerHeight || this.y - this.height < 0){
            this.velY = - this.velY
        }

        this.x += this.velX;
        this.y += this.velY;

        this.draw();
    }


}

let circleArray = [];
let squareArray = [];

for(let i = 0; i < 800; i++){
    let x = Math.floor(Math.random() * innerWidth)
    let y = Math.floor(Math.random() * innerHeight)
    let velX = (Math.random() * -0.5) * 3
    let velY = (Math.random() * -0.5) * 3
    let raio = Math.floor(Math.random() * 7)
    let width = 4
    let height = 4
    let color = `rgb(${Math.floor(Math.random() * 255)},
                     ${Math.floor(Math.random() * 255)},
                     ${Math.floor(Math.random() * 255)})`

    circleArray.push(new Circle(x, y, velX, velY, raio, color))
}

for(let i = 0; i < 800; i++){
    let x = Math.floor(Math.random() * innerWidth)
    let y = Math.floor(Math.random() * innerHeight)
    let velX = (Math.random() * -0.5) * 3
    let velY = (Math.random() * -0.5) * 3
    let width = 4
    let height = 4
    let color = `rgb(${Math.floor(Math.random() * 255)},
                     ${Math.floor(Math.random() * 255)},
                     ${Math.floor(Math.random() * 255)})`

    squareArray.push(new Square(x, y, velX, velY, width, height, color))
}



console.log(squareArray)

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    

    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].uptade();
    }

    for(let i = 0; i < circleArray.length; i++){
        squareArray[i].uptade();
    }

}

animate();

