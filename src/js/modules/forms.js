import {postData} from '../service/getResurce';

const forms = (state) => {
    
    const forms = document.querySelectorAll('form'),
            upload = document.querySelectorAll('[name="upload"]');


    

    const createBlockMessage = (url, text, form) => {

        const parent = form.parentNode;

        const statusMessage = document.createElement('div'),
            statusImg = document.createElement('img'),
            statusText = document.createElement('div');


        statusMessage.classList.add('status');

        statusImg.setAttribute('src', url);
        statusImg.classList.add('animated', 'fadeInUp');

        statusText.textContent = text;


        statusMessage.appendChild(statusImg);
        statusMessage.appendChild(statusText)
        parent.appendChild(statusMessage);


    }

    const message = {
        loading: 'Загрузка...',
        done: 'Спасибо, мы скоро с вами свяжемся',
        error: 'Что то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    }


    upload.forEach(item => {
        item.addEventListener('input', () => {
            const fileName = item.files[0].name.split('.');
                let dots;

                
            fileName[0].length > 6 ? dots = '...' : dots = '.';
            const name = fileName[0].substring(0, 6) + dots + fileName[1];
            item.previousElementSibling.textContent = name;
        });
    });

    forms.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === "calc") {
                
                for (let key in state) {
                    formData.append(key, state[key]);
                    
                }
                
            } 
            for (var key of formData.keys()) {
                console.log(key, formData.get(key));
            }
            
            item.classList.add('animated', 'fadeOutUp');
            createBlockMessage(message.spinner, message.loading, item);
            setTimeout(() => {
                item.style.display = 'none';

            }, 400)

            const path = {
                sever: 'assets/server.php',
                consult: 'assets/consult.php'
            }
            let api;
            item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.sever : api = path.consult;
            console.log(api);
            postData(api, formData)
                .then(res => {
                    console.log(res)
                    document.querySelector('.status').remove();
                    createBlockMessage(message.ok, message.done, item);
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                        item.style.display = 'block';
                        document.querySelector('.status').remove();
                    }, 2000)
                })
                .catch(error => {
                    document.querySelector('.status').remove();
                    createBlockMessage(message.fail, message.error, item);
                    console.log(`error: ${error}`)
                    setTimeout(() => {
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                        item.style.display = 'block';
                        document.querySelector('.status').remove();
                    }, 2000)
                })
                .finally(() => {
                    item.reset();
                    upload.forEach(item => {
                        item.previousElementSibling.textContent = 'Файл не выбран';
                        
                    });
                })
        });

    });
};

export default forms;