import createElement from './createElement.js';
import control from './control.js';

const {
  createH3,
  createForm,
  createTable,
  createModal,
  createRow,
} = createElement;


const {itemsIdRender,
  btnDisabled,
  formSubmit,
  delTask,
  authBtn,
  authSub,
  statusTask,
} = control;

export const renderTask = (taskArr) => {
  const tableBody = document.querySelector('tbody');
  taskArr.forEach(item => {
    tableBody.insertAdjacentElement('beforeend', createRow(item));
  });
};
export const renderApp = (selectorApp) => {
  const app = document.querySelector(`${selectorApp}`);
  const h3 = createH3();
  const form = createForm();
  const table = createTable();
  const modal = createModal();
  app.append(h3, form, table, modal);
  authBtn(modal);
  authSub(modal);
  itemsIdRender();
  btnDisabled(form);
  formSubmit(form, table, modal);
  delTask(table);
  statusTask(table, modal);
};
