import React from 'react'
import { GoGitBranch } from "react-icons/go";
const Part3 = () => {
  return (
    <div className='mt-[6rem] flex items-center justify-center mb-[6rem] '>
        <div className='w-[80%] flex flex-row  justify-center items-center border-1  rounded shadow-2xl pl-1  '>
            <div className='w-[40%]'>
            <span><GoGitBranch className='text-btncolor h-8 w-8 font-bold text-3xl' /></span>
                <div className='flex flex-col justify-center  gap-3'>
                    <h1 className='font-bold text-3xl tracking-wide w-[42%]'>Connect Data Sources</h1>
                    <p className='w-[66%]'>Say goodbye to the long laborious AI model training, and effortlessly connect your data sources in
                     a few clicks and you’re done!</p>
                     <p className='w-[66%]'>Your AI sales agent can be trained on your website, other web pages, documents, and much more!</p>
                </div>
            </div>
            <div className='w-[40%] pt-[9%] pl-[2%]'>
                <img src='https://orimon.ai/images/home/working-step-1.png' className=''></img>
            </div>
        </div>
    </div>
  )
}

export default Part3