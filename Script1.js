// JavaScript source code
//var vehicle = [engine, body, doors, windows, tires, wheels, transmission, exhaust];
//var truck = [towingPackage, transfercase, truckBed];
var car = [trunkLid];
doors = []
var engine = []


//var engine = [pistons, connectingRods, crank, bearings, cam, valves, head, intake, injectors, exhaustManifold, sparkPlugs, distributer, sparkPlugWires, timingBelt, alternator, powerSteeringPump, acCompressor, waterPump, airFilter];
function body(color, bodytype, numberDoors, numberWindows, trunkOrBed) {
    this.bodyColor = color;
    this.typeOfCar = bodytype;
    this.howManyDoors = numberDoors;
    this.numberOfWindows = numberWindows;
    this.carOrTruck = trunkOrBed;
}
var builtDoors = [];
var car = function () {
    this.door = function (howManydoorhandles, howManySpeakers, whatKindDoorPanel, typeOfWindows, Mirrors) {
        this.doorhandles = howManydoorhandles;
        this.speakers = howManySpeakers;
        this.doorPanel = whatKindDoorPanel;
        this.typeWindows = typeOfWindows;
        this.mirrors = Mirrors;
    };
};
var numDoors = 5
for (var i = 1; i <= numDoors; i++) {
    var doorNum = "door" + i
    car.apply(doorNum, [2, 6, "woodgrain and leather", "power", "Power and Heated"]);
    //  doorNum = this.door(2, 6, "woodgrain and leather", "power", "Power and Heated");
    builtDoors.push(doorNum);
};

console.log([builtDoors]);


for (var i = 1; i <= numDoors; i++) {
    var doorNum = "door#" + i
    doorNum = new Door(2, 6, "woodgrain and leather", "power", "Power and Heated");
    builtDoors.push([doorNum]);
};

console.log(builtDoors);

var windows = null;
var tires = [tireType, tirebrand, tireSize];
var wheels = [wheelType, wheelSize];
var transmission = [transType, numberGears];
var exhaust = [exhaustType];
var towingPackage = [towWeight, hitchType];
var transfercase = [true, false];
var truckBed = [true, false];
var trunkLid = [true, false];
var BuildCar = new car(engine, body, doors, windows, tires, wheels, transmission, exhaust) 
var BuildEngine = new engine(pistons, connectingRods, crank, bearings, cam, valves, head, intake, intectors, exhaustManifold, sparkPlugs, distributer, sparkPlugWires, timingBelt, alternator, powerSteeringPump, acCompressor, waterPump, airFilter);
var Buildbody = new body(color, bodytype, numberDoors, numberWindows, trunkOrBed);
Builddoor = new door(i++)(2,3,"woodgrain","power","elecAndHeated");


console.log(Builddoor);

var chevyTruck = BuildCar("5.3 V*", "CrewCab", 4, 6, 5, 5, "Allison", "Dual")

console.log(chevyTruck)
