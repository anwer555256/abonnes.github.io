let submit = () => {
    var C=document.getElementById("CIN")
    var p=document.getElementById("port")
    var id1=document.getElementById("id").value
    var Prenom=document.getElementById("name").value
    var nom=document.getElementById("surname").value
    var tele1=document.getElementById("tele").value
    var t=["21","22","51","53","55","97","98"]
    var pass=true
    if(C.checked==true){
        if(id1.length!=8 || isNaN(id1)==true){
        document.getElementById("p_id").innerHTML= "| The entered CIN's ID is incorrect !"
        document.getElementById("p_id").style.color = "rgb(252, 68, 68)"
        pass=false
        }
        else{
            document.getElementById("p_id").innerHTML= "| correct"
            document.getElementById("p_id").style.color = "green"
            var iq=document.getElementById("id")
            localStorage.setItem("id", iq.value )
        }
    }
    
    if(p.checked==true){
        var test=true
        var a=id1.toString()
        for (i=0; i < a.length ; i++){
            if (isCharacterALetter(a[i])==false) {
                test=false
            }
        }
        if ( a.length!=6  || test==false) {
            document.getElementById("p_id").innerHTML= "| The entered passport's ID is incorrect !  "
            document.getElementById("p_id").style.color = "rgb(252, 68, 68)"
            pass=false
        }
        else{
            document.getElementById("p_id").innerHTML= "| correct"
            document.getElementById("p_id").style.color = "green"
            var iq=document.getElementById("id")
            localStorage.setItem("id", iq.value )
        }
    }
    var test2=true
    var b=Prenom.toString()
    for (i=0; i < b.length ; i++){
        if(isCharacterALetter(b[i])==false){
                test2=false
        }
    }
    if ( b.length<3  || test2==false) {
        document.getElementById("p_prenom").innerHTML= "| The entered surname is incorrect !  "
        document.getElementById("p_prenom").style.color = "rgb(252, 68, 68)"
        pass=false
    }
    else{
        document.getElementById("p_prenom").innerHTML= "| correct"
        document.getElementById("p_prenom").style.color = "green"
        var iq1=document.getElementById("name")
            localStorage.setItem("name", iq1.value )
    }
    var test3=true
    var c=nom.toString()
    for (i=0; i < c.length ; i++){
        if(isCharacterALetter(c[i])==false){
                test3=false
        }
    }
    if ( c.length<3  || test3==false) {
        document.getElementById("p_nom").innerHTML= "| The entered name is incorrect !  "
        document.getElementById("p_nom").style.color = "rgb(252, 68, 68)"
        pass=false
        
    } else{
        document.getElementById("p_nom").innerHTML= "| correct"
        document.getElementById("p_nom").style.color = "green"
        var iq2=document.getElementById("surname")
            localStorage.setItem("surname", iq2.value )
        }
    var test4=false
    var d=tele1.toString()
    if ( isNaN(tele1)==false) {
        for (i=0; i < 7 ; i++){
            if(d.slice(0,2)==t[i]){
                test4=true
            }
        }
    }  
    if (test4==true && d.length==8) {
        document.getElementById("p_tele").innerHTML= "| correct"
        document.getElementById("p_tele").style.color = "green"
        var iq3=document.getElementById("tele")
            localStorage.setItem("tele", iq3.value )
    } else{
        document.getElementById("p_tele").innerHTML= "| The entered number is incorrect !  "
        document.getElementById("p_tele").style.color = "rgb(252, 68, 68)"
        pass=false
        
    }
    if (pass==true){
        window.location.href="loading.html"
    }
    
    

} 

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }