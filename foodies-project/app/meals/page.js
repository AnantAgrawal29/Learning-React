import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function MealsAsync() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <MealsAsync />
        </Suspense>
      </main>
    </>
  );
}
