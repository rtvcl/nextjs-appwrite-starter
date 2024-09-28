import * as z from 'zod';
import 'dotenv/config';

const createEnv = () => {
    const EnvSchema = z.object({
        APPWRITE_ENDPOINT: z.string(),
        APPWRITE_PROJECT_ID: z.string(),
        APPWRITE_ADMIN_KEY: z.string(),
        APPWRITE_SESSION_KEY: z.string(),
    });

    const envVars = {
        APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
        APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
        APPWRITE_ADMIN_KEY: process.env.APPWRITE_ADMIN_KEY,
        APPWRITE_SESSION_KEY: process.env.APPWRITE_SESSION_KEY,
    };

    const parsedEnv = EnvSchema.safeParse(envVars);

    if (!parsedEnv.success) {
        throw new Error(
            `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
                .map(([k, v]) => `- ${k}: ${v}`)
                .join('\n')}
  `,
        );
    }

    return parsedEnv.data ?? {};
};

export const env = createEnv();

