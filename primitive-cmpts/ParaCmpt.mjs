import {Cmpt} from "./Cmpt.mjs";
import { setContentToHtmlElmt } from "./utilities.mjs";

export class ParaCmpt extends Cmpt{
    constructor(name, content, attributes){
        let paraElmt = document.createElement("p");
        let attachments = ParaCmpt._setContent(content, paraElmt);
        super(name, "paragraph", paraElmt, attachments, attributes);
    }

    static _setContent(content, paraElmt){
        return setContentToHtmlElmt(content, paraElmt);
    }
}
