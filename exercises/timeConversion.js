function timeConversion(s) {
  // Write your code here
  let hours = parseInt(s.substr(0, 2))

  if (s.indexOf('AM') !== -1 && hours === 12) hours = 0
  if (s.indexOf('PM') !== -1 && hours !== 12) hours += 12

  const formatedHours = hours.toString().padStart(2, '0')
  const minutesAndSeconds = s.substr(3, 5)

  return `${formatedHours}:${minutesAndSeconds}`
}

const ampmTime1 = '12:01:00PM'
const ampmTime2 = '12:01:00AM'

console.log(timeConversion(ampmTime1))
console.log(timeConversion(ampmTime2))
