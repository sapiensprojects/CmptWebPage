import { Cmpt } from "./Cmpt.mjs";

export class TextCmpt extends Cmpt{
    constructor(text, parentAttributes={}){
        super("default", "text", null, {}, {})
        this.text = text;
        this.isTextCmpt = true;
        this.isPseudoCmpt = true;
        this.parentAttributes = parentAttributes;
    }

    getHtmlCode(){return this.text;}
    getText(){return this.text;}
    
    getHtmlElmt(){return null;}
    getHtmlCodeWithStyle(){return null;}
}