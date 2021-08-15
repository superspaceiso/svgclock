let root = document.documentElement;

setInterval(currTime, 1000)

function currTime(){
  let time = new Date()
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()

  let degreeHour
  let degreeMinute = (6 * minute) + "deg"
  let degreeSecond = (6 * second) + "deg"

  if (minute > 19 && minute < 29) {
    degreeHour = ((30 * hour) + 6) + "deg"
  } else if (minute > 29 && minute < 39) {
    degreeHour = ((30 * hour) + 12) + "deg"
  } else if (minute > 39 && minute < 49) {
    degreeHour = ((30 * hour) + 16) + "deg"
  } else if (minute > 49) {
    degreeHour = ((30 * hour) + 24) + "deg"
  } else {
    degreeHour = (30 * hour) + "deg"
  }

  root.style.setProperty('--hour', degreeHour);
  root.style.setProperty('--minute', degreeMinute);
  root.style.setProperty('--second', degreeSecond);

}