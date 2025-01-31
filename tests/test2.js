import {
    ParaCmpt,
    LinkCmpt,
    ListCmpt,
    ContainerCmpt,
    TextCmpt,
    HtmlCodeCmpt,
} from "../primitive-cmpts/primitive-cmpts.mjs";

let shubham = new ParaCmpt("shubham", "SHUBHAM");
let anup = new ParaCmpt("anup", "ANUP");
let dhiraj = new ParaCmpt("dhiraj", "DHIRAJ");
let abhishek = new ParaCmpt("abhishek", "ABHISHEK");
let prashant = new ParaCmpt("prashant", "PRASHANT");
let arun = new ParaCmpt("arun", "ARUN");


let people = new ContainerCmpt("people", [dhiraj, abhishek]);


people.prependContent(shubham, "dhiraj");
people.appendContent(anup, "abhishek");
people.insertContentBefore(prashant, "abhishek");
people.insertContentAfter(arun, "abhishek")

document.querySelector("body").insertAdjacentElement("afterbegin", people.getHtmlElmt());