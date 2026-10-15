import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";

import fs from "node:fs/promises";

export default async function Home() {
  const userPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      try {
        const data = await fs.readFile("dummy-db.json", "utf-8");
        const users = JSON.parse(data);
        resolve(users);
        // reject(new Error("Failed to load users"));
      } catch (error) {
        reject(error);
      }
    }, 2000),
  );
  return (
    <main>
      <Suspense fallback={<p>Cooking...</p>}>
        <UsePromiseDemo userPromise={userPromise} />
      </Suspense>
    </main>
  );
}
