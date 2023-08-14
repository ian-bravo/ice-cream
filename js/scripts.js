window.addEventListener("load", listIceCreamFlavors);

function listIceCreamFlavors () {
    const flavors = [];
    flavors.push("strawberry", "vanilla", "chocolate");

    let h1Element = document.querySelector("h1");
    let ulElement = document.createElement("ul");

    h1Element.after(ulElement);
<p></p>
    flavors.forEach(function(flavor) {
        let liElement = document.createElement("li");
        liElement.append(flavor);
        ulElement.append(liElement);
    });
    
}