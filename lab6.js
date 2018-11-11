window.onload = function()
{
    var searchbutton = document.querySelector("#getdef");
    
    searchbutton.addEventListener("click", function()
    {
        var srchtxt = document.querySelector("#txtbx").value;
        console.log(srchtxt);
        getDef(srchtxt);
    }
    ,false);
    
    function getDef(q)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
      };
      var querystring = "request.php?q=" + q;
      xhttp.open("GET", querystring , true);
      xhttp.send();
    }
}