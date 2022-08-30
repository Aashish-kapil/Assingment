function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText) + click;
    totalClicks.innerText = sumValue;
}


const add = document.querySelector('.add-item');

add.addEventListener('click', () => {
  add.classList.toggle('active');
});

