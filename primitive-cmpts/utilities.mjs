export function setAttributesToHtmlElmt(attributes, elmt){
    for (let attrKey in attributes){
        elmt.setAttribute(attrKey, attributes[attrKey]);
    }
}

export function setContentToHtmlElmt(content, elmt){
    // content -> string, TextCmpt(pseudoCmpt), HtmlCodeCmpt(pseudoCmpt), Cmpt(trueCmpt)
    let attachments = {};
    if (typeof content === "string"){
        elmt.textContent = content;
    }
    else if (content.isTextCmpt){
        setAttributesToHtmlElmt(content.parentAttributes, elmt);
        elmt.textContent = content.text;
    }
    else if (content.isHtmlCodeCmpt){
        setAttributesToHtmlElmt(content.parentAttributes, elmt);
        attachments[content.cmptName] = [elmt, content];
    }
    else if (content.isCmpt){
        attachments[content.cmptName] = [elmt, content];
    }

    return attachments;
}