const inputDesc = document.getElementById("desc");
const inputValor = document.getElementById("value");
const category = document.getElementById("category");
const btnAdd = document.getElementById("btn-add");
const register = document.getElementById("total-count");
const totalAmount = document.getElementById("total-amount");

const arrExpanses = [];

function addExpenses() {
  const expanses = {
    id: Date.now(),
    desc: inputDesc.value,
    value: inputValor.value,
    category: category.value,
  };

  arrExpanses.push(expanses);
  
  inputDesc.value= "";
  inputValor.value= "";

  console.log(arrExpanses);
}

function showExpanses() {
  let amountsSpent = arrExpanses.reduce((accumulator, item)=> accumulator + parseFloat(item.value), 0);
  console.log(amountsSpent);
  totalAmount.innerHTML = amountsSpent;

  let totalRegisters= arrExpanses.length;
  register.innerHTML= totalRegisters;

}

btnAdd.addEventListener("click", () => {
  addExpenses();
  showExpanses();
});
