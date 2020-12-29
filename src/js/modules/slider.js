const slider = (slides, dir, prev, next) => {
    let indexSlider = 1,
        stopSlider = false;
    const item = document.querySelectorAll(slides);
            
    const showSlides = (n) => {
        
        if (n > item.length) {
            indexSlider = 1;
            
        }

        if(n < 1 ) {
            indexSlider = item.length;
        }
                item.forEach(item => {
                    item.classList.add('animated');
                    item.style.display = 'none';
                });
    
                item[indexSlider - 1].style.display = 'block';
    }

    showSlides(indexSlider);

            const plusSlider = (n) => {
                indexSlider += n; 
                showSlides(indexSlider)
            }
            
            try{
                const btnPrev = document.querySelector(prev),
                btnNext = document.querySelector(next);

                    
                btnPrev.addEventListener('click', () => {
                    plusSlider(-1);
                    item[indexSlider - 1].classList.remove('fadeInRight');
                    item[indexSlider - 1].classList.add('fadeInLeft');
                });

                btnNext.addEventListener('click', () => {
                    plusSlider(1);
                    item[indexSlider - 1].classList.remove('fadeInLeft');
                    item[indexSlider - 1].classList.add('fadeInRight');
                }); 

            } catch(e) {}

           const autoSlider = () => {
             stopSlider =  setInterval(() => {

                if(dir === 'vertically') {
                    plusSlider(1);
                    item[indexSlider - 1].classList.add('fadeInDown'); 
                } else {
                    plusSlider(1);
                    item[indexSlider - 1].classList.remove('fadeInLeft');
                    item[indexSlider - 1].classList.add('fadeInRight');
                }
                    
               }, 5000);
           };

           autoSlider();

           item[0].parentNode.addEventListener('mouseenter', () => {
               clearInterval(stopSlider);
           });
           item[0].parentNode.addEventListener('mouseleave', () => {
              autoSlider();
        });
        
           


};

export default slider;