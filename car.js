//holds info and functionality for adding cars
//new instance of something
//this that instance -- workign with that current state of that objectdepends on scope where ur at
//node ref to particular obj thisnk as point
//declare function





function cars(color, owner, plateNumber, model){
   
    this.color = color;
    this.owner = owner;
    this.plateNumber = plateNumber;
    this.model = model;
    addCar(this);
}


var car = new cars();
