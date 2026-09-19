import { createContext, useEffect, useState } from "react";

export const MealsContext = createContext({
  meals: null,
});
export function MealsContextProvider({ children }) {
  const [meals, setMeals] = useState();

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const allMeals = await response.json();
      setMeals(allMeals);
    }

    loadMeals();
  }, []);

  //   async function addOpinion(enteredOpinionData) {
  //     const response = await fetch("http://localhost:3000/opinions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(enteredOpinionData),
  //     });

  //     if (!response.ok) {
  //       return;
  //     }

  //     const savedOpinion = await response.json();
  //     setOpinions((prevOpinions) => [savedOpinion, ...prevOpinions]);
  //   }

  const contextValue = {
    meals,
  };

  return <MealsContext value={contextValue}>{children}</MealsContext>;
}
