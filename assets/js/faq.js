const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    items.forEach(i => {
      i.classList.remove('active');
      const c = i.querySelector('.accordion-content');
      c.style.height = 0;
    });


    if (!isOpen) {
      item.classList.add('active');
      const inner = content.querySelector('.accordion-content-inner');
      content.style.height = inner.scrollHeight + 'px';
    }
  });
});



const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})