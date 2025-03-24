const dish = [
  { name: "Rau sạch", category: "Đồ ăn" },
  { name: "Thịt lợn", category: "Đồ ăn" },
  { name: "Pepsi không calo", category: "Nước" },
  { name: "Cocacola", category: "Nước" },
  { name: "Cờ lê", category: "Dụng cụ" },
  { name: "Tuy vít", category: "Dụng cụ" },
];
let choice = [];
const ul = document.querySelector("#UL");
const btn = document.querySelector("#btn");
function getSelectedValue() {
  const select = document.querySelector("#select");
  const selectValue = select.value;
  return selectValue.toString();
}
function render(choice) {
  ul.textContent = "";
  choice.forEach((value) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>Tên đồ ăn:</b> ${value.name} <b>- Danh mục:</b> ${value.category}`;
    ul.appendChild(li);
  });
}
render(dish);
btn.addEventListener("click", function (event) {
  event.preventDefault();
  choice = [];
  choice.push(...dish.filter((value) => value.category == getSelectedValue()));
  render(choice);
});
