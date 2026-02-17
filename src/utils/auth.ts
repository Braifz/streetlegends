import { auth } from "@/auth";
import { headers } from "next/headers";

export type Session = Awaited<ReturnType<typeof auth.api.getSession>>;

export const isLoggedIn = async () => {
  const session = await getSession();

  return !!session;
};

export const getSession = async (): Promise<Session | null> => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};
