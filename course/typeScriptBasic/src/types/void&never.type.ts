/**
 * Void and never type
 * void:  it is assigned to a function which does nt return any value
 * never type: it is assigned to  function that never completes
 * difference between void and never is void function does not return any thing but can perform any other procedure and complete  and typescript moves on next line of coded once it complete executing the void function.
 * Function assigned as a type never will never complete and the program terminates
 */

const addnumber = (): void => {
  console.log(2 + 4);
};
addnumber();

const throwNewError = (): never => {
  throw new Error("Your Program terminated because of error");
};
throwNewError();
