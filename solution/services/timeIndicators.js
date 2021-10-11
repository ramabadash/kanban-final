//
function currentHour() {
  const splitDate = Date().split(' ')
  const splitTime = splitDate[4].split(':') // get time and split to hour, min, sec
  const hour = splitTime[0]
  return hour
}
// Returns the appropriate element to display according to the hour.
function elemByDaySection(hour) {
  let meseegeElem
  if (hour > 6 && hour < 12) {
    meseegeElem = document.querySelector('.morning')
  } else if (hour > 12 && hour < 18) {
    meseegeElem = document.querySelector('.afternoon')
  } else {
    meseegeElem = document.querySelector('.night')
  }
  return meseegeElem
}
// show and hidde opening messege - Depends on the hour
export function openMessage() {
  const hour = currentHour()
  const meseegeElem = elemByDaySection(hour)
  meseegeElem.classList.add('display') // show messege
  setTimeout(() => meseegeElem.classList.remove('display'), 3000) // hidde messege
}
// Add zero in front of numbers < 10
function checkTime(i) {
  if (i < 10) {
    i = `0${i}`
  } // add zero in front of numbers < 10
  return i
}
// Fixed clock
function startTime() {
  const today = new Date()
  const h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('clock').textContent = `${h} : ${m} : ${s}`
  setTimeout(startTime, 1000)
}
