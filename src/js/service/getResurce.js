const postData = async (url, body) => {
    
        const res = await fetch(url, {
            method: 'POST',
            body: body
        })
    
        return await res.text();
};


const getStyles = async (url) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Can't get url: ${url}, status: ${res.status}`);
    }

    return await res.json();
};




export {postData, getStyles};




