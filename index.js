//click events
var addCar = document.getElementById("addCar");
var removeCar = document.getElementById("removeCar");

//event listeners
document.getElementById("removeCar").addEventListener("click", function(){
    var plateNumber = document.getElementById("plateNumber").value;
    removeCar(licenseNumber);
});


document.getElementById("addCar").addEventListener("click", function(){
    var car = new cars("red", "Zyris", "#mycar", "mustang");
    var car = new cars("blue", "Bob", "#hiscar", "camry");
});



// var garageStack = createStack();
// function createStack(){
    
// }

