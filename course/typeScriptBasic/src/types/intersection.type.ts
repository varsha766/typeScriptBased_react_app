// intersection type
// It is the intersection of common properties of both the type along with unque property of each
// useful when need to pick up common and unique prperties from two different object
// difference between union and intersection type is in case of union either of type A or type B should be there or both but in case of intersection all the unique property combined with the common property should be there
//
type Dogs = {
  name: string;
  barks: boolean;
  color: string;
};

type Cats = {
  name: string;
  purrs: boolean;
  color: string;
};

type HybridAnimalProp = Dogs & Cats;

const hybridAnimal: HybridAnimalProp = {
  name: "Max",
  color: "white",
  barks: true,
  purrs: true,
};
