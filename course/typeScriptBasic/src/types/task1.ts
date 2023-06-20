const airplane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Foold ltd",
    address: "484, Some Street, New York",
    phone: 1432348489886,
  },
};

// convert above object to using type keyword

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type AirPlanDetail = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};

const airplaneDetail: AirPlanDetail = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Foold ltd",
    address: "484, Some Street, New York",
    phone: 1432348489886,
  },
};
