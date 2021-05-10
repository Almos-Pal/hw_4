

function szamol()
{
    let cikeszInput = document.getElementById("arany");
    let kvaffInput = document.getElementById("kvaff");
    let cikesz = parseInt(cikeszInput.value);
    let kvaff = parseInt(kvaffInput.value);
    
    span = document.getElementById(span);
    document.getElementById("span").innerHTML = kvaff * 10 + cikesz * 150+ " pont";
    document.getElementById("span").innerHTML = cikesz * 150 + kvaff * 10+ " pont";
    if(kvaff < 0 ) {

        document.getElementById("span").innerHTML = cikesz * 150 + kvaff * 0 + " pont"; 
        kvaff = 0;
        kvaffInput.value = kvaff;
        window.alert("az érték nem lehet negatív");
        
    }
    if(cikesz < 0) {
        document.getElementById("span").innerHTML = cikesz * 0 + kvaff * 10 + " pont"; 
        cikesz = 0;
        cikeszInput.value = cikesz;
        window.alert("az érték nem lehet negatív");
    }
    if(cikesz > 1) {
        window.alert("csak egy aranycikeszt lehet elkapni!");
        cikesz = 1;
        cikeszInput.value = cikesz;
        document.getElementById("span").innerHTML = 150 + kvaff * 10+  " pont"
    }
}

