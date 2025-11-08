import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const PetsList = () => {

  const {pets, aToken, getAllPets, changeAvailability} = useContext(AdminContext)

  useEffect(()=>{
    if (aToken) {
      getAllPets()
      
    }

  },[aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Pets</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          pets.map((item,index)=>(
            <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
              <img className='h-52 object-cover bg-indigo-50 group-hover:bg-[#60A5FA] transition-all duration-500'src={item.image} alt="" />
              <div className='p-4'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{item.breed}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PetsList