
 const doAddGrocery = async (e) => {
  e.preventDefault();

  const groceryInput = document.getElementById('formInputGroceryName');
  const grocery_name = groceryInput.value;
  const statusSelect = document.getElementById('formSelectStatus');
  const options = statusSelect.options;
  const selectedIndex = statusSelect.selectedIndex;
  const status = options[selectedIndex].text;

  if (!grocery_name) {
    alert('Please enter a grocery name.');
    return;
  }

  const res = await addGrocery({ grocery_name, status });

  if (res !== null) {
    inst.generateGroceries();
  }
  groceryInput.value = '';
};