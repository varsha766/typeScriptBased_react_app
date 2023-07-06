/**
 * abstract classes
 * The advantage of abstract classes is that they can contain abstract members in  class
 * abstract class can not be instantiated
 * we can not instantiate abstraact class
 */

type Holidays = {
  date: Date;
  reason: string;
}[];
abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
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
console.log(Department);

class ItDeprt extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("IT Department");
  }
}

console.log(ItDeprt);

class AdminDepart extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("Admin Department");
  }
}

const ItHolidays: Holidays = [
  {
    date: new Date(),
    reason: "Holi",
  },
  {
    date: new Date(2022 / 10 / 25),
    reason: "It department day",
  },
];

const adminHoliday: Holidays = [
  {
    date: new Date(),
    reason: "Holi",
  },
  {
    date: new Date(2022 / 11 / 1),
    reason: "Admin department day",
  },
];

const itDepartment: ItDeprt = new ItDeprt();
const adminDeprtment: AdminDepart = new AdminDepart();

itDepartment.addHolidays(ItHolidays);
adminDeprtment.addHolidays(adminHoliday);

itDepartment.printHolidays();
adminDeprtment.printHolidays();
