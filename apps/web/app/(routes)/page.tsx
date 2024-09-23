import { ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

import Header from "@/components/header"
import Image from "next/image"
import Footer from "@/components/footer"

export default function MarketingPage() {
	return (
		<>
			<svg
				aria-hidden="true"
				className="absolute inset-0 -z-10 h-full w-full stroke-muted [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			>
				<defs>
					<pattern
						x="50%"
						y={-1}
						id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
						width={200}
						height={200}
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M.5 200V.5H200"
							fill="none"
						/>
					</pattern>
				</defs>
				<rect
					fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
					width="100%"
					height="100%"
					strokeWidth={0}
				/>
			</svg>

			<div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
					<div className="mt-24 sm:mt-32 lg:mt-16">
						<a
							href="#"
							className="inline-flex space-x-6"
						>
							<span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10 inline-flex items-center gap-2">
								Introducing LLM Template
								<ChevronRight className="w-4 h-4" />
							</span>
						</a>
					</div>
					<h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Make your websites look 10x better</h1>
					<p className="mt-6 text-lg leading-8 text-muted-foreground">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
					<div className="mt-10 flex items-center gap-x-6">
						<Button asChild>
							<a href="#">Browse Templates</a>
						</Button>
					</div>
					<StacksLogo />
				</div>
				<div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
					<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
						<div className="-m-2 rounded-xl bg-muted/5 p-2 ring-1 ring-inset ring-muted/10 lg:-m-4 lg:rounded-2xl lg:p-4">
							<Image
								src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
								alt="App screenshot"
								width={2432}
								height={1442}
								className="w-[76rem] rounded-md shadow-2xl ring-1 ring-muted/10"
							/>
						</div>
					</div>
				</div>
			</div>

			<Features />
		</>
	)
}

function StacksLogo() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<img
					alt="Transistor"
					src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
					width={158}
					height={48}
					className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				/>
				<img
					alt="Reform"
					src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
					width={158}
					height={48}
					className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				/>
				<img
					alt="Tuple"
					src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
					width={158}
					height={48}
					className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
				/>
				<img
					alt="SavvyCal"
					src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
					width={158}
					height={48}
					className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
				/>
				<img
					alt="Statamic"
					src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
					width={158}
					height={48}
					className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
				/>
			</div>
		</div>
	)
}

const categories = [
	{
		name: "Handcrafted Collection",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
		imageAlt: "Brown leather key ring with brass metal loops and rivets on wood table.",
		description: "Keep your phone, keys, and wallet together, so you can lose everything at once.",
	},
	{
		name: "Organized Desk Collection",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
		imageAlt: "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
		description: "The rest of the house will still be a mess, but your desk will look great.",
	},
	{
		name: "Focus Collection",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
		imageAlt: "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
		description: "Be more productive than enterprise project managers with a single piece of paper.",
	},
]

function Features() {
	return (
		<div className="bg-background">
			<div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-foreground">Shop by Collection</h2>
				<p className="mt-4 text-base text-muted-foreground">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

				<div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
					{categories.map((category) => (
						<a
							key={category.name}
							href={category.href}
							className="group block"
						>
							<div
								aria-hidden="true"
								className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
							>
								<Image
									src={category.imageSrc}
									alt={category.imageAlt}
									width={500}
									height={300}
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<h3 className="mt-4 text-base font-semibold text-foreground">{category.name}</h3>
							<p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
