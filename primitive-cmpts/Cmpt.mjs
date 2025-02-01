import { setAttributesToHtmlElmt } from "./utilities.mjs";

export class Cmpt{
    static count = 0;
    constructor(cmptName, cmptType, rootElmt=null, attachments={}, attributes={}, configs={}){
        Cmpt.count += 1;
        this._isCmpt = true;
        
        this._cmptName = cmptName;
        this._cmptId = this._getUniqueCmptId();
        this._cmptType = cmptType;
        
        this._rawRootElmt = rootElmt;
        this._rootElmt = rootElmt;
        this._attributes = attributes;
        this._hooks = {};
        this.hookeds = {};
        this._styles = "";

        this._configs = configs;

        // Returing psuedoCmpts
        // if ((this._cmptType === "text") || (this._cmptType === "htmlCode")){return}
        if (this._rootElmt === null){return} // Pseudo Cmpt(component)
        

        // Setting component id as class in classList attribute
        if (this._attributes['class'] === undefined){
            this._attributes['class'] = [this._cmptId];
        } else {
            this._attributes['class'].push(this._cmptId);
        }

    
        if (attributes) {this._update_rootElmtAttributes();}
        if (attachments) {this._resolveAttachments(attachments);}
    }


    get isCmpt(){return this._isCmpt;}
    get cmptName(){return this._cmptName}
    get cmptType(){return this._cmptType;}
    get cmptId(){return this._cmptId;}
    get rootElmt(){return this._rootElmt;}
    get attributes(){return this._attributes;}


    set styles(text){
        text = text.trim();
        if (!(text.endsWith(";"))){text += ";"}
        this._styles = text;
    }


    addAttachment(attachmentName, hook, hooked){
        this._hooks[attachmentName] = hook;
        this.hookeds[attachmentName] = hooked;
    }

    getAttachment(attachmentName, hook=true){
        if (hook){
            return [this._hooks[attchmentName], this.hookeds[attachmentName]];
        }
        else {
            return this.hookeds[attachmentName];
        }
    }

    removeAttachment(attachmentName){
        delete this._hooks[attachmentName];
        delete this.hookeds[attachmentName];
    }


    refresh(styles=true){
        for (let attachmentName in this.hookeds){
            if (this.hookeds[attachmentName].isHtmlCodeCmpt){
                this._hooks[attachmentName].innerHTML = this.hookeds[attachmentName].getHtmlCode(true);
            }
            else{
                this._hooks[attachmentName].innerHTML = "";
                this._hooks[attachmentName].appendChild(this.hookeds[attachmentName].getHtmlElmt(true));
            }
        }


        // Adding styles
        if ((this._styles === "") || (!(styles))) {return}
        
        let styleElmt = this._rootElmt.querySelector(".__sysStyled"+this.cmptId);
        
        if (!(styleElmt)){
            styleElmt = document.createElement("style");
            styleElmt.classList += "__sysStyled+this.cmptId";
            this._rootElmt.appendChild(styleElmt);
        }

        let styleStr = "\n." + this._cmptId + " {\n" + this._styles + "\n}\n";
        styleElmt.innerHTML = styleStr;
    }

    refreshAttachment(attachmentName, refreshHooked=false){
        if (!(Object.keys(this.hookeds).includes(attachmentName))){ return true }
        if (refreshHooked){this.hookeds[attachmentName].refresh(true)}
        if (this.hookeds[attachmentName].isHtmlCodeCmpt){
            this._hooks[attachmentName].innerHTML = this.hookeds[attachmentName].getHtmlCode(true);
        }
        else{
            this._hooks[attachmentName].innerHTML = "";
            this._hooks[attachmentName].appendChild(this.hookeds[attachmentName].getHtmlElmt(true));
        }
    }

    addStyle(property, value){
        this._styles += "\n" + property + ": " + String(value) + ";";
    }

    getHtmlElmt(styles=true){        
        this.refresh(styles);
        return this._rootElmt;
    }


    cloneCmpt(name=null, deep=true){
        console.log("[*] Feature is under construction...")
        return null;
        
        // Getting new component component type
        let cmptType = this._cmptType;

        // Getting new component root element
        let rootElmt = this._rawRootElmt.cloneNode(true);

        // Getting new component root element attributes
        let cmptAttributes = {...this._attributes}
        if (cmptAttributes.hasOwnProperty("id")){
            delete cmptAttributes['id'];
        }

        // Getting attachments
        let attachments = {}
        for (let attchmentName in this._hooks){
            attachments = [this._hooks[attchmentName], this.hookeds[attachments]]
        }


        // let newCmpt = new Cmpt(this._cmptName, this._cmptType, this._rawRootElmt.cloneNode(), {}, newCmptAttributes)
        // newCmpt._isCmpt = this._isCmpt
        
        // newCmpt._cmptName = this._cmptName
        // newCmpt._cmptId = this._getUniqueCmptId();
        // newCmpt._cmptType = this._cmptType
        
        // newCmpt._rootElmt = this._rootElmt.cloneNode();
        // newCmpt._attributes = this._attributes
        // newCmpt._hooks = {...this._hooks}
        // newCmpt.hookeds = {...this.hookeds}

        // newCmpt._configs = this._configs

        // newCmpts._attributes["class"].push(this._cmptId);
    }



    _getUniqueCmptId(){return `__cmptId${Cmpt.count}`;}

    _resolveAttachments(attachments){
        for (let attachmentName in attachments){
            this._hooks[attachmentName] = attachments[attachmentName][0];
            this.hookeds[attachmentName] = attachments[attachmentName][1];
        }
    }

    _update_rootElmtAttributes(){
        setAttributesToHtmlElmt(this._attributes, this._rootElmt);
    }

    // static addSysStylesInHtmlElmt(styles, htmlElmt){
    //     let styleElmt = htmlElmt.querySelector(".__sysStyled");
        
    //     if (!(styleElmt)){
    //         styleElmt = document.createElement("style");
    //         styleElmt.classList += "__sysStyled";
    //         htmlElmt.appendChild(styleElmt);
    //     }

    //     let styleStr = "\n." + this._cmptId + " {\n" + this._styles + "\n}\n";
    //     styleElmt.innerHTML = styleStr;
    // }
}