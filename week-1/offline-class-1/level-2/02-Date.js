function getMonthName(monthIndex) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[monthIndex];
};
function getDayName(dayIndex) {
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  return dayNames[dayIndex];
};
function timeInAmPm(hours) {
  const period = hours >= 12 ? 'PM' : 'AM';
  return `${hours-12} ${period}`;
}
function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
  const currDate = new Date();
  console.log("Current Date - Time:", `${currDate.getDate()} ${getMonthName(currDate.getMonth())} ${currDate.getFullYear()} - ${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`);
  console.log("Current Date - Time in AM/PM:", `${currDate.getDate()} ${getMonthName(currDate.getMonth())} ${currDate.getFullYear()} - ${timeInAmPm(currDate.getHours())}:${currDate.getMinutes()}:${currDate.getSeconds()}`);
}

// Example Usage for Date Methods
dateMethods();
