import { Cmpt } from "./Cmpt.mjs";
import { setContentToHtmlElmt } from "./utilities.mjs";

export class ContainerCmpt extends Cmpt{
    constructor(name, contents, attributes={}){
        let rootElmt = document.createElement("div");
        let attachments = ContainerCmpt._setContents(contents, rootElmt);
        super(name, "container", rootElmt, attachments, attributes);
    }


    static _setContents(contents, containerElmt){
        let attachments = {};
        if (contents instanceof Array){
            for (let content of contents){
                let contentElmt = document.createElement("div");
                let newAttachments = setContentToHtmlElmt(content, contentElmt);
                for (let newAttrKey in newAttachments){
                    attachments[newAttrKey] = newAttachments[newAttrKey];
                }
                containerElmt.appendChild(contentElmt);
            }
        }
        else if (contents.isHtmlCodeCmpt){
            setAttributesToHtmlElmt(contents.parentAttributes, containerElmt)
            attachments[contents.name] = [containerElmt, contents];
        }
        return attachments;
    }
}