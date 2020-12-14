// date Rotem comes home
const returnDate = new Date(2020, 11, 28, 15, 30, 30);

var chosenTime = 'days';


// buttons to be displayed under the timer
const buttons = {
  sethTime: {
    display_name: 'Seth Time',
    active: false
  },
  days: {
    display_name: 'Days',
    active: true
  }
}

buttonClicked = (btn) => {
  if (btn.id == 'seth') {
    chosenTime = 'seth';
    document.getElementById('help-text').innerText = '';
    document.getElementById('help-text').innerText = 'This is how long it feels.';
  } else {
    chosenTime = 'days';
    document.getElementById('help-text').innerText = '';
    document.getElementById('help-text').innerText = 'This is how long it is.';
  }
}



const startTime = () => {
  let hideYears = document.getElementById('hide-years');
  let yearsName = document.getElementById('years-name');
  let years = document.getElementById('years');
  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  years.hidden = true;
  hideYears.hidden = true;
  yearsName.hidden = true;

  let timeUntil = moment(returnDate).countdown(new Date());
  console.log(timeUntil);
  let deltaDays = timeUntil.days;
  let deltaHours = timeUntil.hours;
  let deltaMinutes = timeUntil.minutes;
  let deltaSeconds = timeUntil.seconds;

  if (deltaSeconds == undefined) {
    deltaSeconds = 00;
  }

  if (chosenTime != 'days') {
    let yearDelta = Math.round(deltaDays / 2);
    years.hidden = false;
    hideYears.hidden = false;
    yearsName.hidden = false;
    years.innerText = yearDelta;
  }

  days.innerText = deltaDays;
  hours.innerText = deltaHours;
  minutes.innerText = deltaMinutes;
  seconds.innerText = deltaSeconds;

  let t = setTimeout(startTime, 500);
};


startTime();


