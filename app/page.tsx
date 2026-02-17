import { resendSignIn, signInMagicLinkServer } from "@/auth";
import { db } from "@/src/db";
import { usersTable } from "@/src/db/schema";
import { signInMagicLink } from "@/src/lib/auth-client";
import { getSession } from "@/src/utils/auth";

export default async function Home() {
  const result = await db.select().from(usersTable);

  // const auth = await signInMagicLinkServer();

  const session = await getSession();
  console.log(session, "session");

  // const email = await resendSignIn(
  //   "braifz.dev@gmail.com",
  //   "https://example.com",
  // );

  // console.log(email);
  console.log(result);

  return (
    <div>
      <h1>Street Legends</h1>
    </div>
  );
}
