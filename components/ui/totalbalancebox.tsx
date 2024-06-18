

import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import Animatecounter from './animatecounter'
import Doughnutchart from './doughnutchart'
const Totalbalancebox = ({
    accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {

  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
<Doughnutchart accounts={accounts}></Doughnutchart>
        </div>
        <div className='flex flex-col ml-60 gap-6'>
            <h2 className='header-2'>
                Bank Accounts: {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
<p className='total-balance-label '>
Total Current Balance
</p>
<div className='total-balance-amount flex-center gap-2'>
<Animatecounter amount={totalCurrentBalance}></Animatecounter>
</div>
            </div>
        </div>
    </section>
  )
}

export default Totalbalancebox