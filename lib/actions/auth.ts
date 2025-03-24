"use server";

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";
import { sendResponse } from "@/lib/utils";

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

export const signUp = async (params: SignUpParams) => {
  try {
    const { uid, name, email, password } = params;

    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists) return sendResponse(false, "User already exists");

    await db.collection("users").doc(uid).set({
      name,
      email,
      password,
    });

    return sendResponse(true, "User created successfully");
  } catch (e: any) {
    console.error("Error signing up:", e);

    if (e.code === "auth/email-already-exists")
      return sendResponse(false, "Email already exists");

    return sendResponse(false, "Failed to create account");
  }
};

export const signIn = async (params: SignInParams) => {
  try {
    const { email, idToken } = params;
    const userRecord = await auth.getUserByEmail(email);

    if (!userRecord) return sendResponse(false, "User not found");
    await setSessionCookie(idToken);

    return sendResponse(true, "Sign in successful");
  } catch (e: any) {
    console.error("Error signing in:", e);
    return sendResponse(false, "Invalid email or password");
  }
};

export const getCurrentUser = async () => {
  try {
    const sessionCookie = await getSessionCookie();

    const decodedToken = await auth.verifySessionCookie(sessionCookie, true);
    if (!decodedToken) return null;

    const user = await db.collection("users").doc(decodedToken.uid).get();
    if (!user.exists) return null;

    return { ...(user.data() as User), id: user.id };
  } catch (e: any) {
    console.error("Error getting current user:", e.message);
    return null;
  }
};

export const setSessionCookie = async (idToken: string) => {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK,
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: ONE_WEEK,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
};

export const getSessionCookie = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) throw new Error("No session cookie found");

  return sessionCookie;
};

export const isUserAuth = async () => {
  const user = await getCurrentUser();
  return !!user;
};
