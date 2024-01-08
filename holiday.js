// Given array of dates
const datesArray = ['2024-01-08', '2024-02-21', '2024-02-26'];

// Function to calculate the difference between two dates
function calculateDateDifference(currentDate, targetDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const currentDateObj = new Date(currentDate);
  const targetDateObj = new Date(targetDate);

  const differenceDays = Math.round((targetDateObj - currentDateObj) / oneDay);
  return differenceDays;
}

// Function to find the next date and calculate the difference
function findNextDate(currentDate, dateArray) {
  const currentDateObj = new Date(currentDate);
  let nextDate = null;
  let minDifference = Infinity;

  dateArray.forEach((date) => {
    const difference = calculateDateDifference(currentDate, date);
    if (difference > 0 && difference < minDifference) {
      minDifference = difference;
      nextDate = date;
    }
  });

  return { nextDate, daysUntilNextDate: minDifference };
}

// Get today's date (system date)
const systemDate = new Date();
const formattedSystemDate = systemDate.toISOString().split('T')[0];

// Find the next date and calculate the difference
const { nextDate, daysUntilNextDate } = findNextDate(formattedSystemDate, datesArray);

// Output the result
if (nextDate) {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const nextDateObj = new Date(nextDate);
  const dayOfWeek = dayNames[nextDateObj.getUTCDay()];

  let message = `Today is ${formattedSystemDate}. <br /> The next date is ${nextDate}, ${dayOfWeek}, in ${daysUntilNextDate} days.`;

  // Check if the next date is Thursday or Sunday
  if (dayOfWeek === 'Thursday' || dayOfWeek === 'Sunday') {
    message += ' Great Opportunity!';
  }

  console.log(message);
  document.getElementById("notice").innerHTML = message;
} else {
  console.log('No valid future dates found.');
  document.getElementById("notice").innerHTML = 'No Holiday Left.';

}

