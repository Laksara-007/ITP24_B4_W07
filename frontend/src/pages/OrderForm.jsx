import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createOrder } from '../api/requests'

const OrderForm = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const path = location.pathname.split("/")[2]

    const [formData, setFormData] = useState([])

    const placeOrder = (e) => {
        e.preventDefault()
        createOrder({...formData, foodId: path}).then((res) => {
            if (!res.success) {
                alert(res.message)
            } else navigate("/food")
        })
    }

  return (
    <div style={{backgroundImage: "url(" + "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg" + ")"}} className='pt-20 flex items-center justify-center h-screen'>
        <form className='shadow-xl p-4 bg-white/80' onSubmit={placeOrder}>
            <div className='mt-2'>
                <span className='flex-1'>NIC :</span>
                <input type="text" placeholder='NIC' onChange={(e) => setFormData({...formData, NIC: e.target.value})}  required />
            </div>
            <div className='mt-2'>
                <span>Location :</span>
                <input type="text" placeholder='Location' onChange={(e) => setFormData({...formData, location: e.target.value})} required/>
            </div>
            <div className='mt-2'>
                <span>Phone number :</span>
                <input type="tel"  placeholder='Phone number' onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} required/>
            </div>
            <div className='mt-2'>
                <span>Quantity :</span>
                <input type="number" placeholder='Quantity' onChange={(e) => setFormData({...formData, quantity: e.target.value})} required/>
            </div>

            <button type='submit' className='w-2/5 bg-blue-300 mt-3 rounded-md'>Order</button>
            
        </form>
    </div>
  )
}

export default OrderForm