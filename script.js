const siteBackground = document.body;
const h2Elements = document.getElementsByClassName('h2-elements');

function setSiteProperty(){
    siteBackground.style.backgroundColor = prompt("set the background color of the site");
    siteBackground.style.color = prompt("Set the text color of the entire site");
    siteBackground.style.fontFamily = prompt("Set the font family of the site");
    for (let i = 0; i < h2Elements.length; i++){
        h2Elements[i].style.fontSize = prompt("Set the font size of all the h2 elements");
    } 
}
setSiteProperty()