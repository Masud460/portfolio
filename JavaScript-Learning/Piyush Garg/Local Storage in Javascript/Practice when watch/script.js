const userInput = document.getElementById('username');
const btn = document.getElementById('btn');
const set_username = document.getElementById("set_username");;


btn.addEventListener('click', () => {
    const collectedUsername = userInput.value;
    localStorage.setItem("name", collectedUsername);
    location.reload()
})

window.addEventListener('load', () => {
    set_username.innerText = set_username.innerText + ' ' + localStorage.getItem('name');
    
})