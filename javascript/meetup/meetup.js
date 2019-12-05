
export const getFirstOfDayInMonth = (year, month, day) => {
  const mapDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  for (let i = 0; i < 7; i++) {
    if (mapDays[new Date(year, month, i).getDay()] === day) return i || 7
  }
}

export const getMaxDaysInMonth = (year, month) => {
  return (new Date(year, month + 1, 0)).getDate()
}

export const parseNthDescriptor = (startDate, daysInMonth, nth) => {
  const descriptorMapper = {
    '1st': () => 0,
    '2nd': () => 1,
    '3rd': () => 2,
    '4th': () => 3,
    '5th': () => 4,
    'teenth': () => Math.ceil((startDate + 14 - (7 * Math.floor(startDate / 6))) / 7) - 1,
    'last': () => {
      let day = startDate
      while (day <= daysInMonth) day += 7
      return Math.ceil(day / 7) - 2
    }
  }

  return descriptorMapper[nth]()
}

export const meetupDay = (year, month, day, nth) =>  {
  const startDate = getFirstOfDayInMonth(year, month, day)
  const daysInMonth = getMaxDaysInMonth(year, month)
  const desiredNthDay = parseNthDescriptor(startDate, daysInMonth, nth)

  for (let i = 0; i + startDate <= daysInMonth; i += 7 ) {
    if ((i / 7) === desiredNthDay) return new Date(year, month, i + startDate)
  }

  throw new Error('The desired day for that month is nonexistent!')
}
