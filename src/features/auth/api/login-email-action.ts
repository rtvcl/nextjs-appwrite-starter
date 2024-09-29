'use server'

import { createAdminClient } from "@/lib/appwrite/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const createSession = async (formData: FormData) => {

    const data = Object.fromEntries(formData)

    const parsedData = loginSchema.safeParse(data)

    if (!parsedData.success) {
        throw Error('Invalid email or password')
    }

    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(
        parsedData.data.email,
        parsedData.data.password
    )

    cookies().set(process.env.NEXT_PUBLIC_APPWRITE_SESSION_KEY!, session.secret, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(session.expire),
        path: "/",
    })

    redirect("/dashboard")
} 