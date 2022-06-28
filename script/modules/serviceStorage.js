const getStorage = (key) => (
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
);
const setStorage = (key, contObj) => {
  localStorage.setItem(key, contObj);
};

const removeStorage = (nubmberDel, user) => {
  const allItem = getStorage(user);
  const delItem = allItem.filter(arrItem => arrItem.id !== nubmberDel);
  setStorage(user, JSON.stringify(delItem));
};
export default {
  getStorage,
  setStorage,
  removeStorage,
};
