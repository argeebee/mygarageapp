var carStack = [];
var tempStack = [];



function addCar(thisCar){
    carStack.push(thisCar);
    console.log(carStack);

}

// search to remove car based on plate number
function removeCar(plateNumber){
    var poppedCar = carStack.pop();

    if(plateNumber == poppedCar.plateNumber){

        alert("The " + poppedCar.model + " has been returned.")
        
    }
    if(plateNumber != poppedCar.plateNumber){

        
        alert("Car License #: " + poppedCar.plateNumber + " " 
                        + poppedCar.model + " was removed. Searching for your")

            tempStack.push(poppedCar);
            console.log(tempStack);

    }
}