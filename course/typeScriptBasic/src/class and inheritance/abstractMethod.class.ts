/**
 *  metod overriding in child classes
 *  means we can override or modify the method of parent class in child class
 *  Only condition that we have to fulfil is method in child class accepts same parmeter as in parent class
 *  i.e method signature won't change
 * */

type Holiday = {
  date: Date;
  reason: string;
}[];
abstract class Departments {
  protected abstract holidays: Holiday;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holiday) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log("Here is the list of holidays");
    this.holidays.forEach((holiday, index: number) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

class ItDepart extends Departments {
  protected holidays: Holiday = [];

  constructor() {
    super("IT Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays of ${this.name}`);
    this.holidays.forEach((holiday, index: number) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

class AdminDepartment extends Departments {
  protected holidays: Holiday = [];
  constructor() {
    super("Admin Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays of ${this.name}`);
    this.holidays.forEach((holiday, index: number) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

const ItHoliday: Holiday = [
  {
    date: new Date(),
    reason: "Holi",
  },
  {
    date: new Date(2022 / 10 / 25),
    reason: "It department day",
  },
];

const adminHolidays: Holiday = [
  {
    date: new Date(),
    reason: "Holi",
  },
  {
    date: new Date(2022 / 11 / 1),
    reason: "Admin department day",
  },
];

const itDepartments: ItDepart = new ItDepart();
const adminDeprtments: AdminDepartment = new AdminDepartment();

itDepartments.addHolidays(ItHoliday);
adminDeprtments.addHolidays(adminHolidays);

itDepartments.printHolidays();
adminDeprtments.printHolidays();

/**
 * how to remove extra repetative code of printHolidays in above case
 * We can use abstract method to solve this issue
 * Abstract method is the signature of the method that every child class will implement
 * In our use case since every child class implementing printHoliday class
 * with different value we will make it abstract method
 * Adstract mthod just has definition of method withot body
 * method can take parameter like:- public abstract printHolidays(message: string): void; // it is a abstract method it has just a definition but no body
 * in child class if we won't define the abstract class then will get below error
 * Non-abstract class 'ItDepartment' does not implement all abstract members of 'Deprtments'
 * 
 * 
 * using abstract class we force the child class to implement certain properties or method


*/

abstract class Deprtments {
  protected abstract holidays: Holiday;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holiday) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  public abstract printHolidays(): void; // it is a abstract method it has just a definition but no body
}
class ItDepartment extends Deprtments {
  protected holidays: Holiday = [];

  constructor() {
    super("IT Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays of ${this.name}`);
    this.holidays.forEach((holiday, index: number) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

class AdminDeprt extends Deprtments {
  protected holidays: Holiday = [];
  constructor() {
    super("Admin Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays of ${this.name}`);
    this.holidays.forEach((holiday, index: number) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

const ItDepartHoliday: Holiday = [
  {
    date: new Date(),
    reason: "Holi",
  },
  {
    date: new Date(2022 / 10 / 25),
    reason: "It department day",
  },
];

const adminDeprtHolydays: Holiday = [
  {
    date: new Date(),
    reason: "Holi",
  },
  {
    date: new Date(2022 / 11 / 1),
    reason: "Admin department day",
  },
];

const itDepart: ItDepartment = new ItDepartment();
const adminDepart: AdminDeprt = new AdminDeprt();

itDepart.addHolidays(ItDepartHoliday);
adminDepart.addHolidays(adminDeprtHolydays);

itDepart.printHolidays();
adminDepart.printHolidays();
