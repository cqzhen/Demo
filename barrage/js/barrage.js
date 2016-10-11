;(function(window, document){
  'use strict';
  var barrageObject = {};
  var barrageElement = document.querySelector('#barrage').getBoundingClientRect();
  var ul = document.createElement('ul');
  ul.style.top = barrageElement.top + 'px';
  ul.style.left = barrageElement.left + 'px';
  ul.style.width = barrageElement.width + 'px';
  ul.style.height = barrageElement.height + 'px';
  ul.classList.add('barrage');
  document.body.appendChild(ul);

  document.getElementById('form').addEventListener('submit', function onSubmit(event) {
    // 这边应该是接口的，把用户设置的参数传给服务器
    event.preventDefault();
    barrageObject.textContent = this[0].value;
    barrageObject.className = this[1].value.toLowerCase();
    barrageObject.color = this[2].value;
    this[0].value = '';
    renderBarrage();
  });

  function renderBarrage() {
    var li = document.createElement('li');
    li.textContent = barrageObject.textContent;
    li.classList.add(barrageObject.className);
    li.style.color = barrageObject.color;
    li.addEventListener('animationend', function () {
      this.remove();
    })
    ul.appendChild(li);
  }
})(window, document);
