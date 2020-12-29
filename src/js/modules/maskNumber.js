const maskNumber = (selector) => {
    
    const  setCursorPosition = (pos, elem) => {
        elem.focus();

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos)
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        } 
    }
    
    function createMasks(event) {
        
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            };
            
            this.value = matrix.replace(/./g, a => {
                return  /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            })

            if(event.type === 'blur') {
                if(this.value.length === 2) {
                    this.value = '';
                }    
            } else {
                setCursorPosition(this.value.length, this);
            }
    }

    document.querySelectorAll(selector).forEach(item => {
            item.addEventListener('input',createMasks);
            item.addEventListener('focus',createMasks);
            item.addEventListener('blur',createMasks);
    });
    
}

export default maskNumber;