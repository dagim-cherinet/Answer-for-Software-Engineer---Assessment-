// QUESTION #1
/**
 * GPA--- 3.56(Distinction)
 */

// QUESTION #2
/**
 * desta_keremela + lemon = 2.20
 * desta_keremela = lemon + 2
 * (lemon + 2) + lemon = 2.20
 *  therefore lemon = 0.20 ETB
 *  desata_keremela = 2  ETB
 */

// QUESTION #3 ~ A
// the data can be represented using array of objects
// adv. this allows as to iterate over each employees
const employeeLog = [
  {
    employee_id: 1,
    checkIn_date_time: "4 aug 2022 2:40",
    checkOut_date_time: "4 aug 2022 11:25",
  },
  {
    employee_id: 2,
    checkIn_date_time: "9 aug 2022 2:30",
    checkOut_date_time: "9 aug 2022 11:30",
  },
  {
    employee_id: 3,
    checkIn_date_time: "7 aug 2022 2:40",
    checkOut_date_time: "7 aug 2022 11:25",
  },
  {
    employee_id: 4,
    checkIn_date_time: "6 aug 2022 3:30",
    checkOut_date_time: "6 aug 2022 6:00",
  },
];
//QUESTION #3 ~ B (USING JavaScript)
//FUNCTION ~ that calculate the number of minutes missed
function get_missed_minutes(employee_data) {
  // global-variables
  let minute_missed;
  let minute_missed_in_checkIn;
  let minute_missed_in_checkOut;
  // new Date.day() doesn't return the day in its name(it return the day in number) so using the below-
  // array its possible to get the name of the day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // destructuring the employee log information from the function's parameter
  const { employee_id, checkIn_date_time, checkOut_date_time } = employee_data;

  // changing the date & time string into date formate
  let employee_checkIn = new Date(checkIn_date_time);
  let employee_checkOut = new Date(checkOut_date_time);
  // constructing normal check-in time w/c is 11:30 using new Date(year, mont, day, hr, min, sec)
  // year, month, day, hr directly from the employee data, changing only the time i.e hr, min, sec
  let normal_checkIn_time = new Date(
    employee_checkIn.getFullYear(),
    employee_checkIn.getMonth(),
    employee_checkIn.getDate(),
    2,
    30,
    00
  );
  // constructing normal checkout time w/c is 11:30 using new Date(year, mont, day, hr, min, sec)
  // year, month, day, hr directly from the employee data, changing only the time i.e hr, min, sec
  let normal_checkOut_time = new Date(
    employee_checkIn.getFullYear(),
    employee_checkIn.getMonth(),
    employee_checkIn.getDate(),
    11,
    30,
    00
  );
  //for saturday constructing check-out time

  let saturday_checkOut_time = new Date(
    employee_checkIn.getFullYear(),
    employee_checkIn.getMonth(),
    employee_checkIn.getDate(),
    6,
    30,
    00
  );
  //console.log(employee_checkIn.getDate());
  //for saturday from 2:30 ~ 6:30
  if (days[employee_checkIn.getDay()] == "Saturday") {
    minute_missed_in_checkIn = (employee_checkIn - normal_checkIn_time) / 60000; //changing milliseconds to minutes
    minute_missed_in_checkOut =
      (saturday_checkOut_time - employee_checkOut) / 60000;
    //if the employee arrives early -> mins missed in check-in = 0
    if (minute_missed_in_checkIn < 0) {
      minute_missed_in_checkIn = 0;
    }
    //if the employee leave late -> mins missed in check-out = 0
    if (minute_missed_in_checkOut < 0) {
      minute_missed_in_checkOut = 0;
    }
    minute_missed = minute_missed_in_checkIn + minute_missed_in_checkOut;
    const report = {
      employee_id,
      day: days[employee_checkIn.getDay()],
      check_in_time: new Date(checkIn_date_time).toLocaleTimeString(),
      check_out_time: new Date(checkOut_date_time).toLocaleTimeString(),
      minutes_missed: `${minute_missed} mins`,
    };
    console.table(report);
    console.log(minute_missed + " minutes missed");
    return minute_missed;
  }
  //for sunday---> day off
  else if (days[employee_checkIn.getDay()] == "Sunday") {
    minute_missed = 0;
    console.log("Sunday is day-off --- 0 mins missed");
    return minute_missed;
  }

  // for days from monday to friday [2:30 ~ 11:30]
  else {
    minute_missed_in_checkIn = (employee_checkIn - normal_checkIn_time) / 60000; //changing milliseconds-
    // to minutes
    minute_missed_in_checkOut =
      (normal_checkOut_time - employee_checkOut) / 60000;
    //if the employee arrives early -> mins missed in check-in = 0
    if (minute_missed_in_checkIn < 0) {
      minute_missed_in_checkIn = 0;
    }
    //if the employee leave late -> mins missed in check-out = 0
    if (minute_missed_in_checkOut < 0) {
      minute_missed_in_checkOut = 0;
    }
    minute_missed = minute_missed_in_checkIn + minute_missed_in_checkOut;
    const report = {
      employee_id,
      day: days[employee_checkIn.getDay()],
      check_in_time: new Date(checkIn_date_time).toLocaleTimeString(),
      check_out_time: new Date(checkOut_date_time).toLocaleTimeString(),
      minutes_missed: `${minute_missed} mins`,
    };
    console.table(report);
    console.log(minute_missed + " minutes missed");
    return minute_missed;
  }
}

//for loop for iterating over all employees to calculate missed minutes of each
for (let i = 0; i < employeeLog.length; i++) {
  get_missed_minutes(employeeLog[i]);
}
