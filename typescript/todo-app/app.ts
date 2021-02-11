
type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}


function renderTodoItem(list: HTMLElement, todo: Todo) {
  createElement("li", { class: "todo", id: todo.id.toString() }, (li) => {
    // SET TODO TITLE
    li.textContent = todo.title;

    // TODO: Create Checkbox Input 
    // TODO: Append input to the List Item (li)
    // TODO: Add event to the input to toggle the todo completed state

    // CRETE BUTTON AND APPEND IT TO (li)
    createElement("button", { class: "btn" }, (btn) => {
      
      btn.textContent = "X";

      btn.addEventListener("click", () => {
        list.removeChild(li);

        // TODO: REMOVE TODO FROM TODOS ARRAY
      });

      li.appendChild(btn);

      
    });

    // APPEND TODO LIST ITEM TO TODO LIST
    list.appendChild(li);
  });
}

function renderTodos(todos: Todo[]): HTMLElement {
  const container = document.querySelector('.container');
  const todoListContainer = container.querySelector('.todoListContainer');
  let todoList: HTMLElement = todoListContainer.querySelector('.todoList');

  if (!todoList) {
    createElement('ul', { class: 'todoList' }, (ul) => {
      todoListContainer.appendChild(ul);
      todoList = ul;

    })
  }

  todos.forEach(todo => {
    renderTodoItem(todoList, todo)
  })

  return todoList;
  
}

function renderForm(todoList: HTMLElement, todos: Todo[]) {

  const todoForm = document.querySelector('.todoForm');
  const input: HTMLInputElement = todoForm.querySelector('#todoInput');
  const btn = todoForm.querySelector('.btn');
  
  btn.addEventListener('click', () => {
    const todo: Todo = {
      userId: 1,
      id: todos.length + 1,
      title: input.value,
      completed: false
    }

    renderTodoItem(todoList, todo);
    input.value = ''

    todos.push(todo)
    
    console.log(todos)

  })

}

(async function init() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos/?_limit=15");

  const todos: Todo[] = await res.json();
  
  const todoList = renderTodos(todos)
  renderForm(todoList, todos);
})()


function createElement(
  tag: string,
  attributes: Record<string, string>,
  cb: (ele: HTMLElement) => void
)
{
  const ele = document.createElement(tag);
  Object.keys(attributes).forEach(key => ele.setAttribute(key, attributes[key]));
  cb(ele)
}