import { magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
  plugins: [magicLinkClient()],
});

// // Sign in with Google
// const signInWithGoogle = async () => {
//   return await authClient.signIn.social({
//     provider: "google",
//     newUserCallbackURL: "/onboarding",
//   });
// };

// Sign in with magic link
const signInMagicLink = async (email: string) => {
  return await authClient.signIn.magicLink({
    email,
    callbackURL: "/api/auth/magic-callback",
  });
};
// Verify magic link
const verifyMagicLink = async (token: string) => {
  return await authClient.magicLink.verify({
    query: { token },
  });
};

// Sign out
const signOut = async () => {
  return await authClient.signOut();
};

// Get session
const getSession = async () => {
  return await authClient.getSession();
};

// Get user
const getUser = async () => {
  return (await authClient.getSession()).data?.user;
};

export const { signIn, signUp, useSession } = authClient;

export { signInMagicLink, verifyMagicLink, signOut, getSession, getUser };
