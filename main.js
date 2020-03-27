function generateURL(){
    console.log("1");
    let linkurl = document.getElementById("linkurl").value;
    let source = document.getElementById("source").value;
    let campaign = document.getElementById("campaign").value;
    let medium = document.getElementById("medium").value;
    let content = document.getElementById("content").value;
    let term = document.getElementById("term").value;
    let org = document.getElementById("org").value;
    let co = document.getElementById("co").value;
    
    if(!linkurl || (typeof linkurl === 'undefined') || linkurl.length == 0){
        document.getElementById("websiterequired").classList.remove("hidden");
        return;
    }
    
    let _url = linkurl + "?" + "utm_source=" + source;
    _url += "&utm_campaign=" + campaign;
    _url += "&utm_medium=" + medium;
    _url += "&utm_content=" + content;
    _url += "&utm_term=" + term;
    _url += "&utm_org=" + org;
    _url += "&Co=" + co;
    
    
    let _generatedurl = document.getElementById("generatedurl");
 
    _generatedurl.value = _url;    
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
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
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
 }