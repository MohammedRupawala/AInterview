import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dummyInterviews } from '../constants'
import InterviewCard from '@/components/InterviewCard'

const Page = () => {
  return (
    <>
      <section className='card-cta'>
          <div className=' flex flex-col max-w-lg gap-6'>
            <h2>Get Interview Ready With AI Powered Practice And Feedback</h2>
            <p className='text-lg'>Practice Interview And Get Instant Feedback</p>
            <Button asChild className='btn-primary max-sm:w-full'>
              <Link href='/interview'>Start An Interview</Link>
            </Button>
          </div>
          <Image src='/robot.png' alt='robot' width={400} height={400} className='max-sm:hidden'/>
        </section>

      <section className='flex flex-col gap-6 mt-8'>
          <h2>
            Your Interview
          </h2>
          <div className='interviews-section'>
              {
                dummyInterviews.map((interview)=>(
                  <InterviewCard {...interview} key={interview.id}/>
                ))
              }
          </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
          <h2>
            Take An Interview
          </h2>
          <div className='interviews-section'>
          {
                dummyInterviews.map((interview)=>(
                  <InterviewCard {...interview} key={interview.id}/>
                ))
              }
          </div>
      </section>
    </>
  )
}

export default Page