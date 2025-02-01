export function setAttributesToHtmlElmt(attributes, elmt){
    for (let attrKey in attributes){
        let attrValue = '';
        if (attributes[attrKey] instanceof Array){
            for (let value of attributes[attrKey]){
                attrValue += value + " ";
            }
        }
        else {attrValue = attributes[attrKey]}
        elmt.setAttribute(attrKey, attrValue);
    }
}

export function setContentToHtmlElmt(content, elmt){
    // content -> string, TextCmpt(pseudoCmpt), HtmlCodeCmpt(pseudoCmpt), Cmpt(trueCmpt)
    let attachments = {};
    if (typeof content === "string"){
        elmt.textContent = content;
    }
    else if (content.isTextCmpt){
        elmt.classList += content.getClassNameForHook();
        setAttributesToHtmlElmt(content.parentAttributes, elmt);
        elmt.textContent = content.text;
    }
    else if (content.isHtmlCodeCmpt){
        elmt.classList += content.getClassNameForHook();
        setAttributesToHtmlElmt(content.parentAttributes, elmt);
        attachments[content.cmptName] = [elmt, content];
    }
    else if (content.isCmpt){
        elmt.classList += content.getClassNameForHook();
        attachments[content.cmptName] = [elmt, content];
    }


    return attachments;
}