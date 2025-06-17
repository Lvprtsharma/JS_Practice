class ParentCar{
    
    speed = 100;

    constructor(make, model){
        this.make=make;
        this.model=model;
    }

    startEngine(){
        console.log('Starting engine... for Parentcar');
    }
}

class Audi extends ParentCar{

    speed = 200

    // overridden method
    startEngine(){
        console.log('Starting engine... for Audi');
    }

    autoPartking(){
        console.log("Audi auto parking")
    }
}

const obj = new Audi();
obj.startEngine();
obj.autoPartking()
console.log(obj.speed)

const pobj = new ParentCar();
pobj.startEngine();
// pobj.autoPartking(); // error
