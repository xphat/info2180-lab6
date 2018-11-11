window.onload = function()
{
    var searchbutton = document.querySelector("#getdef");
    
    searchbutton.addEventListener("click", function()
    {
        getDef("definition");
    }
    ,false);
    
    function getDef(q)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
      };
      var querystring = "request.php?q=" + q;
      xhttp.open("GET", querystring , true);
      xhttp.send();
    }
}