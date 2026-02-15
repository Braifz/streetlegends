import { db } from "@/src/db";
import { usersTable } from "@/src/db/schema";

export default async function Home() {
  const result = await db.select().from(usersTable);

  console.log(result);

  return (
    <div>
      <h1>Street Legends</h1>
    </div>
  );
}
