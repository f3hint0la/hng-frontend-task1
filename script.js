function updateDateAndTime() {
  const date = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = days[date.getDay()];

  let hourUtc = date.getUTCHours();
  let minuteUtc = date.getUTCMinutes();
  let secondUtc = date.getUTCSeconds();
  let millisSecondsUtc = date.getUTCMilliseconds();

  const utcTime = date.getTime();

  const currentDayElm = document.querySelector(".currentDayOfTheWeek");
  currentDayElm.innerHTML = currentDay;

  const utcTimeElm = document.querySelector(".currentUTCTime");
  utcTimeElm.innerHTML = utcTime;
}

updateDateAndTime();
