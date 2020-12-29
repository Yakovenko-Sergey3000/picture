const validName = (selector) => {
    const inputs = document.querySelectorAll(selector);
        inputs.forEach(input => {
            input.addEventListener('keypress', e => {
                if (e.key.match(/[^а-яё, 0-9]/ig)) {
                    e.preventDefault()
                }
            })
        })
}

export default validName;