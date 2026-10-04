import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const s3 = new S3({
  region: "ap-south-1",
});
const db = sql("meals.db");

function normalizeImagePath(image) {
  if (typeof image !== "string" || image.startsWith("/")) {
    return image;
  }

  return `/${image}`;
}

export async function getMeals() {
  await new Promise((resolve) => {
    // throw new Error("");
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return db
    .prepare("SELECT * FROM meals")
    .all()
    .map((meal) => ({ ...meal, image: normalizeImagePath(meal.image) }));
}

export function getMeal(slug) {
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);

  return meal ? { ...meal, image: normalizeImagePath(meal.image) } : meal;
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const bufferedImage = await meal.image.arrayBuffer();
  s3.putObject({
    Bucket: "anant-nextjs-demo-users-image",
    Key: filename,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
  meal.image = `/images/${filename}`;
  return db
    .prepare(
      `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
    )
    .run(meal);
}
