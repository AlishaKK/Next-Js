"use client"
import React from 'react'
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { FaPhone, FaShoppingBasket } from "react-icons/fa";
import Link from 'next/link'
import { Button } from '../ui/button';
export default function Header() {
  return (
    <header className='bg-white'>
      <nav className='container py-5 flex items-center justify-between'> 
       <div className='flex items-center space-x-4'><Image src={"/logo1.png"} alt='logo' width={100} height={100} className='h-10 w-10 rounded-full'/> 
      Feast & Fusion
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select-Restaurant" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="cheesy-delight">Cheesy-delight</SelectItem>
    <SelectItem value="pizza-hut">Pizza Hut</SelectItem>
    <SelectItem value="kids-corner">Kids corner</SelectItem>
  </SelectContent>
</Select>
</div>
<div className='flex items-center space-x-4'>
  <ul className='flex items-center font-medium space-x-4'>
    <li>
      <Link href={"/"} className='hover:text-primary'>Menu</Link>
    </li>
    <li>
      <Link href={"/"} className='hover:text-primary'>Order</Link>
    </li>
    </ul>
    <div className='relative '>
      <Link href={"/"}>
      <FaShoppingBasket className='hover:text-primary '/>
       </Link>
       <span className=' absolute -top-4 -right-5 h-6 w-6 flex item-center justify-center rounded-full bg-green-600 font-bold text-white'>3</span>
    </div>
    <div className='flex items-center mr-12'>
      <FaPhone className='ml-2'/>
      <span>000000000</span>
    </div>
    <Link href={"/signup"}><Button size={'sm'} className=' font-bold'>join us</Button></Link>
</div>

      </nav>
    
    </header>
  )
}
