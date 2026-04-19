import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <main className='flex w-screen h-screen items-center justify-center'>
      <SignIn redirectUrl="/dashboard"/>
    </main>
  )
}

export default page
