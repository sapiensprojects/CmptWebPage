import {Cmpt} from "./Cmpt.mjs"
import { setContentToHtmlElmt } from "./utilities.mjs";

export class LinkCmpt extends Cmpt{
    constructor(name, content, href, attributes={}){
        let rootElmt = document.createElement("a");
        if (href){attributes.href = href}
        let attachments = LinkCmpt._setContent(content, rootElmt);
        super(name, "link", rootElmt, attachments, attributes);
    }

    static _setContent(content, linkElmt){
        return setContentToHtmlElmt(content, linkElmt);
    }
}