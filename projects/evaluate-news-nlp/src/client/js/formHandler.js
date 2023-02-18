function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    const lang = 'en';
    const apiKey = process.env.API_KEY;
  
    console.log("::: Form Submitted :::")

    fetch(`/apiCall?key=${apiKey}&text=${formText}&lang=${lang}`, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
    .then(res => res.json())
    .then(data =>  {
        updateUI(data);
    })
}



export { handleSubmit }
