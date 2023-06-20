// Index signature
/**
 * one object can  have only one index signature.
 * we can use union if we want two type ex: string | number but can not make two index signature in one object
 * If we want a key pair format in particular format we can use index signature
 * Index signature can co-exists with other values as well

*/

type Airoplane = {
  flightNumber: string;
  airplaneModel: string;
  dateofDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    // orderProperty: string // we can not define it as number as we have  [key: string]: string;
    [key: string]: string;
    //  [key: string |number]: string|number; // we can also do like this
  };
};

const airoPlane: Airoplane = {
  flightNumber: "SG102",
  airplaneModel: "A380",
  dateofDeparture: "12/06/2023",
  timeOfDeparture: "18:10",
  from: "JFK",
  to: "DCA",
  seats: {
    "10A": "Varsha kumri",
    "10B": "JOHN Jacobs",
    // 10: 12, // this is the issue we can add this value also so we will define Index signature in Aeroplane type not simply seat:{}
  },
};
