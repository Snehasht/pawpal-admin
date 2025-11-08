import React, { useContext } from 'react'
import Login from './pages/login.jsx' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './components/navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointments from './pages/Admin/AllApointments.jsx';
import AddPet from './pages/Admin/AddPet.jsx';
import PetsList from './pages/Admin/PetsList.jsx';

const App = () => {

  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-pet' element={<AddPet />} />
          <Route path='/pet-list' element={<PetsList />} />

        </Routes>

      </div>
    </div>
  ) :(
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App