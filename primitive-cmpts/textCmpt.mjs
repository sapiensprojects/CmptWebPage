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
    

    // DISABLING PARENT METHODS
    addStyle(property, value){return null;}
    getHtmlElmt(){return null;}
    refresh(styles=false){return null;}
    addAttachment(attachmentName, hook, hooked){return null;}
    getAttachment(attachmentName, hook=true){return null;}
    removeAttachment(attachmentName){return null;}
    cloneCmpt(name=null, deep=true){return null;}
}