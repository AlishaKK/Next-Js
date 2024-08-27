
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { WidthIcon } from '@radix-ui/react-icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProductCard from './components/product-list'
const product:Product =[
  {
    id:"1",
    name:"Burger",
    description:"tasty meal",
    image:"/food.jpeg",
    price:500,
  },
  {
    id:"2",
    name:"icream",
    description:"tasty meal",
    image:"/icream.jpg",
    price:500,
  },
  {
    id:"3",
    name:"Pizza",
    description:"tasty meal",
    image:"/pizza.jpg",
    price:500,
  },
  {
    id:"4",
    name:"Cake",
    description:"tasty meal",
    image:"/cake.jpg",
    price:500,
  },
  {
    id:"5",
    name:" Dessert",
    description:"tasty meal",
    image:"/ds.jpg",
    price:500,
  }
  ,{
    id:"6",
    name:"Burger",
    description:"tasty meal",
    image:"/bgg.jpg",
    price:500,
  }
  ,
  {
    id:"7",
    name:"Macroni",
    description:"tasty meal",
    image:"/macroni.jpg",
    price:500,
  }
  ,
  {
    id:"8",
    name:"ChickenTika",
    description:"tasty meal",
    image:"/chicken.jpg",
    price:500,
  }
  ,
]
export default function Page() {
  return (
   <>
   <section className='bg-white'>
    <div className='container flex items-center justify-between py-24'>
      <div>
        <h1 className='text-7xl font-black font-sans leading-2'> Savor the blend of flavors and cultures at<br/> <span  className='text-primary'>Feast & Fusion!</span></h1>
        <p className='text-2xl  mt-8 max-w-lg leading-snug'>The perfect blend of tradition and innovation</p>
        <Button className='mt-8  text-lg rounded-full py-7 px-6 font-bold'>Get Your meal now</Button>
      </div>
      <div>
        <Image src={"/food.jpeg"} alt='food' height={500} width={500} className='rounded-md'/>
      </div>
    </div>
   </section>
   <section>
    <div className='container py-10'>
    <Tabs defaultValue="foody" >
  <TabsList>
    <TabsTrigger value="foody">Foody</TabsTrigger>
    <TabsTrigger value="beverages">Beverages</TabsTrigger>
  </TabsList>
  <TabsContent value="foody">
   <div className='grid grid-cols-4 gap-6 mt-6'>
   {product.map((product)=>(
      <ProductCard product={product} key={product.id} 
      />
    ))}
   </div>
  </TabsContent>
  <TabsContent value="beverages">Beverages List</TabsContent>
</Tabs>

    </div>
   </section>
   </>
  )
}
