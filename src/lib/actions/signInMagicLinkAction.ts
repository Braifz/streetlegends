"use server";

import { signInMagicLinkServer } from "@/auth";
import { z } from "zod";

interface SignInState {
  error?: string;
  success?: boolean;
  data?: { status: boolean };
}

const ERROR_MESSAGE = "Email inválido";

const signInSchema = z.object({
  email: z.email(ERROR_MESSAGE),
});

const signInMagicLinkAction = async (
  state: SignInState,
  formData: FormData,
): Promise<SignInState> => {
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return { ...state, error: ERROR_MESSAGE };
  }

  try {
    const result = await signInMagicLinkServer(validatedFields.data.email);

    return { ...state, success: true, data: result };
  } catch (error) {
    console.error("Error en magic link:", error);
    return { ...state, error: "Error al enviar magic link" };
  }
};

export default signInMagicLinkAction;
