const getJoke = document.getElementById("get-joke");
const postJoke = document.getElementById("post-joke");
const result = document.getElementById("result-joke");

getJoke.addEventListener("click", async function(ev){
    ev.preventDefault();
    const resp = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await resp.json();
    const value = data.value;
    // console.log(value);

    result.innerText = value;
})

postJoke.addEventListener("click", async function(ev) {
    ev.preventDefault();
    const resp = await fetch('http://localhost:3000/', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            message: "Hello from the frontend!"
        })
    });
    const data = await resp.json();
    result.innerText = data.message;
})