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
let vegitables = new ListCmpt("vegiList", "ul", ["Tomato", "Onion", "Potato"]);
let fruits = new ListCmpt("fruitList", "ul", ["Orange", "Papaya", "Carrot"]);

let displayContainer = new ContainerCmpt("displayContainer", [apple, vegitables], {id:"second-display"});


bodyElmt.insertAdjacentElement("afterbegin", displayContainer.getHtmlElmt());
displayContainer.hookeds["vegiList"] = fruits;
displayContainer.refresh();
bodyElmt.insertAdjacentElement("afterbegin", webList.getHtmlElmt());


