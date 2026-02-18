"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import signInMagicLinkAction from "@/src/lib/actions/signInMagicLinkAction";
import Image from "next/image";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="default"
      type="submit"
      className="w-full cursor-pointer"
      disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar link"}
    </Button>
  );
};

export default function SignInPage() {
  const [state, formAction] = useActionState(signInMagicLinkAction, {
    error: undefined,
    success: false,
  });

  return (
    <div className="h-screen w-full flex bg-background">
      <div className="">
        <Image
          src="/logo.png"
          alt="StreetSpot logo"
          width={700}
          height={700}
          className="absolute top-20 left-10 z-50 hidden lg:block"
        />

        <Image
          src="/logo.png"
          alt="StreetSpot logo"
          width={300}
          height={300}
          className="absolute top-5 left-1/2 -translate-x-1/2 z-50 lg:hidden"
        />

        <Image
          fill
          src="/images/hero-street.jpg"
          alt="Urban street art background"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute lg:right-1 z-10 flex h-[400px] mx-2 lg:h-[500px] lg:w-[400px] flex-col p-8 lg:mt-20 lg:mr-30 bg-sidebar-primary/90 rounded-lg  border-2 border-background mt-60">
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary"> ¡Bienvenido de nuevo! </p>
            <h1 className="text-3xl font-bold  border-b">Inicia sesión </h1>
          </div>

          <label htmlFor="email" className="text-sm">
            Email
          </label>

          <Input name="email" type="email" required />

          <SubmitButton />
          {state?.error && <p className="text-red-500">{state.error}</p>}

          {state?.success && (
            <p className="text-green-500">Magic link enviado!</p>
          )}

          <Separator />

          <Button
            variant="outline"
            className="w-full cursor-pointer flex items-center gap-2"
          >
            <Image src="/google.webp" alt="Google" width={18} height={18} />
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
