(window.onscroll) = () => {
  const item = document.querySelectorAll(".fadeIn");
  item.forEach((item) => {
    const windowHeight = window.innerHeight;
    const itemsTop = item.getBoundingClientRect().top;
    const itemVisbile = 100;
    if (itemsTop < windowHeight - itemVisbile) {
      item.classList.add("active");
    }
  });
};
