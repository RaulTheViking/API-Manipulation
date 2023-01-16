const body = document.querySelector("body");
const url = "https://jsonplaceholder.typicode.com";

fetch(url + "/users")
    .then((response) => response.json())
    .then((objects) => {
        objects.forEach(element => {
            const DOMNameList = document.createElement("div");
            DOMNameList.innerHTML = element.name;

            const DOMButton = document.createElement("button");
            DOMButton.innerHTML = "Button";
            DOMButton.addEventListener("click", () => { printInformation(element) });

            body.appendChild(DOMNameList);
            DOMNameList.appendChild(DOMButton);

        });

        let DOMInformation = document.createElement("div");
        DOMInformation.classList.add("itemCard");
        body.appendChild(DOMInformation);

    });


// La función transforma cada objeto en un array (Object.entries es la función que se encarga de ello) e imprime los elementos que deseamos. 

function printInformation(item) {

    document.querySelector(".itemCard").innerHTML = "";
    Object.entries(item).forEach(element => {
        document.querySelector(".itemCard").innerHTML += `<p>${element[0]}: ${checkObject(element[1])}</>`;
    });
}

//Esta función se encarga de determinar cual de los elementos dentro del array son objetos para poder manipularlos en el DOM. 
// typeof devuelve el tipo de variable que es, ya sea un string, un número, un objeto, etc; en este caso item tiene dos objetos, company y adress. 

function checkObject(item) {
    if (typeof item === 'object') {
        if (item.name == null) {
            return item.city
        }
        else {
            return item.name
        }
    }
    else {
        return item
    }
};