import Authform from '@/components/ui/authform'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Signup = async () => {
  
  return (
    <section className="flex-center size-full max-sm:px-6">
      <Authform type="sign-up">
      </Authform>
    </section>
  )
}

export default Signup