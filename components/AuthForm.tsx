
"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    Form,
  } from "@/components/ui/form"
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'
import FormFields from './FormField'
import { useRouter } from 'next/navigation'




const AuthSchema = (type : FormType) => {
    return z.object({
        name : type === 'sign-up' ? z.string().min(3).max(10) : z.string().optional(),
        email : z.string().email(),
        password : z.string().min(8).max(20)
    })
}






const AuthForm = ({type} : {type : FormType}) => {

    const formSchema = AuthSchema(type)

    const isSignIn = type === 'sign-in'

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email : "",
          password : ""
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        try{
            if(type === 'sign-in')  {
                toast.success('Signed In Successfully')
                router.push('/')
             }else{
                toast.success('Account Created Successfully')
                router.push('/sign-in')
             }
        }catch(error){
            console.log(error)
            toast.error(`Oops An error Occured : ${error}`)
        }
      }

  return (
 
       
      <div  className='card-border lg:min-w-[566px]'>
        <div className='flex flex-col gap-6 card py-14 px-10'>
            <div className='flex flex-row justify-center gap-2'>
                <Image src='/logo.svg' alt='logo.svg' 
                height={32} width={38}/>

                <h2 className='text-primary-100'>AInterview</h2>
            </div>


            <h3>Practice Interview with AI</h3>
       

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="
                w-full space-y-6 mt-4 form">
                {!isSignIn && <FormFields 
                                name='name' 
                                control={form.control} 
                                label='Name' 
                                placeholder='Your Name'/>}
                <FormFields 
                            name='email' 
                            control={form.control} 
                            label='Email' 
                            placeholder='Your Email'
                            type='email'/>
                <FormFields 
                            name='password' 
                            control={form.control} 
                            label='Password' 
                            placeholder='Enter Your Password'
                            type='password'/>



                    <Button type="submit" className='btn'>
                    {
                        isSignIn ? 'Sign IN' : 'Create An Account'
                    }</Button>
                </form>
            </Form>
            <p className='text-center'>
                {isSignIn ? 'No Account Yet?':'Already Have An Account?'}
                <Link href={!isSignIn ? '/sign-in' : 'sign-up'} className='font-bold ml-1 text-primary-100'>
                {
                    isSignIn ? "Sign Up" : "Sign In"
                }</Link>
            </p>
     </div>
</div>
  )
}

export default AuthForm