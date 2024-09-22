import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [{ href: "templates", label: "Templates" }]

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

export default function Header() {
	return (
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
	)
}
