import {
    ParaCmpt,
    LinkCmpt,
    ListCmpt,
    ContainerCmpt,
    TextCmpt,
    HtmlCodeCmpt,
    TitleCmpt,
} from "../primitive-cmpts/primitive-cmpts.mjs";

let shubham = new ParaCmpt("shubham", "SHUBHAM");
let anup = new ParaCmpt("anup", "ANUP");
let dhiraj = new ParaCmpt("dhiraj", "DHIRAJ");
let abhishek = new ParaCmpt("abhishek", "ABHISHEK");
let prashant = new ParaCmpt("prashant", "PRASHANT");
let arun = new ParaCmpt("arun", "ARUN");
let rohit = new ParaCmpt("rohit", "ROHIT");

let people = new ContainerCmpt("people", [dhiraj, abhishek]);


people.prependContent(shubham);
people.appendContent(anup);
people.insertContentBefore(prashant, "abhishek");
people.insertContentAfter(arun, "abhishek")
people.insertContentAfter(rohit, "abhishek");


document.querySelector("body").insertAdjacentElement("afterbegin", people.getHtmlElmt());


function removeRohit(){
    people.removeContent("rohit");
    people.refresh();
}


let stateTitle = new TitleCmpt("stateTitle", "Dhiraj");


document.querySelector("head").appendChild(stateTitle.getHtmlElmt());
document.querySelector("button").addEventListener("click", removeRohit)

stateTitle.text = "Not Dhiraj"; // live update title of page, no need of refresh