import {
    ParaCmpt,
    LinkCmpt,
    ListCmpt,
    ContainerCmpt,
    TextCmpt,
    HtmlCodeCmpt,
} from "../primitive-cmpts/primitive-cmpts.mjs";


let bodyElmt = document.querySelector("body");

let dhirajWebsite = new LinkCmpt("dhirajWebsite", "Dhiraj", "https://google.com");
let abhishekWebsite = new LinkCmpt("abhishekWebsite", "Abhishek", "https://instagram.com");

let listItems = [
    dhirajWebsite,
    "suraj",
     "amit"
];

let webList = new ListCmpt("one", "ol", listItems, {id: "peoples"})

webList.hookeds["dhirajWebsite"] = abhishekWebsite;


let apple = new ParaCmpt("apple", "Apple")
apple.styles = `
    margin: 0px;
    padding: 0px;
    font-size: 4rem;
    font-family: monospace;
`
apple.addStyle("font-weight", "bold");
// let hello = ".__sysStyled {" + apple.styles + "}";
// console.log(hello)
let vegitables = new ListCmpt("vegiList", "ul", ["Tomato", "Onion", "Potato"]);
let fruits = new ListCmpt("fruitList", "ul", ["Orange", "Papaya", "Carrot"]);

let displayContainer = new ContainerCmpt("displayContainer", [apple, vegitables], {id:"second-display"});


let mango = new HtmlCodeCmpt("fruit", "<h1 id='mango'>MANGO</h1>");
mango.styles = `
    #mango {
        color: orange;
        font-family: cursive;
        font-size: 2rem;
    }
`
let mangoContainer = new ContainerCmpt("manogoCantainer", mango)

bodyElmt.insertAdjacentElement("afterbegin", mangoContainer.getHtmlElmt());
bodyElmt.insertAdjacentElement("afterbegin", displayContainer.getHtmlElmt());
displayContainer.hookeds["vegiList"] = fruits;
displayContainer.refresh();
bodyElmt.insertAdjacentElement("afterbegin", webList.getHtmlElmt());


