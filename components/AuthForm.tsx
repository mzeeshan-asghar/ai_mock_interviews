"use client";

import { signInSchema, signUpSchema, TSignUpSchema } from "@/schemas/form";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();

  const formSchema = type === "sign-in" ? signInSchema : signUpSchema;

  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(formSchema as any),
  });

  function onSubmit(values: TSignUpSchema) {
    try {
      console.log(values);
      toast.success(
        type === "sign-up"
          ? "You've signed up successfully!"
          : "You've signed in successfully!"
      );
      router.push(type === "sign-up" ? "sign-in" : "/");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 form">
        <div className="space-y-4">
          {type === "sign-up" && (
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
          {type === "sign-up" && (
            <CustomInput
              name="avatar"
              type="file"
              label="Profile picture"
              placeholder="Upload your profile picture"
              control={form.control}
            />
          )}
          {type === "sign-up" && (
            <CustomInput
              name="resume"
              type="file"
              label="Resume"
              placeholder="Upload your resume"
              control={form.control}
            />
          )}
        </div>

        <Button type="submit" className="btn">
          {type === "sign-in" ? "Sign in" : "Create an account"}
        </Button>

        <div className="flex-center gap-2">
          <p>
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link href={`/${type === "sign-in" ? "sign-up" : "sign-in"}`}>
            {type === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default AuthForm;
