const year = 2024;

const isLeapYear = (year) => {
  let leap = false;

  /**logic - if year (is divisible by only 4 AND not 100) OR (is divisible by 100 AND also by 400) --> then leap year else false */
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    leap = true;
  }

  return `${year} ${leap ? "is" : "is not"} a leap year.`;
};

const result = isLeapYear(year);
console.log(result);
