import { db, WaitingList } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db
    .insert(WaitingList)
    .values([
      { email: "johndoe@example.com" },
      { email: "impondesk@gmail.com" },
    ]);
}

///astro dev --port $PORT
