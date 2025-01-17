"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}:SiderbarProps) => {
    const pathname=usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
            <Image src="/icons/logo.svg" width={100} height={100} alt='logo' className='size-[70px] mx-xl:size-30'>
            </Image>
<h1 className='sidebar-logo'>DhanRakshak</h1>
            </Link>
            {sidebarLinks.map((item)=>{
                const isActive=pathname===item.route||pathname.startsWith(`${item.route}/`)
                return (
                    <Link href={item.route} key={item.label} 
                    className={cn('sidebar-link',{'bg-bank-gradient':isActive})}
                    ><div className='relative size-6'>
                        <Image src={item.imgURL} alt='img' fill className={cn({
                            'brightness-[3] invert-0':isActive
                        })}></Image>
                        </div>
                        <p className={cn('sidebar-label',{"!text-white":isActive})}>{item.label}</p></Link>
                )
            })}
            USER
        </nav>
       FOOTER
    </section>
  )
}

export default Sidebar