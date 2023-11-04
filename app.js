document.addEventListener('DOMContentLoaded', () => {


    let sections = document.querySelectorAll('section');
    let main = document.querySelector('main');


    sections.forEach((section) => {
        let swiper = new Swiper(section.querySelector('.swiper'), {
            zoom: {
                maxRatio: 2,
            },
            loop: true,
            pagination: {
                el: section.querySelector('.pagination'),
                clickable: true,
            },
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: section.querySelector('.button-right'),
                prevEl: section.querySelector('.button-left'),
            },
        });


        if (window.innerWidth >= 1024) {

            let photos = Array.from(section.querySelectorAll('.photos > div'));
            let dots = Array.from(section.querySelectorAll('.pagination span'));

            const activateThumb = (current) => {
                section.querySelector('.photos > .active').classList.remove('active');
                current.classList.add('active');
            }

            photos.forEach((photo, i) => {
                photo.addEventListener('click', () => {
                    activateThumb(photo);
                    dots[i].click();
                })
            })

            swiper.on('realIndexChange', (swiper) => {
                activateThumb(photos[swiper.realIndex]);
            })

        }

    })

    const activeSection = () => {
        sections.forEach(section => {
            if (section.getBoundingClientRect().y > -100 && section.getBoundingClientRect().y < 100) {
                section.classList.add('active')
            } else {
                section.classList.remove('active')
            }
        })
    }

    if (window.innerWidth >= 1024) {
        activeSection();
        main.addEventListener('scroll', () => {
            activeSection();
        })
    }
    
})