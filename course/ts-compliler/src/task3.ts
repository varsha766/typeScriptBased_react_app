type answer_1 = number extends 56 ? true : false; //string
type answer_2 = 76 extends number ? true : false;
type answer_3 = string[] extends any ? true : false;
type answer_4 = string[] extends any[] ? true : false;
type answer_5 = unknown extends any ? true : false;
type answer_6 = any extends any ? true : false;
type answer_7 = Date extends { new (...args: any[]): any } ? true : false;
type answer_8 = typeof Date extends { new (...args: any[]): any }
  ? true
  : false;
type answer_9 = typeof Date extends { new (...args: any[]): Date }
  ? true
  : false;

// 1.'false'// 56 is subtype of number so number can't extends 56 so false
// 2.'true'
// 3. 'true'// any is super type of all type so any type can extend any
// 4.'true'//as any array can be supertype string array
// 5.'true'// as unknown is subtype and can bs extends from super type any
// 6."true"// as both are on equal
// 7."false"//false  Date can not be extends constructor function. if it is object or type of date it would extend the constructor
// 8.'true'// typeof Date represent a date constructor and date constructor can extend any type constructor function
// 9."true" // as typeof date is date constructo and can extend date



