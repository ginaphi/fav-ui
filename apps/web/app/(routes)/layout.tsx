import React from "react"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="relative isolate overflow-hidden bg-background">
			<Header />

			{children}

			<Footer />
		</div>
	)
}