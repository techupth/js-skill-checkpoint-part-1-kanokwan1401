// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
// console.log(userPassword.length);

function checkPasswordStrength(password) {
  if (password.length < 6) {
    return "Weak";
  } else if (password.length >= 6 && password.length < 10) {
    return "Medium";
  } else if (password.length >= 10) {
    return "Strong";
  }
}
console.log(checkPasswordStrength(userPassword));
