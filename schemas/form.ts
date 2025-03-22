import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string().url(),
  resume: z.string().url(),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;
