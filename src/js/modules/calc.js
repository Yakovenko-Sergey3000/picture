const calc = (size, material,options,promocode,result, state) => {
    const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);


    let sum = 0,
        sele = 0;
        

    const calcSum = () => {
        
            state['size'] = sizeBlock.options[sizeBlock.selectedIndex].textContent;
            state['material'] = materialBlock.options[materialBlock.selectedIndex].textContent;
            state['options'] = optionsBlock.options[optionsBlock.selectedIndex].textContent;
            
         sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Выберите размер и материал';

        } else if (promocodeBlock.value === 'IWANTPOPART') {
            sele = Math.round(sum - (sum * 0.7))
            resultBlock.textContent = `${Math.round(sum * 0.7)}руб`;
            
        } else {
            resultBlock.textContent = `${sum}руб.`;
            
        }

        state['sale'] = !promocodeBlock ? '0руб' :`${sele}руб`;
        state['result'] =  `${sum}руб`;
        // console.log(state);
    }
    
    sizeBlock.addEventListener('change', calcSum);
    materialBlock.addEventListener('change', calcSum);
    optionsBlock.addEventListener('change', calcSum);
    promocodeBlock.addEventListener('input', calcSum);
}

export default calc;