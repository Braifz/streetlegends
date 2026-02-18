import { db } from "@/src/db";
import { usersTable } from "@/src/db/schema";
import { getSession } from "@/src/utils/auth";

export default async function Home() {
  const result = await db.select().from(usersTable);

  const session = await getSession();

  return (
    <div>
      <h1>Street Legends</h1>

      {session?.user && (
        <div>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
        </div>
      )}
    </div>
  );
}
