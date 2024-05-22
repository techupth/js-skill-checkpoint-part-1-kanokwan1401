// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(product, promotion) {
  let totalPrice = product.reduce((acc, cur) => {
    // console.log(acc.price);
    // console.log(cur);
    acc += cur.price * cur.quantity;
    return acc;
  }, 0);
  if (promotion === "SALE20") {
    return (totalPrice -= totalPrice * 0.2);
  } else if (promotion === "SALE50") {
    return (totalPrice -= totalPrice * 0.5);
  } else return "ไม่ได้รับส่วนลด";
}
console.log(calculateTotalPrice(products, promotionCode));
