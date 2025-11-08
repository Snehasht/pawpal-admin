import React, { useContext } from "react"
import { assets } from "../../assets/assets"
import { useState } from "react"
import { AdminContext } from "../../context/AdminContext"
import {toast} from 'react-toastify'
import axios from 'axios'

const AddPet = () => {



    const [petImg, setPetImg] = useState(false)
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('Male')    
    const [size, setSize] = useState('')
    const [vaccinated, setVaccinated] = useState('true')
    const [location, setLocation] = useState('')  
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')  
    const [description, setDescription] = useState('')  
    const [fee, setFee] = useState('')

    const {backendUrl, aToken} = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
      event.preventDefault();

      try {

        if (!petImg) {
          return toast.error('Image Not Selected')
        }

        const formData = new FormData()

        formData.append('image', petImg)
        formData.append('name',name)
        formData.append('breed',breed)
        formData.append('age',Number(age))
        formData.append('gender',gender)
        formData.append('size',size)
        formData.append('vaccinated',vaccinated)
        formData.append('description',description)
        formData.append('location',location)
        formData.append('address',JSON.stringify({line1:address1,line2:address2}))
        formData.append('fee',Number(fee))

        //console log formdata
        formData.forEach((value,key)=>{
          console.log(`${key} : ${value}`);
          
        })

          const {data} = await axios.post(backendUrl + '/api/admin/add-pet',formData,{headers: { aToken }})

          if (data.success) {
            toast.success(data.message)
            setPetImg(false)
            setName('')
            setBreed('')
            setAge('')
            setAddress1('')
            setAddress2('')
            setGender('Male')
            setVaccinated('true')
            setSize('')
            setLocation('')
            setDescription('')
            setFee('')
          }else{
            toast.error(data.message)
          }
        
      } catch (error) {
        toast.error(error.message)
        console.log(error)
        
      }
    }

  return (
    <form onSubmit={onSubmitHandler}className='m-5 w-full' >

      <p className='mb-3 text-lg font-medium'>Add Pet</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="pet-image">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer'src={petImg ? URL.createObjectURL(petImg) :assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setPetImg(e.target.files[0])}type="file" id="pet-image" hidden />
          <p>
            Upload pet <br />picture
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Pet Name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className="border rounded px-3 py-2" type="text" placeholder="Name" required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Pet Breed</p>
              <input onChange={(e) => setBreed(e.target.value)} value={breed} className="border rounded px-3 py-2" type="text" placeholder="Breed" required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Age</p>
              <input onChange={(e) => setAge(e.target.value)} value={age} className="border rounded px-3 py-2" type="number" placeholder="Age" required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Gender</p>
              <select onChange={(e) => setGender(e.target.value)} value={gender} className="border rounded px-3 py-2" name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Adoption Fees</p>
              <input onChange={(e) => setFee(e.target.value)} value={fee} className="border rounded px-3 py-2" type="number" placeholder="Fees" required />
            </div>
          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Size</p>
              <input onChange={(e) => setSize(e.target.value)} value={size} className="border rounded px-3 py-2" type="text" placeholder="Size" required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Vaccinated</p>
              <select onChange={(e) => setVaccinated(e.target.value)} value={vaccinated} className="border rounded px-3 py-2" name="" id="">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Location</p>
              <input onChange={(e) => setLocation(e.target.value)} value={location} className="border rounded px-3 py-2" type="text" placeholder="Location" required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} className="border rounded px-3 py-2" type="text" placeholder="address 1" required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className="border rounded px-3 py-2" type="text" placeholder="address 2" required />
            </div>
          </div>
        </div>

        <div>
          <p className='mt-4 mb-2'>Description</p>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full px-4 pt-2 border rounded' placeholder="write about pet" rows={5} required />
        </div>

        <button type="submit" className="bg-[#60A5FA] px-10 py-3 mt-4 text-white rounded-full">Add pet</button>

      </div>

    </form>
  );
};

export default AddPet;
