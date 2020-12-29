const modals = () => {
    let btnPressed = false;

    const bindModal = (openTrigger, selectorModal, closeTrigger, destroy = false) => {
        // Получаем данные (кнопки,селектор окна,кнопка для закрытия)

        const openBtn = document.querySelectorAll(openTrigger),
            modalWindow = document.querySelector(selectorModal),
            closeBtn = document.querySelectorAll(closeTrigger),
            window = document.querySelectorAll('[data-modal]'),
            presents = document.querySelector('.fixed-gift'),
            scroll = calcScroll();


        presents.classList.add('animated');


        openBtn.forEach(btn => {
            btn.addEventListener('click', e => {
                if (e) {
                    e.preventDefault();
                }
                if (destroy) {
                    btn.remove();
                }

                btnPressed = true;

                window.forEach(item => {
                    item.classList.add('animated', 'fadeIn')
                    

                })

                modalWindow.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;


                const scrollPresent = parseInt(getComputedStyle(presents).right)
                presents.style.right = `${scrollPresent + scroll}px`;


            });
        })

        closeBtn.forEach(btn => {
            btn.addEventListener('click', e => {
                
                window.forEach(item => {
                    item.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`
                    presents.style.right = '';
                    
                    


                })


            });


        })

        modalWindow.addEventListener('click', e => {
            const target = e.target;
            if (target && target.classList.contains(selectorModal.slice(1))) {
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`
                presents.style.right = '';
                
                

            }
        })
    };

    const showTimeByModal = (selector, time) => {
        let display;

        setTimeout(() => {
            document.querySelectorAll('[data-modal').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block'
                }

            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }


        }, time);
    };

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';



        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;

    };


    function openByScroll(selector) {
        window.addEventListener('scroll', () => {



            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 2)) {

                document.querySelector(selector).click();
            }
        })
    }

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
    openByScroll('.fixed-gift');
    // showTimeByModal('.popup-consultation', 3000);
};

export default modals;