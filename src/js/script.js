const items = document.querySelectorAll('.fines__item_mobail'),
      descr = document.querySelectorAll('.fines__descr-mobail');


items.forEach((elem , i) => {
    elem.addEventListener('click', (e) => {
        descr[i].classList.toggle('hiden')
    })
});