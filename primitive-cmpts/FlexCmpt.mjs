// !!! WARNING !!! DONT USE THIS CLASS, THIS IS UNDER CONSTRUCTION
import { Cmpt } from "./Cmpt.mjs";

let parser = DOMParser();

export class PseudoCmpt extends Cmpt{
    constructor(name, htmlCode, markers){
        super(name, "pseudo", null, null, null, null);
        this.htmlCode = htmlCode;
        this.markers = markers;
    }

    getHtmlElmt(){return null;}
    getHtmlCode(){return this.htmlCode;}
    getHtmlCodeWithStyle(){return null;}
}