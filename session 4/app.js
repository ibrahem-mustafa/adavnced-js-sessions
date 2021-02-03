// create h1
// const h1  = document.createElement('h1');
// // assign Header Text to h1

// //  => innerText
// // h1.innerText = 'hello'
// //  => textContent
// h1.textContent = 'Hello'
// //  => innerHTML
// // h1.innerHTML = '<script>alert("hi")</script>'

// // set className 'title'
// h1.setAttribute('class', 'title dom')
// // h1.classList.add('ttttttttttt')
// // console.log(h1.classList.contains('ttttttttttt'))
// // h1.classList.remove('ttttttttttt')
// // h1.classList.toggle('ttttttttttt')

// // set id 'topTitle'
// h1.setAttribute('id', 'topTitle')

// // set style 'color:red'
// h1.setAttribute('style', 'color:red;');

// // set data-id '15'
// h1.setAttribute('data-id', '15')
// // h1.removeAttribute('data-id')

// // // append h1 to dom
// // console.log(h1)

function createElement(tag, attributes, textContent, cb) {
  const ele = document.createElement(tag);

  const keys = Object.keys(attributes);
  for (key of keys) {
    ele.setAttribute(key, attributes[key])
  }

  ele.textContent = textContent;
  
  cb(ele)
}




// BTN
const container = document.querySelector('.container');
const btn = container.querySelector('.btn')

btn.addEventListener('click', () => {
  container.prepend(h1);
})


createElement(
  'h1',
  {
    class: 'title dom',
    style: 'color:red',
    id: 'topTitle',
    'data-id': '15'
  },
  'Hello',
  (ele) => {
    container.appendChild(ele)
  }
)
createElement(
  'h1',
  {
    class: 'title dom',
    style: 'color:red',
    id: 'topTitle',
    'data-id': '15'
  },
  'Hello',
  (ele) => {
    container.appendChild(ele)
  }
)
createElement(
  'h1',
  {
    class: 'title dom',
    style: 'color:red',
    id: 'topTitle',
    'data-id': '15'
  },
  'Hello',
  (ele) => {
    container.appendChild(ele)
  }
)
createElement(
  'h1',
  {
    class: 'title dom',
    style: 'color:red',
    id: 'topTitle',
    'data-id': '15'
  },
  'Hello',
  (ele) => {
    container.appendChild(ele)
  }
)



// let h1Ele;
// getElementById
// h1Ele = document.getElementById('topTitle')
// querySelector
// h1Ele = document.querySelector('.title')
// querySelectorAll
// h1Ele = document.querySelectorAll('.title')

// console.log(h1Ele)


