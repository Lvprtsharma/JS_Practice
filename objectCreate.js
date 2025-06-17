// 1. Object literals

const user = {
    fname: "love",
    lname: "Sharma",
    age: 23
}

console.log(user.fname)

// 2. Constructor Function
function Car(brand, model, price){
    this.brand = brand,
    this.model = model,
    this.price = price
}

const c1 = new Car("BMW", "X1", 23423432242)
console.log(c1.brand)


// 3. Class style

class Customer{
    constructor(name, product){
        this.name = name,
        this.product = product
    }

    addToCart(){
        console.log(`${this.product} added to cart`)
    }
}

// instance of class
const cust1 = new Customer("Love", "Macbook pro");
console.log(cust1.name)
console.log(cust1.product)
cust1.addToCart();


// 4. Object.create method : with some prototypes

const employeePrototype = {
    printInfo: function(){
        console.log(`hello, emp name is ${this.name}`);
    }
};

const e1 = Object.create(employeePrototype);
e1.name = "Tom";
e1.printInfo();


// 5. Using factory functions: returns an Object
function createDepartment(deptName, hod){
    return {
        deptName: deptName,
        hod: hod,
        getDeptInfo: function(){
        console.log(`Department is ${this.deptName} and HOD is ${this.hod}`);
    }
    }
};

const dept1 = createDepartment("Physics","Love Sharma")
dept1.getDeptInfo()


