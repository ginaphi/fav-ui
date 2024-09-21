import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
	{ href: "#", label: "Home" },
	{ href: "#", label: "About" },
]

const NavigationLinks = () => (
	<>
		{navItems.map((item, index) => (
			<Link
				key={index}
				href={item.href}
				className="text-foreground hover:text-primary"
			>
				{item.label}
			</Link>
		))}
	</>
)

export default function MarketingPage() {
	return (
		<div className="relative isolate overflow-hidden bg-background">
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

			<header className="flex items-center justify-between p-4 lg:px-8">
				<div className="flex items-center">
					<Image
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
						width={44}
						height={44}
					/>
				</div>
				<nav className="hidden lg:flex space-x-8 items-center">
					<NavigationLinks />
					<ThemeToggle />
				</nav>
				{/* Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="lg:hidden"
						>
							<Menu className="h-6 w-6" />
							<span className="sr-only">Open menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<div className="mt-8 flex flex-col items-start space-y-4">
							<NavigationLinks />
							<ThemeToggle />
						</div>
					</SheetContent>
				</Sheet>
			</header>

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

			<Footer />
		</div>
	)
}

export function StacksLogo() {
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

const socialMedias = [
	{
		name: "Facebook",
		href: "#",
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "#",
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "X",
		href: "#",
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
			</svg>
		),
	},
	{
		name: "GitHub",
		href: "#",
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fillRule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "YouTube",
		href: "#",
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fillRule="evenodd"
					d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
]

export function Footer() {
	return (
		<footer className="bg-background">
			<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{socialMedias.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-muted-foreground hover:text-primary"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon
								aria-hidden="true"
								className="h-6 w-6"
							/>
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-xs leading-5 text-muted-foreground">&copy; 2020 Your Company, Inc. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
