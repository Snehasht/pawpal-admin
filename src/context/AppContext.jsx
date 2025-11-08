import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = 'Rs'

    const calculateAge = (dob) => {
        if (!dob || dob === 'Not Selected' || dob === '') {
            return 'N/A'
        }
        
        try {
            const today = new Date()
            const birthDate = new Date(dob)
            
            // Check if date is valid
            if (isNaN(birthDate.getTime())) {
                return 'N/A'
            }
            
            let age = today.getFullYear() - birthDate.getFullYear()
            const monthDiff = today.getMonth() - birthDate.getMonth()
            
            // If birthday hasn't occurred this year, subtract 1
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--
            }
            
            return age
        } catch (error) {
            return 'N/A'
        }
    }

    const months = [ "","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const slotDateFormat = (slotDate) =>{
        if (!slotDate) return '';

        if (slotDate.includes('_')) {
            const dateArray = slotDate.split('_')
            const day = dateArray[0]
            const monthIndex = Number(dateArray[1])
            const year = dateArray[2]
            const monthName = months[monthIndex] || ''
            return `${day} ${monthName} ${year}`.trim()
        }

        if (slotDate.includes('-')) {
            const [year, month, day] = slotDate.split('-')
            const monthIndex = Number(month)
            const monthName = months[monthIndex] || ''
            return `${Number(day)} ${monthName} ${year}`.trim()
        }

        return slotDate
        }

    const formatSlotTime = (time) => {
        if (!time) return ''

        if (time.includes(':')) {
            let [hourStr, minuteStr] = time.split(':')
            let hour = Number(hourStr)
            const minute = Number(minuteStr)
            if (Number.isNaN(hour) || Number.isNaN(minute)) {
                return time
            }

            const ampm = hour >= 12 ? 'PM' : 'AM'
            hour = hour % 12 || 12
            const minutePadded = minute.toString().padStart(2, '0')
            return `${hour}:${minutePadded} ${ampm}`
        }

        return time
    }

    const value={
        calculateAge,
        slotDateFormat,
        formatSlotTime,
        currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider