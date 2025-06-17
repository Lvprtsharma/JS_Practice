class Carstatic{
    static wheel = 4;

    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
    }

    static stop(){
        console.log("car - stop")
    }
    drive(){
        console.log(`${this.name} is driving`)
    }
}

const obj = new Carstatic("Venue", "Hyundai", 2342342);
console.log(`${obj.name}`)
console.log(`${obj.model}`)
console.log(`${obj.price}`)
console.log(`${Carstatic.wheel}`)
Carstatic.stop()
obj.drive()



