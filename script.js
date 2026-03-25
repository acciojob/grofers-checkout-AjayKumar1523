const getSum = () => {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach((price) => {
    total += parseFloat(price.textContent);
  });

  // Remove old answer if exists
  const oldAns = document.getElementById("ans");
  if (oldAns) oldAns.remove();

  // Create new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");

  const newCell = document.createElement("td");
  newCell.colSpan = 2;
  newCell.id = "ans";   // ✅ REQUIRED
  newCell.textContent = total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};