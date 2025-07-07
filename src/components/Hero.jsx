import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { TfiStatsUp } from "react-icons/tfi";
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='bg-background text-foreground font-sans font-medium flex justify-between h-screen px-4 max-w-7xl mx-auto'>
        <div className='left mt-40 md:text-6xl h-96 flex flex-col'>
            <h1 className='max-w-3xl text-6xl leading-20'>Wealth from <br />what you won't never miss</h1>
            <div className="cta flex items-center mt-8">
                <Button className="px-10 py-2 bg-blue-600">Continue with Signup
                <ArrowRight className=" h-10 w-10 text-background" />
                </Button>
            </div>
            <div className="flex itmes-center px-2">
                <p className='text-muted-foreground text-sm mt-4'>Already have an account? <span className='text-blue-600'>Login</span></p>
            </div>
            <div className="flex items-center gap-6 mt-4">
                <p className='text-muted-foreground text-base mt-4 flex items-center gap-2'>
                    <span className='text-green-500'><Check/></span>
                    Customerizable & Investing
                </p>
                <p className='text-muted-foreground text-base mt-4 flex items-center gap-2'>
                    <span className=''><TfiStatsUp/></span>
                    Visual Intestment Tracking
                </p>
            </div>

        </div>
        <div className="right flex items-center justify-center ">
            <Image src="/wallet.png" width={300} height={300} alt='wallet image'></Image>
        </div>


    </div>
  )
}

export default Hero