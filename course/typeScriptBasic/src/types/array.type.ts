let arrA = [1, 2, 3, 4];
let arrB = ["a", "b", "c"];
let arrC = ["a", "b"];

//Using typeScript we can do as

let arr1: number[] = [1, 2, 3, 4]; // array of number

let arr2: Array<string> = ["a", "b", "c"]; // array of string

let arr3: Array<string | number> = ["a", "b", 1, 2]; // union of string and number
// or let arr3: (string | number)[] = ["a", "b", 1, 2]; // union of string and number

// let Airoplanes = Array<Airoplane>;

type Airoplanes = Airoplane[];

const airoplanes: Airoplanes = [
  {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateofDeparture: "12/06/2023",
    timeOfDeparture: "18:10",
    from: "JFK",
    to: "DCA",
    seats: {
      "10A": "Varsha kumri",
      "10B": "JOHN Jacobs",
    },
  },
  {
    flightNumber: "SG103",
    airplaneModel: "A381",
    dateofDeparture: "24/06/2023",
    timeOfDeparture: "18:10",
    from: "JFK",
    to: "DCA",
    seats: {
      "10A": "Varsha kumri",
      "10B": "Nandani K",
    },
  },
];
