import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ProductPage() {
	return (
		<main className="relative py-6 lg:gap-10 lg:py-8 max-w-7xl mx-auto md:px-8">
			<div className="mx-auto w-full min-w-0 px-4 md:px-0">
				<div className="py-4 md:py-10 bg-[linear-gradient(to_right,transparent_1%,var(--gray-50)_10%,var(--gray-50)_90%,transparent_99%)] dark:bg-[linear-gradient(to_right,transparent_0%,var(--neutral-950)_10%,var(--neutral-950)_90%,transparent_100%)] overflow-hidden relative">
					<div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-50">
						<div className="flex bg-gray-200 dark:bg-neutral-700 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
							{[...Array(144)].map((_, i) => (
								<div
									key={i}
									className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] bg-gray-100 dark:bg-neutral-800 ${i % 2 === 1 ? "shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]" : ""}`}
								/>
							))}
						</div>
					</div>
					<div className="mb-4 relative z-20 flex-col md:flex-row flex items-center md:items-end justify-between text-sm text-muted-foreground">
						<div className="gap-2">
							<h1 className="scroll-m-20 text-4xl font-bold text-center md:text-left tracking-tight text-black dark:text-white mb-6">Startup Landing Page Template</h1>
							<p className="text-lg text-muted-foreground max-w-xl !mb-6 text-center md:text-left">A simple, clean, modern and minimalistic landing page template for startups. Filled with microinteractions to keep your users engaged.</p>
							<div className="flex justify-center md:justify-start">
								{["nextjs-2.png", "tailwind-icon.png", "framer.webp", "mdx.svg", "react.png", "typescript.png", "calcom-2.jpg"].map((icon, index) => (
									<div
										key={index}
										className={`${index !== 0 ? "-ml-2" : ""} h-8 w-8 rounded-full bg-white z-20 flex items-center justify-center border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700`}
									>
										<Image
											src={`https://assets.aceternity.com/logos/${icon}`}
											alt="icon"
											width={20}
											height={20}
											className="object-contain h-5 w-5 filter dark:invert"
										/>
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-col items-center md:items-end">
							<div className="flex flex-col justify-center md:justify-start mt-6">
								<div className="flex gap-2 flex-col sm:flex-row justify-center md:justify-start">
									<Button
										variant="outline"
										asChild
									>
										<Link
											href="https://startup-landing-simple-aceternity.vercel.app/"
											target="_blank"
										>
											Live Preview
										</Link>
									</Button>
									<Button>
										<span>Add to Cart</span>
										<span className="ml-2">$49</span>
									</Button>
								</div>
							</div>
							<div className="text-sm text-neutral-600 dark:text-neutral-300 mt-4">
								or get this with{" "}
								<Link
									href="/pricing"
									className="font-bold text-neutral-900 dark:text-neutral-50"
								>
									the bundle
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="pb-12 pt-8">
					<div className="mx-auto max-w-[83rem]">
						<div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 xl:px-0">
							{["startup-1.webp", "startup-2.webp", "startup-3.webp", "startup-4.webp"].map((img, index) => (
								<div
									key={index}
									className="relative"
								>
									<Image
										src={`https://assets.aceternity.com/templates/${img}`}
										alt="Product Image"
										width={500}
										height={500}
										className="transition duration-300 blur-0 aspect-video w-full rounded-md border border-neutral-200 object-cover object-center shadow-sm dark:border-neutral-800"
									/>
								</div>
							))}
						</div>
						<div className="my-4 flex flex-col gap-10 px-4 py-6 sm:px-8 md:my-20 lg:flex-row lg:px-8 lg:py-10 xl:px-0">
							<div className="mr-4 w-80 lg:mr-12">
								<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-300 sm:text-2xl">Features</h3>
							</div>
							<div className="flex flex-1 flex-row flex-wrap justify-between">
								<div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
									{[
										{ title: "Built with Next.js Tailwind CSS and framer motion", description: "A well structured template that is super easy to customize and play with." },
										{ title: "Modern, Minimal and Clean Design", description: "A modern, minimal and clean design that is tastefully filled with microinteractions to keep your users engaged." },
										{ title: "SEO Optimized", description: "Optimized for search engines, with a focus on SEO best practices." },
										{ title: "Mobile responsive", description: "Ensures optimal viewing experience across all devices and screen sizes." },
										{ title: "Dark Mode", description: "Dark mode is supported, ensuring a comfortable viewing experience for your users." },
										{ title: "Typescript", description: "Built with Typescript, ensuring type safety and autocomplete for your code." },
										{ title: "Easy to deploy and customize", description: "Easily deploy your website to Vercel, Netlify, or any other platform." },
										{ title: "Help and support", description: "We have a support chat where you can ask questions and get help from our community or our team directly." },
										{ title: "Future updates", description: "We regularly update the templates with new features and improvements." },
										{ title: "Cal.com Calendar Scheduling Support", description: "Integrated Cal.com booking modal for seamless call scheduling experience." },
									].map((feature, index) => (
										<div
											key={index}
											className="relative flex-col"
										>
											<p className="mb-2 font-medium text-black dark:text-neutral-100">{feature.title}</p>
											<p className="font-normal text-neutral-600 dark:text-neutral-400">{feature.description}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
