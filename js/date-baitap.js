const now = new Date();
console.log(now.toDateString());
console.log(now.toLocaleDateString("vi-VI"));

const myYear = now.getFullYear();
const myMonth = now.getMonth() + 1;
const prefixMonth = myMonth < 10 ? "0" : "";
const myDate = now.getDate();

const customTime = `${myDate}/${prefixMonth}${myMonth}/${myYear}`;
console.log(customTime);
