
let changeElem = document.getElementById('id1');

changeElem.addEventListener('click', func1);

function func1(elem) {
    elem.target.classList.add("new");
    elem.target.addEventListener('click', func2)
}

function func2(elem) {
  elem.target.classList.remove("new");
  elem.target.removeEventListener('click', func2);
  elem.target.addEventListener('click', func1);
}
