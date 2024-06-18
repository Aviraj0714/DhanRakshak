import Link from 'next/link'
import React from 'react'
import Image
 from 'next/image'
import Bankcard from './bankcard'
const Rightbar = ({user,transactions,banks}:RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
<div className='profile-banner'>
<div className="profile mt-24">
    <div className='profile-img'>
        <span className='text-5xl font-bold text-blue-500'>{user.firstname[0]}</span>
    </div>
    <div className='profile-details'>
<h1 className='text-lg font-bold'>{user.firstname} {user.lastname}</h1>
<p className='profile-email'>{user.email}</p>
    </div>
</div>
</div>
        </section>
        <section className="banks mt-16">
            <div className="flex w-full justify-between">
                <h2 className="header-2">
My Banks
                </h2>
                <Link href="/" className='flex gap-2'>
                <Image src="/icons/plus.svg" width={20} height={20} alt="plus"></Image>
                <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
                </Link>
            </div>
            {banks?.length>0&&(
                <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
                    <div className="relative z-10">
                       <Bankcard key={banks[0].$id}
                       account={banks[0]}
                       userName={`${user.firstname} ${user.lastname}`}
                       showBalance={false}
                       />
                    </div>
                    {banks[1]&&(
                        <div className="absolute z-0 w-[90%] right-0 top-8">
                           <Bankcard key={banks[1].$id}
                           account={banks[1]}
                           showBalance={false}
                           userName={`${user.firstname} ${user.lastname}`}
                           />
                        </div>
                    )}
                </div>
            )}
        </section>
    </aside>
  )
}

export default Rightbar