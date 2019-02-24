var vehicles = [ // array of objects
    {   //object
        year: 2018,
        make: "Ford", //key value pairs
        model: "F-150",
        trim: "Raptor",
        price: 87500, //can't have a comma
        mileage: 12000,
        cylinder: 8,
        horsepower: 4000,
        color: "red",
        //image: ./images/fordF150.png
        features: ["off-road tires", "4 x 4","Bluetooth", "lift kit"] //array
    } ,
    
    { //object  
        year: 2017,
        make: "Nissan", //key value pairs
        model: "Rogue",
        trim: "Base",
        price: 14000, //can't have a comma
        mileage: 12000,
        cylinder: 8,
        horsepower: 4000,
        color: "blue",
        features: ["baby-seat", "Bluetooth"] //array
    } ,

    { //object  
        year: 1934,
        make: "Ford", //key value pairs
        model: "Model - T",
        trim: "Base",
        price: 15000, //can't have a comma
        mileage: 5000,
        cylinder: 8,
        horsepower: 1500,
        color: "silver",
        features: ["crankshaft"] //array
    } ,

    { //object  
        year: 2017,
        make: "Nissan", //key value pairs
        model: "F-150",
        trim: "Base",
        price: 87500, //can't have a comma
        mileage: 12000,
        cylinder: 8,
        horsepower: 4000,
        color: "red",
        features: ["baby-seat", "Bluetooth"] //array
    }
];

function initializePage(){
    console.log("init page!",vehicles);

    buildMenu();
}

function buildMenu(){
    var target = $("#vehicle-list");
    target.empty();
    for(x=0; x<vehicles.length; x++){
        var vehicle = vehicle[x]; //needed to know what image to grab based on index

        var li = $("<li></li>").text(vehicle.year + " " + vehicle.make + " " + vehicle.model + " " + vehicle.color);

        target.append(li);
    }
}

$(document).ready(initializePage);