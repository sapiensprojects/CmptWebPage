import { Cmpt } from "./Cmpt.mjs";
import { setAttributesToHtmlElmt, setContentToHtmlElmt } from "./utilities.mjs";

export class ContainerCmpt extends Cmpt{
    constructor(name, contents, attributes={}){
        let rootElmt = document.createElement("div");
        let attachments = ContainerCmpt._setContents(contents, rootElmt);
        super(name, "container", rootElmt, attachments, attributes);
    }

    // METHODS
    prependContent(content){
        let hook = document.createElement("div");
        let attachment = setContentToHtmlElmt(content, hook);
        this.rootElmt.insertAdjacentElement("afterbegin", hook);
        let attachmentNames = Object.keys(attachment)
        if (attachmentNames.length > 0){
            this.addAttachment(
                attachmentNames[0],
                attachment[attachmentNames[0]][0],
                attachment[attachmentNames[0]][1]
            )
        }
    }

    insertContentBefore(content, attachmentName){
        let hook = document.createElement("div");
        let attachment = setContentToHtmlElmt(content, hook);
        let adjacentElmt = this._hooks[attachmentName];
        adjacentElmt.insertAdjacentElement("beforebegin", hook);
        let attachmentNames = Object.keys(attachment)
        if (attachmentNames.length > 0){
            this.addAttachment(
                attachmentNames[0],
                attachment[attachmentNames[0]][0],
                attachment[attachmentNames[0]][1]
            )
        }
    }

    insertContentAfter(content, attachmentName){
        let hook = document.createElement("div");
        let attachment = setContentToHtmlElmt(content, hook);
        let adjacentElmt = this._hooks[attachmentName];
        adjacentElmt.insertAdjacentElement("afterend", hook);
        let attachmentNames = Object.keys(attachment)
        if (attachmentNames.length > 0){
            this.addAttachment(
                attachmentNames[0],
                attachment[attachmentNames[0]][0],
                attachment[attachmentNames[0]][1]
            )
        }
    }
    appendContent(content){
        let hook = document.createElement("div");
        let attachment = setContentToHtmlElmt(content, hook);
        this.rootElmt.insertAdjacentElement("beforeend", hook);
        let attachmentNames = Object.keys(attachment)
        if (attachmentNames.length > 0){
            this.addAttachment(
                attachmentNames[0],
                attachment[attachmentNames[0]][0],
                attachment[attachmentNames[0]][1]
            )
        }
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