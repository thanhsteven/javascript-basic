// todo: Viết hàm so sánh 2 số a và b, tìm ra số lớn hơn.
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Vui lòng chèn dưới dạng số");
    return 0;
  }
  return Math.max(a, b);
}
console.log(compare(90, 88));
