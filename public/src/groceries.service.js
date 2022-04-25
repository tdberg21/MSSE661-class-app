const GROCERIES_API = `${BASE_API_URL}/groceries`;

const getGroceries = () => _get(GROCERIES_API, OPTIONS_WITH_AUTH);

const addGrocery = (formData) =>
  _post(GROCERIES_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

const deleteTask = (groceryId) =>
  _delete(`${GROCERIES_API}/${groceryId}`, OPTIONS_WITH_AUTH);