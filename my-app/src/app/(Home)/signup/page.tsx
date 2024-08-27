import React from 'react'
import Link from 'next/link'
import {FaFacebookF, FaLinkedinIn, FaGoogle,FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
export default function Page() {
  return (
    <div className=' bg-gray-200 flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center '>
        <div className='bg-white flex w-2/3 max-w-4xl rounded-2xl shadow-2xl '>   
         <div className='w-3/5 p-5'>
         <div className='text-left font-bold'> <span className='text-green-500'>Alisha</span> Kayani</div>
         <div className='py-2'>
          <h2  className='text-green-500 font-bold text-3xl mb-2'>Sign in to Account</h2>
          <div className='border-2 w-10 border-green-500 inline-block'></div></div>
          <div className='flex justify-center  my-2'>
            <Link href={""} className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaFacebookF/></Link>
            <Link href={""} className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaLinkedinIn/></Link>
            <Link href={""} className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaGoogle/></Link></div>
            <p className='text-gray-400'>or use your email account</p>
            <div className='flex flex-col items-center'>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 '>
                <FaRegEnvelope className='text-gray-400 m-2 '/>
                <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/> </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 '>
                <MdLockOutline className='text-gray-400 m-2 '/>
                <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/> </div>
              <div className=' w-64 mb-5 flex justify-between'>
                <label className='flex items-center text-xs '><input type='checkbox' name='remember' className='mr-2'/>Remember me</label>
                <Link href={""} className='text-xs '>forget password?</Link>
              </div>
              <button className=' font-semibold  text-green-500 hover:bg-green-500 hover:text-white border-2 border-primary rounded-full px-12 py-2 p-1 m-1'><Link href={""}>Sign Up</Link></button>
              </div></div>

         <div  className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 '> 
         <h2 className='text-white font-bold text-3xl mb-2'>Hello ,Friend!</h2>
         <div className='border-2 w-10 border-white inline-block'></div>
         <p className='text-white mb-10'>Fill up the personal information and start journey with us </p>
         <button className=' font-semibold hover:bg-white hover:text-green-500 border-2 border-white rounded-full px-12 py-2 p-1 m-1'><Link href={""}>Sign Up</Link></button>
         </div>
         </div>

      
    </main>
    </div>
  )
}
