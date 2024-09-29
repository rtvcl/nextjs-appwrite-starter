/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { createSessionClient } from "@/lib/appwrite/server"

export async function getUser() {
    let user
    try {
        const sessionClient = await createSessionClient();
        const account = sessionClient.account;
        user = await account.get();
    } catch {
        user = null
    }
    return user
}