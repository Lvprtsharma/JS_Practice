class Carr{

    constructor(model, name, color, price){
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color

    }

    refuel(){
        console.log(`${this.model} - ${this.name} is refueled`);
    }
}

const const1 = new Carr("BMW", "X1", "Black", 213231221)
console.log(const1.model)
console.log(const1.name)
console.log(const1.price)
console.log(const1.color)
const1.refuel()



