const newSwiper = new Swiper(".big-slider", {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<hr style="width:50px; display: inline-block">' +
                    '<span class="' + totalClass + '"></span>';
        },
      },
    navigation: {
        nextEl: '.slider-btn-n',
        prevEl: '.slider-btn-p',
    },
});

const recentSwiper = new Swiper ('.recent-swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<hr style="width:50px; display: inline-block">' +
                    '<span class="' + totalClass + '"></span>';
        },
    },
    navigation: {
        nextEl: '.recent-slider-btn-n',
        prevEl: '.recent-slider-btn-p',
    }
});

const filterBtn  = document.querySelector('.filter-btn');
const filterCloseBtn = document.querySelector('.filter-close-button');
const filterSection = document.getElementById('filter-section');

filterBtn.addEventListener('click', () => {
    filterSection.classList.remove('hidden');
    filterCloseBtn.classList.remove('hidden');
    filterBtn.classList.add('hidden');
});

filterCloseBtn.addEventListener('click', () => {
    filterSection.classList.add('hidden');
    filterCloseBtn.classList.add('hidden');
    filterBtn.classList.remove('hidden');
});