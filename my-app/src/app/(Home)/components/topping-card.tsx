"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
export type Topping ={
    id:string,
    name:string,
    price:number,
    image:string,
    isAvailable:boolean,
}
type PropType ={
   topping:Topping;
   selectedToppings:Topping[];
   handleCheckBoxCheck:(topping:Topping)=> void;
}
export const ToppingCard = ({topping,selectedToppings, handleCheckBoxCheck}:PropType) => {
    const [ selected, setSelected] = React.useState('1');
    const isCurrentSelected =selected ===topping.id;
  return (
    <Button  onClick={()=>setSelected(topping.id)} variant={'outline'} className={cn('flex flex-col h-42',isCurrentSelected?'border-primary':'')}> <Image src={topping.image} alt='food' height={50} width={50} className='rounded-md'/>
    <h4>{topping.name}</h4>
    <p>₹{topping.price}</p></Button>
  )
}
