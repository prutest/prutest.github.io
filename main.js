function generateURL(){
    clearRequiredClass("generatedurl");
    clearRequiredClass("linkurl");



    let linkurl = document.getElementById("linkurl").value;
    let source = document.getElementById("source").value;
    let campaign = document.getElementById("campaign").value;
    let medium = document.getElementById("medium").value;
    let content = document.getElementById("content").value;
    let term = document.getElementById("term").value;
    let org = document.getElementById("org").value;
    let co = document.getElementById("co").value;
    
    if(!linkurl || (typeof linkurl === 'undefined') || linkurl.length == 0){
        showAsRequired("linkurl");
        //document.getElementById("websiterequired").classList.remove("hidden");
        return;
    }
    
    let _url = linkurl + "?"
    if(source) { _url += "utm_source=" + source; }
    if(campaign) { _url += "&utm_campaign=" + campaign; }
    if(medium) { _url += "&utm_medium=" + medium; }
    if(content) { _url += "&utm_content=" + content; }
    if(term) { _url += "&utm_term=" + term; }
    if(org) { _url += "&utm_org=" + org; }
    if(co) { _url += "&Co=" + co; }

    if(_url.length === linkurl.length + 1){
        _url = _url.replace('?','');
    }
    
    
    let _generatedurl = document.getElementById("generatedurl");
 
    _generatedurl.value = _url;    

}

function disintegrateURL() {
    clearRequiredClass("generatedurl");
    try {
        let urlField = document.getElementById("generatedurl").value;
        const url = new URL(urlField);

        document.getElementById("linkurl").value= url.protocol + "//" + url.hostname;
        // document.getElementById("source").value = url.searchParams.get("utm_source");
        // document.getElementById("medium").value = url.searchParams.get("utm_medium");
        // document.getElementById("campaign").value = url.searchParams.get("utm_campaign");
        // document.getElementById("content").value = url.searchParams.get("utm_content");
        // document.getElementById("term").value = url.searchParams.get("utm_term");
        // document.getElementById("org").value = url.searchParams.get("utm_org");
        // document.getElementById("co").value = url.searchParams.get("Co");
        setElementValue(url, "source", "utm_source");
        setElementValue(url, "campaign", "utm_campaign");
        setElementValue(url, "medium", "utm_medium");
        setElementValue(url, "content", "utm_content");
        setElementValue(url, "term", "utm_term");
        setElementValue(url, "org", "utm_org");
        setElementValue(url, "co", "co");

        getCharCount();
    } catch(err) {
        console.log("Khatra!");
        showAsRequired("generatedurl");
    }   
}

function gotoURL(){
    window.location.href = document.getElementById("generatedurl").value;
}

function hideError(){
    document.getElementById("websiterequired").classList.add("hidden");
}

function getCharCount(){
    document.getElementById("charcount").innerText = document.getElementById("co").value.length;
}

function onLoadInit(){
    getCharCount();
}

function generateMasterkey() {
    let mstrky = genRandomStr(64);
    document.getElementById("co").value = mstrky;
    getCharCount(); 
}

function genRandomStr(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function clearForm(){
    var inputElements = document.getElementsByTagName('input');

    for (var i=0; i < inputElements.length; i++) {
        if (inputElements[i].type == 'text') {
            inputElements[i].value = '';
        }
    }

    getCharCount();

    clearRequiredClass("linkurl");
    clearRequiredClass("generatedurl");
    
 }

 function showAsRequired(elementId){
    document.getElementById(elementId).classList.add("required");
 }

 function clearRequiredClass(elementId){
    document.getElementById(elementId).classList.remove("required");
 }

 function setElementValue(url, elementId, paramName){
    url.searchParams.forEach(function(_paramValue, _paramName){
        if(paramName.toLowerCase() === _paramName.toLowerCase()){
            document.getElementById(elementId).value = _paramValue;
            return;
        }
    });
 }