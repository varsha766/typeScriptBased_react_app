/**
 * Inheritance of interface
 * we can inherit property of interface
 */
interface SuperAdmin {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface SuperAdminWithAddress extends SuperAdmin {
  address: string;
}

const superAdmin: SuperAdmin = {
  name: "varsha",
  email: "varsha@gmail.com",
  phone: 12315787970,
  gender: "Female",
};
const superAdminWithAddress: SuperAdminWithAddress = {
  name: "varsha",
  email: "varsha@gmail.com",
  phone: 12315787970,
  gender: "Female",
  address: "some address",
};

console.log(superAdmin, superAdminWithAddress);

/**
 * Inheritance of interface
 * we can inherit from multiple interface
 * There is no limit on how much interface one interface can inherit
 */

enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface Role {
  role: Roles;
}

enum PermissionList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissions {
  permission: PermissionList[];
}

interface AdminUsers extends SuperAdmin, Role, UserPermissions {
  numberOfUserReporting: number;
}

const adminUser: AdminUsers = {
  name: "nandani",
  email: "nad@gmail.com",
  phone: 234448585,
  gender: "Female",
  role: Roles.admin,
  permission: [PermissionList.execute, PermissionList.read],
  numberOfUserReporting: 5,
};

console.log(adminUser);

/**
 * generic with interface
 * using generics we can restrict user from entring random value in defrined interface field
 */

enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  silver = "silver",
  black = "black",
}
enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}
interface Automobiles<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

const ferrari: Automobiles<
  AutomobileTypes,
  AutomobileBrands,
  AutomobileColors
> = {
  type: AutomobileTypes.car,
  brand: AutomobileBrands.ferrari,
  colors: [AutomobileColors.red, AutomobileColors.black],
  description: "This is ferrari",
};
// we can also pass any type as  generic value rather enum value as below
const honda: Automobiles<string, string, string> = {
  type: "car",
  brand: "Honda",
  colors: ["silver", "black"],
  description: "This is a Honda",
};
// we can pass different generic type in intereface as below
const toyota: Automobiles<string, AutomobileBrands, number> = {
  type: "car",
  brand: AutomobileBrands.toyota,
  colors: [6676, 97897],
  description: "This is a Toyota",
};

console.log(ferrari, honda, toyota);
