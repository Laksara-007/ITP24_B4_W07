import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllOrders, updateOrderService } from '../../../api/menu/menuServices'


const MenuOrders = () => {
  const [orders, setOrders] = useState([])

  const updateStatus = async(id) =>{
    const obj = {
      "status": "DELIVERED"
    }
    await updateOrderService(id, obj).then((res) => {
      if (!res.success) alert("Something went wrong")
      else alert("success")
    })
  }

  useEffect(() => {
    getAllOrders().then((res) => {
      setOrders(res.data)
    })
    
  },[])
  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/menu/addOrder">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Create New
            </button>
          </Link>
        </div>

        <div className="flex ml-3 mt-3">
        <div className="flex-[4]">ID</div>
        <div className="flex-[3] pl-1">Food Name</div>
        <div className="flex-[3]">Quantity</div>
        <div className="flex-[3]">Location</div>
        <div className="flex-[3]">Phone number</div>
        <div className="flex-[3]">Order Status</div>
        <div className="flex-[3]">Actions</div>
      </div>
      {orders.map((item) => (
        <div className="flex ml-3 mt-1 ">
        <div className="flex-[4]">{item._id}</div>
        <div className="flex-[3] pl-1">{item.foodId.foodItemName}</div>
        <div className="flex-[3]">{item.quantity}</div>
        <div className="flex-[3]">{item.location}</div>
        <div className="flex-[3]">{item.phoneNumber}</div>
        <div className="flex-[3]">{item.orderStatus}</div>
        <div className="flex-[3]"><button onClick={() => updateStatus(item._id)} className="bg-primary p-1 text-white">DELIVER</button></div>
      </div>
      ))}

      </div>
    </div>
  )
}

export default MenuOrders