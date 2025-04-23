
import Image from 'next/image'
import React from 'react'
import dayjs from 'dayjs'
import { Button } from './ui/button'
import Link from 'next/link'
import { cn, getRandomInterviewCover, getTechLogos } from '@/lib/utils'

const InterviewCard = async({
    interviewId,
    userId,
    role,
    techstack,
    createdAt,
    type
} : InterviewCardProps) => {


    const techIcons = await getTechLogos(techstack)
    const feedback = null as Feedback | null
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D,YYYY')
  return (
    <div className='card-border w-[360px] max-sm:w-full'>
        <div className='card-interview'>
            <div>
                <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-b-lg bg-light-600'>
                    <p className='badge-text'>{normalizedType}</p>
                </div>

                <Image src={getRandomInterviewCover()} alt='Cover Image' height={90} width={90} className='object-fit rounded-full size-[90px]'/>
                <h3 className='mt-5 capitalize'>{role} interview</h3>
                <div className='flex flex-row gap-5 mt-3'>
                    <div  className='flex flex-row gap-2'>
                        <Image src='/calendar.svg' alt='calender' width={22} height={22}/>
                        <p>{formattedDate}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Image src='/star.svg' alt='star' width={22} height={22}/>
                        <p>{feedback?.totalScore || '-----'}/100</p>
                    </div>
                </div>

                <p className='line-clanp-2 mt-2'>
                    {feedback?.finalAssessment || "You have'nt Take the interview yet"}
                </p>
            </div>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                    {
                        techIcons.slice(0,3).map(({tech,url},index) => (
                            <div  key={tech} className={cn("relative group bg-dark-300 rounded-full flex-center p-2",index >= 1 && '-ml-3')}> 
                            <span className='tech-tooltip'>
                                {tech}
                            </span>
                                <Image className='size-5' src={url} alt={tech} height={100} width={100}/>
                            </div>
                        ))
                    
                    }
                </div>
                <Button className='btn-primary'>
                    <Link href={feedback? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`} />
                    {
                        feedback ? 'Check Feedback' : 'View Interview'
                    }
                </Button>

            </div>
        </div>
    </div>
  )
}

export default InterviewCard