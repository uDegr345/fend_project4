async function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById('name').value;
   
        const response = await fetch('/apiCall', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    })
   
    
    const data = await response.json();
    Client.updateUI(data);
}

export {handleSubmit}