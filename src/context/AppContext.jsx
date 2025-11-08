import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = 'Rs'

    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
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