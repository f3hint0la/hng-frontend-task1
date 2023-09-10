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

  const utcTime = date.getTime();

  const currentDayElm = document.querySelector(".currentDayOfTheWeek");
  currentDayElm.innerHTML = currentDay;

  const utcTimeElm = document.querySelector(".currentUTCTime");
  utcTimeElm.innerHTML = utcTime;
}

updateDateAndTime();
