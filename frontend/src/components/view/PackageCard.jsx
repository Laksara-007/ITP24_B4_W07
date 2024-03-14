import React from 'react'

const PackageCard = () => {

  const packages = [
    {
      img : "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "DELUX",
      desc: "Our newly designed suite welcomes you to a spacious and bespoke ambience with a natural wood cathedral style ceiling, king sized bed draped in soft netting and a large sitting room. The large, full length windows and doors that surround the whole suite provide stunning views of the Indian Ocean while a private terrace and open air dining room is set for your exclusive pleasure. ."
    },
    {
      img : "https://images.unsplash.com/photo-1618221823713-ca8c0e6c9992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "SUPREAME",
      desc: "Combining ultimate luxury with beautiful spaces with the added advantage of panoramic views of the glittering ocean our sumptuous suites bring you a bit of heaven on earth. "
    },
    {
      img : "https://images.unsplash.com/photo-1572987669554-0ba2ba9aee1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "VIP",
      desc: "rooms are luxuriously comfortable and tastefully decorated in rich, vibrant hues. Exuding a relaxing and elegant ambiance, the rooms feature king sized beds with ultra comfortable bedding, air conditioning, and suite bathroom with hot and cold water showers along with private balconies facing the forest view."
    },
  ]
  return (
    <div className='flex flex-row p-10'>
      {packages.map((item) => {
        return (
          <div className='flex flex-col w-2/4 h-[450px] p-6 bg-white/5 shadow-xl rounded-lg items-center mx-4'>
            <img src={item.img} className='w-4/5 h-48 rounded-xl  ' />
            <span className='text-lg font-bold tracking-wider text-white'>{item.title}</span>
            <span className='text-sm text-black text-center'>{item.desc}</span>
        </div>
        )
      })}
        
    </div>
  )
}

export default PackageCard