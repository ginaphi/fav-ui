import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
		RESEND_API_KEY: z.string(),
	},
	client: {
		NEXT_PUBLIC_API_BASE_URL: z.string().url(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
		RESEND_API_KEY: process.env.RESEND_API_KEY,
	},
})
