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

    set styles(text){
        text = text.trim();
        // if (!(text.endsWith(";"))){text += ";"}
        this._styles = text;
    }

    addStyle(property, value){
        this._styles += "\n" + property + ": " + String(value) + ";";
    }

    getHtmlCode(){return this.htmlCode;}

    getHtmlCodeWithStyles(){
        let htmlCodeWithStyle = this.htmlCode + "\n" + "<style class='__sysStyled'>" + "\n" + this._styles + "\n" + "</style>\n";
        return htmlCodeWithStyle;
    }
    getHtmlElmt(){return null;}
    getHtmlCodeWithStyle(){return null;}
}