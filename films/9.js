const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  // Вмикаємо автопрокрутку
  autoplay: {
    delay: 0, // 0 означає відсутність паузи між слайдами
    disableOnInteraction: false, // Прокрутка не зупиниться після кліку користувача
  },

  speed: 4000, // Швидкість руху в мілісекундах (чим більше, тим повільніше і плавніше)

  breakpoints: {
    320: { slidesPerView: 1.5, spaceBetween: 10 }, // Дробове значення покаже шматочок наступного слайду
    768: { slidesPerView: 2.5, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 }
  }
});

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Знаходимо блок з додатковою інформацією всередині цієї картки
    const moreInfo = button.parentElement.querySelector('.more-info');

    // Перевіряємо, чи блок зараз видимий
    if (moreInfo.style.display === 'block') {
      moreInfo.style.display = 'none';
      button.textContent = 'Більше';
    } else {
      moreInfo.style.display = 'block';
      button.textContent = 'Менше';
    }
  });
});




let preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
  setInterval(() => {
    preloader.style.display = 'none'
  }, 1500);
})

window.addEventListener('scroll', function () {
  let height = window.innerHeight;
  let btnTop = document.querySelector('.btn-Top');
  if (window.scrollY > height) {
    btnTop.style.display = 'flex'
  }
  else {
    btnTop.style.display = 'none'
  }
});


