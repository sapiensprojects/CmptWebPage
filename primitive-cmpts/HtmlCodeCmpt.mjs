import { Cmpt } from "./Cmpt.mjs";

export class HtmlCodeCmpt extends Cmpt{
    constructor(name, htmlCode, parentAttributes={}){
        super(name, "htmlCode", null, {}, {});
        this.htmlCode = htmlCode
        this.isHtmlCodeCmpt = true;
        this.isPseudoCmpt = true;
        this.parentAttributes = parentAttributes;
    }

    getHtmlCode(){return this.htmlCode;}
    getHtmlElmt(){return null;}
    getHtmlCodeWithStyle(){return null;}
}