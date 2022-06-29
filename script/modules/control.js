import createElement from './createElement.js';
import serviceStorage from './serviceStorage.js';
import {renderTask} from './render.js';
const {setStorage, getStorage, removeStorage} = serviceStorage;
const {createRow} = createElement;
const itemsIdRender = () => {
  const itemsId = document.querySelectorAll('.number-item');
  itemsId.forEach((element, id) => {
    element.textContent = id + 1;
  });
};
const randomId = () => {
  let hashId;
  return hashId = Math.floor(Math.random() * 1e5);
};
const btnDisabled = (form) => {
  const btnPrimary = form.querySelector('.btn-primary');
  form.task.addEventListener('change', () => {
    if (form.task.value.trim() !== '') {
      btnPrimary.disabled = false;
    } else {
      btnPrimary.disabled = true;
    }
  });
  const btnWarning = form.querySelector('.btn-warning');
  btnWarning.addEventListener('click', () => {
    btnPrimary.disabled = true;
  });
};
const formSubmit = (form, table, userName) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formModal = userName.querySelector('form');
    const tbody = table.querySelector('tbody');
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);
    newContact.id = `${randomId()}`;
    newContact.status = 'В процессе';
    newContact.classStatus = 'table-light';
    const data = getStorage(formModal.userName.value);
    data.push(newContact);
    setStorage(formModal.userName.value, JSON.stringify(data));
    tbody.append(createRow(newContact));
    form.reset();
    itemsIdRender();
  });
};
const delTask = (table) => {
  const tbody = table.querySelector('tbody');
  const hiddInp = document.querySelector('#userId');
  tbody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.btn-danger')) {
      const delElem = target.closest('tr');
      removeStorage(delElem.getAttribute('data-id'), hiddInp.value);
      delElem.remove();
      itemsIdRender();
    }
  });
};
const authBtn = (modal) => {
  const btnAuth = modal.querySelector('.btn-primary');
  const formModal = modal.querySelector('form');
  formModal.userName.addEventListener('change', () => {
    if (formModal.userName.value.trim() !== '') {
      btnAuth.disabled = false;
    } else {
      btnAuth.disabled = true;
    }
  });
};
const authSub = (modal) => {
  const formModal = modal.querySelector('form');
  const hiddInp = modal.querySelector('#userId');
  formModal.addEventListener('submit', e => {
    e.preventDefault();
    renderTask(getStorage(formModal.userName.value));
    hiddInp.value = formModal.userName.value;
    itemsIdRender();
    modal.classList.remove('d-flex');
  });
};
const statusTask = (table, modal) => {
  const tbody = table.querySelector('tbody');
  const hiddInp = document.querySelector('#userId');
  tbody.addEventListener('click', e => {
    const data = getStorage(hiddInp.value);
    const target = e.target;
    if (target.closest('.btn-success')) {
      const elem = target.closest('tr');
      const idElem = elem.getAttribute('data-id');
      const index = data.findIndex(el => el.id === idElem);
      if (data[index].status === 'Выполнена') {
        elem.classList.remove('table-success');
        elem.classList.add('table-light');
        elem.querySelector('.status').textContent = 'В процессе';
        data[index].status = 'В процессе';
        data[index].classStatus = 'table-light';
        setStorage(hiddInp.value, JSON.stringify(data));
      } else {
        elem.classList.remove('table-light');
        elem.classList.add('table-success');
        elem.querySelector('.status').textContent = 'Выполнена';
        data[index].status = 'Выполнена';
        data[index].classStatus = 'table-success';
        setStorage(hiddInp.value, JSON.stringify(data));
      }
    }
  });
};

export default {
  itemsIdRender,
  btnDisabled,
  formSubmit,
  delTask,
  authBtn,
  authSub,
  statusTask,
};
