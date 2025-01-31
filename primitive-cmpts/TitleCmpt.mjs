import { Cmpt } from "./Cmpt.mjs";
import { setAttributesToHtmlElmt, setContentToHtmlElmt } from "./utilities.mjs";


export class TitleCmpt extends Cmpt{
    constructor(name, text){
        let titleElmt = document.createElement("title");
        titleElmt.textContent = text
        super(name, "title", titleElmt, {}, {}, {});
        this._text = text;
    }
    get text(){return this._text}

    set text(t){
        this._text = t;
        this._update_rootElmt();
    }

    _update_rootElmt(){
        this.rootElmt.textContent = this._text;
    }
}