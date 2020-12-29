const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markGuy = wrapper.querySelectorAll('.guy'),
        markNo = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        if (markType) {
            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');

                markType.forEach(mark => {
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');
                })
            });
        } else {

            markAll.forEach(mark => {

                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });


            markNo.style.display = 'block';
        }
    };

    const addEvent = (btns, mark) => {

        btns.addEventListener('click', () => {
            typeFilter(mark);
        })
    };

    addEvent(btnAll, markAll);
    addEvent(btnLovers, markLovers);
    addEvent(btnChef, markChef);
    addEvent(btnGirl, markGirl);
    addEvent(btnGuy, markGuy);
    addEvent(btnGrandmother, null);
    addEvent(btnGranddad, null);

    menu.addEventListener('click', e => {
        items.forEach(item => {
            item.classList.remove('active');
        })
        const target = e.target;

        if (target && target.nodeName === 'LI') {
            target.classList.add('active')

        }
    })

};

export default filter;