export const formatFromBrToUs = (date) => {
    const [day, mounth, year] = date.split('/')
    const newDate = `${year}-${mounth}-${day}`
    return newDate;
}

export const formatDate = (date) => {
    if (date) {
        const [year, mounth, day] = date.split('-')
        const newDate = `${day}/${mounth}/${year}`
        return newDate;
    }
}

export const getDateFromTimestamp = (timestamp) => {
    const [date, time] = timestamp.split('T')
    return date;
}

export const formatDateFromTimestamp = (timestamp) => {
    const [date, time] = timestamp.split('T')
    const newDate = formatDate(date)
    return newDate;
}