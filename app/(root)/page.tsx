import Headerbox from '@/components/ui/headerbox'
import Rightbar from '@/components/ui/rightbar'
import Totalbalancebox from '@/components/ui/totalbalancebox'
import React from 'react'

const Home = () => {
    const loggedIn={firstname:'Aviraj',lastname:'Bhaliya',email:'avirajbhaliya03@gmail.com'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <Headerbox
               type="greeting"
               title="Welcome "
               user={loggedIn?.firstname||'Guest'}
               subtext="Acess and manage your account and transactions"
               ></Headerbox>
               <Totalbalancebox
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.35}
               >

               </Totalbalancebox>
            </header>
            RECENT TRANSACTIONS
        </div>
        <Rightbar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1250.35},{currentBalance:1720.80}]}
        ></Rightbar>
    </section>
  )
}

export default Home