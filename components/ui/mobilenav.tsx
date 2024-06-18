"use client"
import Image from "next/image"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[246px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side='left' className="border-none bg-white">
                    <Link href="/" className='mb-12 px-4 gap-1 cursor-pointer flex items-center gap-2'>
                        <Image src="/icons/logo.svg" width={100} height={100} alt='logo' />
                        <h1 className='text-26 font-bold text-black-1 font-ibm-plex-serif'>DhanRakshak</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <nav className="pt-16 text-white flex flex-col gap-6">
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                                return (
                                    <SheetClose asChild key={item.route}>
                                        <Link href={item.route} className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>
                                            <div className='relative size-6'>
                                                <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({ 'brightness-[3] invert-0': isActive })} />
                                            </div>
                                            <p className={cn('text-16 font-semibold text-black-2', { "text-white": isActive })}>{item.label}</p>
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                            USER
                        </nav>
                        FOOTER
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
