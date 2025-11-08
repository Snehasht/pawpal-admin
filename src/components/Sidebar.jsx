import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r'>
        {
            aToken && <ul className='text-[#515151] mt-5'>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#60A5FA]':''}`} to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt=''/>
                <p>Dashboard</p>
            </NavLink>

             <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#60A5FA]':''}`} to={'/all-appointments'}>
                <img src={assets.appointment_icon} alt=''/>
                <p>Appointments</p>
            </NavLink>

             <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#60A5FA]':''}`} to={'/add-pet'}>
                <img src={assets.add_icon} alt=''/>
                <p>Add Pet</p>
            </NavLink>

             <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#60A5FA]':''}`} to={'/pet-list'}>
                <img src={assets.paw} alt=''/>
                <p>Pets List</p>
            </NavLink>

            </ul>
        }
    </div>
  )
}

export default Sidebar