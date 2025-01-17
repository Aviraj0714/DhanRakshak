'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { authformSchema } from '@/lib/utils';
import Custominput from './custominput';
import { Loader2 } from 'lucide-react';
import Signup from '@/app/(auth)/sign-up/page';
import { useRouter } from 'next/navigation';
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions';


const Authform = ({ type }: { type: string }) => {
    const router = useRouter;
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
const formSchema=authformSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit= async(data: z.infer<typeof   formSchema>)=>
         {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true);
        try {
            if(type==='sign-up'){
const newUser = await signUp(data);
setUser(newUser);
}
            
            if(type==='sign-in'){
//const response=await signIn({
//email: data.email,
//password: data.password,
  //})
 if(Response) router.push('/')
 }
   }  
   catch(error){
   console.log(Error);
        
        }finally{
           setIsLoading(false)
        }
        
    }

    return (
        <section className='auth-form box-content h-full w-32 p-4 border-4 '>
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className='mb-12 cursor-pointer flex items-center gap-1'>
                    <Image src="/icons/logo.svg" width={100} height={100} alt='logo' />
                    <h1 className='text-26 font-bold text-black-1 font-ibm-plex-serif'>DhanRakshak</h1>
                </Link>
                
                <div className="flex flex-col gap-1 md:gap-3 ">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900 ">
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? 'Sign-in'
                                : 'Sign-up'
                        }
                        <p className="text-16 font-normal text-gray-600">
                            {user
                                ? 'Link your account to get started'
                                : 'Please enter your details'}
                        </p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className='flex flex-col gap-4'>
                    {/* Additional content for linked accounts can go here */}
                </div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {type==='sign-up'&&(
                            <>
                            <div className="flex gap-4">
                            <Custominput control={form.control}
                            name='firstname' label='First Name' placeholder='Enter your first name' />
                             <Custominput control={form.control}
                            name='lastname' label='Last Name' placeholder='Enter your last name' />
                            </div>
                             <Custominput control={form.control}
                            name='address' label='Address' placeholder='Enter your Address' />
                            <div className="flex gap-4">
                             <Custominput control={form.control}
                            name='city' label='City' placeholder='city' />
                             <Custominput control={form.control}
                            name='postal' label='Pin Code' placeholder='pin code' />
                             </div>
                             <div className="flex gap-4">
                             <Custominput control={form.control}
                            name='state' label='State' placeholder='State' />
                             <Custominput control={form.control}
                            name='dob' label='Date of Birth' placeholder='DD/MM/YYYY' /> 
</div>
                                </>
                        )}
                        <Custominput control={form.control}
                            name='email' label='Email' placeholder='Enter your email' />
                        <Custominput control={form.control}
                            name='password' label='Password' placeholder='Enter your password' />
                   <div className='flex flex-col gap-4'>
                        <Button className='form-btn' type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 size={20} className='animate-spin' />
                                    &nbsp; Loading...
                                </>
                            ) : type === 'sign-in'
                                ? 'Sign-In'
                                : 'Sign-Up'}
                        </Button>

                            </div>
                    </form>
                </Form>
            )}
            <footer className="flex justify-center gap-1">

                <p className='text-14 font-normal text-gray-600'>{type==='sign-in'?"don't have an account ?":"Already have an account?"}</p>
                <Link className='form-link' href={type==='sign-in'?'/sign-up':'/sign-in'}>
                {type==='sign-in'?'sign-up':'sign-in'}
                </Link>
            </footer>
        </section>
    )
}

export default Authform
