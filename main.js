function generateURL(){
    let linkurl = document.getElementById("linkurl").value;
    let source = document.getElementById("source").value;
    let campaign = document.getElementById("campaign").value;
    let medium = document.getElementById("medium").value;
    let content = document.getElementById("content").value;
    let term = document.getElementById("term").value;
    
    if(!linkurl || (typeof linkurl === 'undefined') || linkurl.length == 0){
        document.getElementById("websiterequired").classList.remove("hidden");
        return;
    }
    
    let _url = linkurl + "?" + "utm_source=" + source;
    _url += "&utm_campaign=" + campaign;
    _url += "&utm_medium=" + medium;
    _url += "&utm_content=" + content;
    _url += "&utm_term=" + term;
    
    let _generatedurl = document.getElementById("generatedurl");
 
    _generatedurl.value = _url;    
}

function gotoURL(){
    window.location.href = document.getElementById("generatedurl").value;
}

function hideError(){
    document.getElementById("websiterequired").classList.add("hidden");
}