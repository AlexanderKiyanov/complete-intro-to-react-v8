import { useState } from "react";

let count = 0;

const animals = ["bird", "cat", "reptile", "dog", "rabbit"];

export const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = []

  count++;

  return (
    <div className="search-params">
      <h1>{count}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label>
          Animal
          <select
            name="animal"
            id="animal"
            onChange={(e) => {
              setBreed("")
              setAnimal(e.target.value)
            }}
            value={animal}
          >
            <option />

            {animals.map((animalName) => (
              <option key={animalName} value={animalName}>
                {animalName}
              </option>
            ))}
          </select>
        </label>




        <label>
          Breed
          <select
            name="breed"
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
            disabled={breeds.length === 0}
          >
            <option />

            {breeds.map((breedName) => (
              <option key={breedName} value={breedName}>
                {breedName}
              </option>
            ))}
          </select>
        </label>



        <button>Submit</button>
      </form>
    </div>
  );
};
