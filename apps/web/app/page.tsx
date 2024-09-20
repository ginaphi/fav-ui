import { ChevronRight } from "lucide-react"

export default function MarketingPage() {
	return (
		<div className="relative isolate overflow-hidden bg-white">
			<svg
				aria-hidden="true"
				className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
					<img
						alt="Your Company"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						className="h-11"
					/>
					<div className="mt-24 sm:mt-32 lg:mt-16">
						<a
							href="#"
							className="inline-flex space-x-6"
						>
							<span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 inline-flex items-center gap-2">
								Introducing LLM Template
								<ChevronRight className="w-4 h-4" />
							</span>
						</a>
					</div>
					<h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Make your websites look 10x better</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
					<div className="mt-10 flex items-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Browse Templates
						</a>
					</div>
				</div>
				<div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
					<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
						<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
							<img
								alt="App screenshot"
								src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
								width={2432}
								height={1442}
								className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
							/>
						</div>
					</div>
				</div>
			</div>

			<Features />
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

export function Features() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
				<p className="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

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
								<img
									alt={category.imageAlt}
									src={category.imageSrc}
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
							<p className="mt-2 text-sm text-gray-500">{category.description}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
