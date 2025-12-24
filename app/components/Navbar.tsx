"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <Link href="/" className="text-xl font-bold tracking-tight">
                    <span className="text-cyan-500 font-extrabold transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
                        Mohit Kumar Lottla
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={clsx(
                                "relative px-4 py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 group",
                                pathname === item.path ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400"
                            )}
                        >
                            {item.name}
                            {/* Hover Underline Glitch */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_#00f3ff]"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}