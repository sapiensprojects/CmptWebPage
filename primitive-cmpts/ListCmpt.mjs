import { Cmpt } from "./Cmpt.mjs";
import { setAttributesToHtmlElmt, setContentToHtmlElmt } from "./utilities.mjs";

export class ListCmpt extends Cmpt{
    constructor(name, listType="ul", listItems, attributes){
        let rootElmt = null;
        if (listType === "ol"){rootElmt = document.createElement("ol");}
        else if (listType === "ul") {rootElmt = document.createElement("ul")}
        else {rootElmt = document.createElement("ul");}

        let attachments = ListCmpt._setContent(listItems, rootElmt);
        super(name, "list", rootElmt, attachments, attributes);
    }

    static _setContent(listItems, listElmt){
        let attachments = {};
        if (listItems instanceof Array){
            for (let listItem of listItems){
                let listItemElmt = document.createElement("li");
                let newAttachments = setContentToHtmlElmt(listItem, listItemElmt);
                for (let newAttrKey in newAttachments){
                    attachments[newAttrKey] = newAttachments[newAttrKey];
                }
                listElmt.appendChild(listItemElmt);
            }
        }
        else if (listItems.isHtmlCodeCmpt){
            setAttributesToHtmlElmt(listItems.parentAttributes, listElmt)
            attachments[listItems.name] = [listElmt, listItems];
        }
        return attachments;
    }
}