const getSum = () => {
  // Step 1: Get all price elements
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Step 2: Calculate total
  prices.forEach((price) => {
    total += parseFloat(price.textContent);
  });

  // Step 3: Prevent duplicate total row
  if (document.getElementById("total-row")) return;

  // Step 4: Create new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.id = "total-row";

  const newCell = document.createElement("td");
  newCell.colSpan = 2; // span across both columns
  newCell.textContent = total;

  newRow.appendChild(newCell);

  // Step 5: Append to table
  table.appendChild(newRow);
};