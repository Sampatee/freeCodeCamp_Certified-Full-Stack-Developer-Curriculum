const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

const formatDateMMDDYYYY = (dateObj) =>
  `Formatted Date (MM/DD/YYYY): ${dateObj.toLocaleDateString("en-US")}`;

const formatDateLong = (dateObj) =>
  `Formatted Date (Month Day, Year): ${dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;

console.log(currentDateFormat);
