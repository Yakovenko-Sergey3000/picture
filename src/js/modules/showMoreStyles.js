import {getStyles} from '../service/getResurce';

const showMoreStyles = (triger, wrapper) => {

    const colStyle = document.querySelector(wrapper),
            btn = document.querySelector(triger);


    const showStyles = (response,parent) => {

        response.forEach(({src, title, link}) => {
            const item = document.createElement('div');
            item.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10' , 'styles-2');
            item.innerHTML = `  
            
            <div class=styles-block>
                <img src="${src}" alt>
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div> `
            parent.appendChild(item);
        });
    }

    const showError = (response,parent) => {
        const item = document.createElement('div');
            item.classList.add('row','animated', 'fadeInUp');
            item.innerHTML = `
            
            <div class="styles-block" style="width:100%; text-align:center;">
                <h4>Что-то пошло не так :(</h4>
                <p>${response}</p>

            </div>`
            parent.appendChild(item);
    }
    
    btn.addEventListener('click', function() {
        getStyles('http://localhost:3000/styles')
            .then(res => showStyles(res, colStyle))
            .catch(error => showError(error.message, colStyle.parentNode))
            
        this.remove();
    })
    
    
} 

export default showMoreStyles;