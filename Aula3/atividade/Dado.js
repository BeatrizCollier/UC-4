
class Dado {
    #face;

    constructor(){
        this.#face = Math.floor(Math.random() * 6 + 1);
        Object.freeze(this);
    }
    get getFace(){
        return this.#face;
    }

    set setFace(face){
        this.#face = face;
    }

}

module.exports = { Dado };

// const d1 = new Dado();
// console.log(d1.getFace);