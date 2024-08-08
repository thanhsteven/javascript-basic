// ! Find
// * trả về phần tử đầu tiên tìm thấy trong mảng thoả một điều kiện nào đó.
const numbers = [1, 999, 10000, 89];

// Tìm phần tử đầu tiên lớn hơn 10 trong hàm trên
const findYouNumber = numbers.find((element) => element > 10);
console.log(findYouNumber);

// Nếu không tìm thấy thì nó sẽ trả ra kết quả là undefine
