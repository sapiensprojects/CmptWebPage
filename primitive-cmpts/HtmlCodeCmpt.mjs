import { Cmpt } from "./Cmpt.mjs";

export class HtmlCodeCmpt extends Cmpt{
    constructor(name, htmlCode, parentAttributes={}){
        super(name, "htmlCode", null, {}, {});
        this.htmlCode = htmlCode
        this.isHtmlCodeCmpt = true;
        this.isPseudoCmpt = true;
        this.parentAttributes = parentAttributes;
        this._styles = "";
    }
    //GETTERS
    get styles(){return this._styles;}

    // SETTERS

    // @overwriting.setter "styles"
    set styles(text){
        text = text.trim();
        this._styles = text;
    }

    // METHODS
    appendStyles(text){
        text = text.trim();
        this._styles += "\n" + text;
    }

    getHtmlCode(styles=true){
        let code = this.htmlCode
        if ((styles) && (this._styles !== "")){
            code = code + "\n" + `<style class='__sysStyled${this.cmptId}'>` + "\n" + this._styles + "\n" + "</style>\n";
        }
        return code;
    }


    // DISABLING PARENT METHODS
    addStyle(property, value){return null;}
    getHtmlElmt(){return null;}
    refresh(styles=false){return null;}
    addAttachment(attachmentName, hook, hooked){return null;}
    getAttachment(attachmentName, hook=true){return null;}
    removeAttachment(attachmentName){return null;}
    cloneCmpt(name=null, deep=true){return null;}
}