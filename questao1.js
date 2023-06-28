class Vertice {
    #x;
    #y;
    constructor(x, y) {
        this.#x = parseInt(x);
        this.#y = parseInt(y);
    }

    get getX() {
        return this.#x;
    }

    get getY() {
        return this.#y;
    }
    
    distancia(V) {
        return (Math.sqrt(Math.pow(this.#x - V.getX, 2) + Math.pow(this.#y - V.getY, 2)));
    }

    move(newX, newY) {
        this.#x = newX;
        this.#y = newY;
    }

    equals(V) {
        if(V.getX == this.#x && V.getY == this.#y) {
            return true;
        }
        else {
            return false;
        }
    }
}


/*const prompt = require("prompt-sync")({ signint : true });
const arr = [];
for(let i = 0; i < 3; i++) {
    let x = prompt(`Insira X do vertice ${i + 1}`);
    let y = prompt(`Insira Y do vertice ${i + 1}`);
    arr[i] = new Vertice(x, y);
}

arr[0].move(0, 1);
arr[1].move(0, 0);
arr[2].move(1, 1);

console.log(`arr[0] distancia arr[1] = ${arr[0].distancia(arr[1])}`);
console.log(`arr[0] distancia arr[1] = ${arr[1].distancia(arr[2])}`);
console.log(`arr[0] distancia arr[1] = ${arr[0].distancia(arr[2])}`);

console.log(`arr[0] equals arr[1] ? ${arr[0].equals(arr[1])}`);
console.log(`arr[1] equals arr[2] ? ${arr[1].equals(arr[2])}`);
console.log(`arr[0] equals arr[2] ? ${arr[0].equals(arr[2])}`);*/

module.exports = Vertice;