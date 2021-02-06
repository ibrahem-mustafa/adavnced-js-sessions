function createLi(ul, title, id) {
  createElement('li', { class: 'TodoListItem', id: id}, (li) => {
    li.textContent = title

    createElement(
      'button',
      { class: 'removeBtn', style: 'margin: 0 15px'}, (btn) => {
        btn.textContent = 'X'

        btn.addEventListener('click', () => {
          ul.removeChild(li);
        })

        li.appendChild(btn)
      }
    )

    ul.appendChild(li)
  })
}

(async function initData() {
  const res = await fetch('/todos')
  const data = await res.json()
  
  const app = document.getElementById('app')
  const todoListContainer = app.querySelector('.todoListContainer');

  let todoList = todoListContainer.querySelector('.todoList');

  if (!todoList) {
    createElement(
      'ul',
      {class: 'todoList'},
      (ul) => {
        todoListContainer.appendChild(ul)
        todoList = ul;
      },
    )
  }

  data.forEach(({
    title, id
  }) => {
    createLi(todoList, title, id)
  })

  const input = app.querySelector('#todoContent');
  const btn = app.querySelector('.btn')

  btn.addEventListener('click', () => {
    const content = input.value;
    data.push({id: data.length + 1, title: content});
    createLi(todoList, content, data.length)
    input.value = '';
  })



  



})()

function createElement(tag, attributes, cb) {
  const ele = document.createElement(tag);
  Object.keys(attributes).forEach(key => ele.setAttribute(key, attributes[key]))
  cb(ele)
}