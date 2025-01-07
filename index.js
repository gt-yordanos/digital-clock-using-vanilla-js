const updateClock = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM/PM
  const amPm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12; // If hours is 0, set to 12

  // Convert zero-based month to a string
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[month];

  // Add leading zero to hours, minutes, and seconds if needed
  const pad = (num) => (num < 10 ? "0" + num : num);

  // Update HTML elements
  document.getElementById("hours").innerText = pad(hours);
  document.getElementById("minutes").innerText = pad(minutes);
  document.getElementById("seconds").innerText = pad(seconds);
  document.getElementById("am-pm").innerText = amPm;
  document.getElementById("months").innerText = monthName;
  document.getElementById("days").innerText = pad(day);
  document.getElementById("years").innerText = year;
};

setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
