'use strict';

// const li = document.querySelectorAll('li');

// for ()
// if (!li.querySelector('ul')) {
//   return;
// }
const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');
  const text = li.firstChild;

  if (!text || text.nodeType !== 3) {
    continue;
  }

  span.textContent = text.textContent;
  li.replaceChild(span, text);
}

tree.onclick = function (evente) {
  const li = evente.target.closest('li');
  const ul = li.querySelector('ul');

  if (evente.target.tagName !== 'SPAN') {
    return;
  }

  if (ul.style.display === 'none') {
    ul.style.display = '';
  } else {
    ul.style.display = 'none';
  }
};
