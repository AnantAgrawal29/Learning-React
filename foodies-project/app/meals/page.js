import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";

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
      <main>{/* <MealGrid /> */}</main>
    </>
  );
}
