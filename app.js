function clk(){
    var p = document.createElement('P')
    // var txt = "hafeez123"
    var inp = document.getElementById('inp')
    var txt = inp.value 
    var txtnode = document.createTextNode(txt)
    p.appendChild(txtnode)
let div = document.getElementById('parent')
div.appendChild(p)

let btn = document.createElement("BUTTON")  
var btnname = "Delect"
var btnnode = document.createTextNode(btnname)
btn.appendChild(btnnode)
div.appendChild(btn)

let btn1 = document.createElement("BUTTON")  
var btnnam = "Edit"
var btnnodee = document.createTextNode(btnnam)
btn1.appendChild(btnnodee)
div.appendChild(btn1)

}
