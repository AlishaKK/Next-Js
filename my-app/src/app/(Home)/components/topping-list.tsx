"use client"
import React from 'react'
import { Topping, ToppingCard } from './topping-card'
const topping = [
    { id: '1', name: 'icream', image: '/icream.jpg', price: 50, isAvailable: true },
    { id: '2', name: 'pizza', image: '/pizza.jpg', price: 50, isAvailable: true },
    { id: '3', name: 'cake', image: '/cake.jpg', price: 50, isAvailable: true },
]
export const ToppingList = () => {
    const [selectedToppings, setSelectedToppings] = React.useState([topping[0]])
    const handleCheckBoxCheck = (topping: Topping) => { }
    return (
        <section className='mt-6'>
            <h3>Include items</h3>
            <div className='grid grid-cols-3 gap-4 mt-2'>
                {topping.map((topping) => {
                    return <ToppingCard topping={topping} key={topping.id} 
                    selectedToppings={selectedToppings}
                    handleCheckBoxCheck={handleCheckBoxCheck} />
                })}
            </div>
        </section>
    )
}
