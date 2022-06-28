const createH3 = () => {
  const h3 = document.createElement('h3');
  h3.textContent = 'Todo App';
  return h3;
};

const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.insertAdjacentHTML('beforeend', `
    <label class="form-group me-3 mb-0">
      <input type="text" name="task" id="task-form" class="form-control" 
      placeholder="ввести задачу">
    </label>

    <button type="submit" class="btn btn-primary me-3" disabled>
      Сохранить
    </button>

    <button type="reset" class="btn btn-warning">
      Очистить
    </button>
  `);
  return form;
};
const createTable = () => {
  const containWrapper = document.createElement('div');
  containWrapper.classList.add('table-wrapper');
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `);
  const tbody = document.createElement('tbody');
  table.append(thead, tbody);
  table.tbody = tbody;
  containWrapper.append(table);
  return containWrapper;
};
const createModal = () => {
  const wrappModal = document.createElement('div');
  wrappModal.classList.add('modal-wrap', 'vh-100', 'w-100', 'd-flex',
      'align-items-center', 'justify-content-center');
  wrappModal.style.position = 'absolute';
  wrappModal.style.backgroundColor = 'white';
  wrappModal.hidden = true;
  wrappModal.insertAdjacentHTML('beforeend', `
  <form>
    <div class="mb-3">
      <label for="user-name" class="form-label">Имя</label>
      <input type="text" class="form-control" 
      id="userName" placeholder="Введите имя">
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary" disabled>Войти</button>
    </div>
  </form>
  <input type="hidden" id="userId" value="">
  `);
  return wrappModal;
};
const createRow = ({task, status, classStatus, id}) => {
  const tr = document.createElement('tr');
  tr.classList.add(`${classStatus}`);
  tr.setAttribute('data-id', id);
  const td = document.createElement('td');
  td.classList.add('number-item');
  const taskTd = document.createElement('td');
  taskTd.classList.add('task');
  taskTd.textContent = task;
  const tdStatus = document.createElement('td');
  tdStatus.classList.add('status');
  tdStatus.textContent = status;
  const btnWrapp = document.createElement('td');
  const btnDanger = document.createElement('button');
  btnDanger.classList.add('btn', 'btn-danger');
  btnDanger.textContent = 'Удалить';
  const btnSuccess = document.createElement('button');
  btnSuccess.classList.add('btn', 'btn-success');
  btnSuccess.textContent = 'Завершить';
  btnWrapp.append(btnDanger, btnSuccess);
  tr.append(td, taskTd, tdStatus, btnWrapp);
  return tr;
};
export default {
  createH3,
  createForm,
  createTable,
  createModal,
  createRow,
};
