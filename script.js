function MenuDrop(){
    var x = document.getElementById("DropDownClick");
    if (x.className === "TopNav"){
        x.className += " responsive";
            /*## change topnav to topnav.responsive ##*/
        } else{
            x.className = "TopNav";
        }
    }
 