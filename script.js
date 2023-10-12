const button_cont = document.querySelector("#buttons");


for (let i = 19; i >= 0; i--) {
    const button = document.createElement('div');
    button_cont.appendChild(button);
    button.setAttribute('class', "operand");
    i < 16 ? button.textContent = `${i}` : "";

    console.log(`${i}`);
}