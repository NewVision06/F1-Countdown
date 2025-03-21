function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - 1 - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)));

  return {
    total,
    hours,
    minutes,
    seconds,
    days,
  };
}

function getNumNumber(number) {
  return number.toString().length;
}

function timeChange() {
  a = getTimeRemaining(date);

  function padZero(num, length) {
    return (Array(length).join("0") + num).slice(-length);
  }

  if (getNumNumber(a.hours) > 2) {
    document.getElementById("viewhour").innerHTML = padZero(a.hours);
  } else {
    document.getElementById("viewhour").innerHTML = padZero(a.hours, 2);
  }

  document.getElementById("viewminute").innerHTML = padZero(a.minutes, 2);

  document.getElementById("viewsecond").innerHTML = padZero(a.seconds, 2);
}

