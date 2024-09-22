import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Circle, Download } from "lucide-react"
import { Tiles } from "@/components/tiles"

interface Template {
	id: string
	title: string
	description: string
	category: string
	isNew?: boolean
	images: string[]
}

const templates: Template[] = [
	{
		id: "catalyst",
		title: "Catalyst",
		description: "Modern application UI components to kickstart your design system.",
		category: "Application UI kit",
		images: ["https://tailwindui.com/plus/img/templates/catalyst/preview-01.png", "https://tailwindui.com/plus/img/templates/catalyst/preview-02.png", "https://tailwindui.com/plus/img/templates/catalyst/preview-03.png"],
	},
	{
		id: "spotlight",
		title: "Spotlight",
		description: "A personal website so nice you'll actually be inspired to publish on it.",
		category: "Personal website template",
		images: ["https://tailwindui.com/plus/img/templates/spotlight/preview-01.png", "https://tailwindui.com/plus/img/templates/spotlight/preview-02.png", "https://tailwindui.com/plus/img/templates/spotlight/preview-03.png"],
	},
	{
		id: "radiant",
		title: "Radiant",
		description: "A beautiful multi-page marketing website for your SaaS business.",
		category: "SaaS marketing template",
		isNew: true,
		images: ["https://tailwindui.com/plus/img/templates/radiant/preview-01.png", "https://tailwindui.com/plus/img/templates/radiant/preview-02.png", "https://tailwindui.com/plus/img/templates/radiant/preview-03.png"],
	},
	// Add more templates here...
]

export default function TemplatesPage() {
	return (
		<div className="min-h-screen bg-background">
			<AnimatedGridBackgroundSection>
				<div className={"text-xl font-bold"}>This is a cool background effect</div>
			</AnimatedGridBackgroundSection>
			<div
				id="browse"
				className="relative px-4 sm:px-6 lg:px-0"
			>
				<div className="mx-auto mt-20 w-full max-w-[40rem] space-y-8 divide-y divide-slate-900/10 sm:space-y-10 lg:max-w-none lg:space-y-24 lg:divide-y-0">
					{templates.map((template) => (
						<section
							key={template.id}
							id={`product-${template.id}`}
							className="pt-12 sm:pt-16 lg:pt-0"
						>
							<div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0">
								<div className="sm:pt-2 md:pr-6 lg:relative lg:ml-auto lg:w-[19.5rem] lg:flex-none lg:pl-8 lg:pr-0">
									<div className="flex items-center gap-2">
										<h2 className="text-base font-semibold text-foreground">
											<Link
												href={`https://tailwindui.com/templates/${template.id}`}
												className="hover:underline"
											>
												<span className="absolute inset-0 lg:left-8"></span>
												{template.title}
											</Link>
										</h2>
										{template.isNew && <span className="rounded-full bg-sky-500 px-1.5 py-0.5 text-[0.6875rem] font-semibold leading-4 text-white">New</span>}
									</div>
									<p className="text-sm capitalize leading-6 text-muted-foreground">{template.category}</p>
									<p className="mt-3 text-sm leading-6 text-muted-foreground">{template.description}</p>
									<div className="mt-4 h-px w-6 bg-slate-300"></div>
									<Button
										variant="ghost"
										className="mt-4 p-0 hover:bg-transparent"
										asChild
									>
										<Link href={`https://tailwindui.com/templates/${template.id}/download`}>
											<Download className="mr-2 h-6 w-6" />
											Download
										</Link>
									</Button>
								</div>
								<div className="lg:relative lg:mr-auto lg:flex lg:min-w-0 lg:overflow-x-auto">
									<div className="sticky left-0 z-10 hidden w-8 flex-none bg-gradient-to-r from-background lg:block"></div>
									<div className="lg:relative lg:flex lg:flex-none lg:items-start lg:pr-8">
										<Link
											href={`https://tailwindui.com/templates/${template.id}`}
											tabIndex={-1}
											className="hidden lg:absolute lg:inset-y-0 lg:-left-8 lg:right-8 lg:z-10 lg:block"
										>
											<span className="sr-only">View {template.title} template</span>
										</Link>
										{template.images.map((image, index) => (
											<Card
												key={index}
												className={`w-full lg:w-[19.1666666rem] ${index > 0 ? "hidden lg:block lg:ml-8" : ""}`}
											>
												<CardContent className="p-0">
													<Image
														src={image}
														alt={`Preview of ${template.title}`}
														width={560}
														height={380}
														className="rounded-xl"
													/>
												</CardContent>
											</Card>
										))}
									</div>
								</div>
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	)
}

const AnimatedGridBackgroundSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<div className={"w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-center"}>
			<div className={"w-fit h-fit relative z-[2]"}>{children}</div>
			<div className={"absolute top-0 left-0 h-full w-full"}>
				<Tiles
					rows={30}
					cols={20}
				/>
			</div>
		</div>
	)
}
