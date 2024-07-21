// Điều kiện trong Javascript
const isRich = false;
const myMoney = 100000000;
if (!isRich) {
	console.log("I will buy a new car");
} else if (myMoney > 100000) {
	console.log("I will give you some money");
} else {
	console.log("I will save my money");
}

// alert("You have so much money");
// const yourName = prompt("What is your name ?", "");
// console.log(yourName);
// const isYourMoney = confirm(`Is your name ${yourName} ?`);
// console.log(isYourMoney);

// ! Bài 1
// Todo: Nhập vào số tuổi và kiểm tra nếu số tuổi lớn hơn 18 thì được coi phim rạp và ngược lại thì không được vào xem.
const yourAge = prompt("Vui lòng nhập vào số tuổi của bạn ?", "");
console.log(typeof yourAge);
if (Number(yourAge)) {
}
