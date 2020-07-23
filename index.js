let battelfield = document.querySelector(".container");

let fireFunction = () => {
   battelfield.childNodes[Math.floor(Math.random() * 10)].childNodes[Math.floor(Math.random() * 10)].style.background= "red"; 

console.log(battelfield.childNodes);
console.log(battelfield.childNodes[0].childNodes);
}

window.onload = () => {
     for (let i=0; i<10; i++){
        let row = document.createElement("div");
        battelfield.appendChild(row);
        row.style.display = "flex";
        for (let j=0; j<10; j++){
            let cell = document.createElement("div");
            row.appendChild(cell);
            cell.innerHTML = Math.floor(Math.random() * 2);
            cell.style.border= "2px solid gray"
            cell.style.padding= "15px"
            if (cell.innerHTML == 1) cell.style.background= "gray";
        }
     }
    let button = document.createElement("button");
    button.innerHTML = "Fire";
    button.style.padding = "10px 30px";
    button.style.background = "red";
    battelfield.appendChild(button);
    button.addEventListener("click" , fireFunction);
};





