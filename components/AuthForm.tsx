"use client";

import { signInSchema, signUpSchema, TSignUpSchema } from "@/schemas/form";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { signUp, signIn } from "@/lib/actions/auth";

export interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isSignUp = type === "sign-up";
  const formSchema = isSignUp ? signUpSchema : signInSchema;

  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(formSchema as any),
  });

  const onSubmit = async (values: TSignUpSchema) => {
    try {
      setIsLoading(true);
      const { name, email, password } = values;

      const userCredential = isSignUp
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);

      const response = isSignUp
        ? await signUp({
            uid: userCredential.user.uid,
            name,
            email,
            password,
          })
        : await signIn({
            email,
            idToken: await userCredential.user.getIdToken(),
          });

      if (!response.success) throw new Error(response.message);

      toast.success(
        isSignUp
          ? "Account created successfully! Please sign in."
          : "You've signed in successfully!"
      );
      router.push(isSignUp ? "sign-in" : "/");
    } catch (error: any) {
      toast.error(error.message);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {isSignUp && (
            <CustomInput
              name="name"
              label="Full name"
              placeholder="Enter your full name"
              control={form.control}
            />
          )}
          <CustomInput
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            control={form.control}
          />
          <CustomInput
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            control={form.control}
          />
          {isSignUp && (
            <CustomInput
              name="avatar"
              type="file"
              label="Profile picture"
              placeholder="Upload your profile picture"
              control={form.control}
            />
          )}
          {isSignUp && (
            <CustomInput
              name="resume"
              type="file"
              label="Resume"
              placeholder="Upload your resume"
              control={form.control}
            />
          )}
        </div>

        {errorMessage && <FormMessage>{errorMessage}</FormMessage>}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isSignUp ? "Create an account" : "Sign in"}
        </Button>

        <div className="flex-center gap-2">
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <Link href={`/${isSignUp ? "sign-in" : "sign-up"}`}>
            {isSignUp ? "Sign in" : "Sign up"}
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default AuthForm;
