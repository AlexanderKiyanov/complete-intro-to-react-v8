import { Pet } from "./Pet";

const pets = [
  {
    id: 1,
    name: "Loona",
    animal: "dog",
    breed: "mixed",
  },
  {
    id: 2,
    name: "Pepper",
    animal: "bird",
    breed: "Cocktail",
  },
  {
    id: 3,
    name: "Doink",
    animal: "Loona",
    breed: "mixed",
  },
];

export const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  );
};
