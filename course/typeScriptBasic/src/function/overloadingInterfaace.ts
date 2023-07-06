interface ITicketReserva {
  departureDate: Date;
  returnDate?: Date;
  departureFrom: string;
  destination: string;
}

interface ITickRes {
  (
    departureDate: Date,
    returnDate: Date,
    departureFrom: string,
    destination: string
  ): TicketReservation | never;
  (departureDate: Date, departureFrom: string, destination: string):
    | TicketReservation
    | never;
}

const ticketReseve: ITickRes = (
  departureDate,
  returnDateOrDepartureFrom,
  departureFromOrDestination,
  destination?: string
) => {
  if (returnDateOrDepartureFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartureFrom,
      departureFrom: departureFromOrDestination,
      destination,
    };
  }
  if (typeof returnDateOrDepartureFrom === "string") {
    return {
      departureDate,
      departureFrom: returnDateOrDepartureFrom,
      destination: departureFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve  ticket");
};

console.log(ticketReseve(new Date(), new Date(), "Delhi", "Mumbai"));
console.log(ticketReseve(new Date(), "Delhi", "Mumbai"));

interface credential {
  credential: object;
  issuerDid?: string;
  verificationMethodId: string;
  privateKeyMultibase?: string;
  registerCredential: boolean;
  date?: string;
  domain?: string;
}

interface ICredentialCallSign {
  (
    credential: object,
    issuerDid: string,
    verificationMethodId: string,
    privateKeyMultibase: string,
    registerCredential: boolean
  ): string | never;
  (
    crededntial: object,
    verificationMethod: string,
    date: string,
    domain: string,
    registerCredential: boolean
  ): string | never;
}

const crededntial: ICredentialCallSign = (
  credential: object,
  issuerDidOrverificationMethod: string,
  verificationMethodIdOrDate: string,
  privateKeyMultibaseOrDomain: String,
  registerCredential: boolean
) => {
  if (verificationMethodIdOrDate.includes("#key-")) {
    return "case of Ed25519Signature2020";
  } else if (issuerDidOrverificationMethod.includes("#key-")) {
    return "case of EthereumEip712Signature2021";
  } else {
    throw new Error("Invalid keyType");
  }
};

console.log(
  crededntial(
    { name: "varsha" },
    "did:hid:testnet:z5n35bBiNhAFeegT2MCTra4XHRfEu2NA79ghacftagqYS",
    "did:hid:testnet:z5n35bBiNhAFeegT2MCTra4XHRfEu2NA79ghacftagqYS#key-1",
    "geueiwri357594jytj6u60pyb485454pyr",
    false
  )
);

console.log(
  crededntial(
    { name: "varsha" },
    "did:hid:testnet:z5n35bBiNhAFeegT2MCTra4XHRfEu2NA79ghacftagqYS#key-1",
    "29-06-2023",
    "testDOmain",
    false
  )
);
