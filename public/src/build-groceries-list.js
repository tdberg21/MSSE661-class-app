
 class GroceryList {
  groceries = [];

  constructor() {}

  createGroceryListParent = () => {
    const ul = document.createElement('ul');
    ul.id = 'grocery-list';
    ul.className = 'list-group list-group-flush checked-list-box';
    return ul;
  };

  _deleteEventHandler = (groceryId) => async () => {
    if (groceryId) {
      const res = await deleteGrocery(groceryId);

      if (res !== null) {
        this.groceries = this.groceries.filter((grocery) => grocery.grocery_id !== groceryId);
        const grocery = document.getElementById(`grocery-${groceryId}`);
        grocery.remove();

        if (!this.groceries.length) {
          const div = document.getElementById('groceries');
          const loadingDiv = div.childNodes[1];
          const errDiv = this.generateErrorMsg('Create some new groceries!');
          div.replaceChild(errDiv, loadingDiv);
        }
      }
    }
  };

  /**
   * Builds the list item.
   * Uses bootstrap classes with some custom overrides.
   *
   * {@link https://getbootstrap.com/docs/4.4/components/list-group/}
   * @example
   * <li class="list-group-item">
   *   <button class="btn btn-secondary" onclick="deleteTask(e, index)">X</button>
   *   <span>Task name</span>
   *   <span>pending</span>
   *   <span>date create</span>
   * </li>
   */
  buildGroceryListRowItem = (task) => {
    const listGroupItem = document.createElement('li');
    listGroupItem.id = `grocery-${grocery.grocery_id}`;
    listGroupItem.className = 'list-group-item';

    const deleteBtn = document.createElement('button');
    const deleteBtnTxt = document.createTextNode('X');
    deleteBtn.className = 'btn btn-secondary';
    deleteBtn.addEventListener('click', this._deleteEventHandler(grocery.grocery_id));
    deleteBtn.appendChild(deleteBtnTxt);

    const groceryNameSpan = document.createElement('span');
    const groceryName = document.createTextNode(grocery.grocery_name);
    groceryNameSpan.appendChild(groceryName);

    const groceryStatusSpan = document.createElement('span');
    const groceryStatus = document.createTextNode(grocery.status);
    groceryStatusSpan.append(groceryStatus);

    const groceryDateSpan = document.createElement('span');
    const groceryDate = document.createTextNode(grocery.created_date);
    groceryDateSpan.append(groceryDate);

    listGroupItem.append(deleteBtn);
    listGroupItem.append(groceryNameSpan);
    listGroupItem.append(groceryStatusSpan);
    listGroupItem.append(groceryDateSpan);

    return listGroupItem;
  };

  buildGroceriesList = (mount, groceries) =>
    groceries.map((grocery) => {
      const listGroupRowItem = this.buildGroeryListRowItem(grocery);

      mount.append(listGroupRowItem);
    });

  generateErrorMsg = (msg) => {
    const div = document.createElement('div');
    const text = document.createTextNode(msg);
    div.id = 'user-message';
    div.className = 'center';
    div.appendChild(text);
    return div;
  };

  generateGroceries = async () => {
    const res = await getGroceries();
    const div = document.getElementById('groceries');
    const loadingDiv = div.childNodes[1];

    if (res.length) {
      this.groceries = res;
      const groceriesDiv = this.createGroceryListParent();
      this.buildGroceriesList(groceriesDiv, res);
      div.replaceChild(groceriesDiv, loadingDiv);
    } else {
      const errDiv = this.generateErrorMsg(res.msg);
      div.replaceChild(errDiv, loadingDiv);
    }
  };
}

const inst = new GroceryList();

(async () => {
  inst.generateGroceries();
})();