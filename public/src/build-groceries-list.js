(async () => {
  const groceries = await getGroceries();
  console.log(groceries);

  if (groceries.length) {
    const div = document.getElementById('groceries');
    const loadingDiv = div.childNodes[1];

    const ul = document.createElement('ul');

    div.replaceChild(ul, loadingDiv);

    groceries.map((grocery) => {
      const li = document.createElement('li');
      li.className = 'grocery-item';
      const block = document.createElement('div');
      block.className = 'grocery-item-block';

      const checkboxSpan = document.createElement('span');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkboxSpan.className = 'task-checkbox';
      checkboxSpan.appendChild(checkbox);

      const nameSpan = document.createElement('span');
      nameSpan.className = 'grocery-name';
      nameSpan.innerText = grocery.name;

      const quantitySpan = document.createElement('span');
      quantitySpan.className = 'grocery-quantity';
      quantitySpan.innerText = task.quantity;

      const dateSpan = document.createElement('span');
      dateSpan.className = 'grocery-date';
      dateSpan.innerText = grocery.created_date;

      block.appendChild(checkboxSpan);
      block.appendChild(nameSpan);
      block.appendChild(quantitySpan);
      block.appendChild(dateSpan);

      li.appendChild(block);
      ul.appendChild(li);
    });
  }
})();