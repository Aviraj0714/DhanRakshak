'use server';

import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { parseStringify } from "../utils";

export const signIn=async()=>{
    try {
        
    } catch (error) {
        console.error('Error',error);
    }
}
export const signUp=async(data:SignUpParams)=>{
    try {
        const { account } = await createAdminClient();

  const newUserAccount = await account.create(ID.unique(), data.email, data.password, `${data.firstName}${data.lastName}`);
  const session = await account.createEmailPasswordSession(data.email, data.password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
  return parseStringify(newUserAccount);
    } catch (error) {
        console.error('Error',error);
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user=await account.get();

      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
  