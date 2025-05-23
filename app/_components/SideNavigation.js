import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import SignOutButton from "./SignOutButton"

const navigationLinks = [
    {
        name: 'Home',
        href: "/account",
        icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
    },
    {
        name: 'Reservations',
        href: "/account/reservations",
        icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
    },
    {
        name: 'Guest Profile',
        href: "/account/profile",
        icon: <UserIcon className="h-5 w-5 text-primary-600" />,
    }
]


const SideNavigation = () => {
    return (
        <nav className="border-r border-primary-900">
            <ul className="flex flex-col gap-2 h-full text-lg">
                {navigationLinks.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className={` py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}>
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                ))}
                <li className='mt-auto'>
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    )
}

export default SideNavigation