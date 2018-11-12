window.onload = function()
{
    var searchbutton = document.querySelector("#getdef");
    var getallbutton = document.querySelector("#getalldefs");
    
    
    searchbutton.addEventListener("click", function()
    {
        clearresult();
        var srchtxt = document.querySelector("#txtbx").value;
        getDef(srchtxt,"http");
    }
    ,false);
    
    
    getallbutton.addEventListener("click", function()
    {
        clearresult();
        var srchtxt = "&all=true";
        getDef(srchtxt,"xml");
    }
    ,false);
    
    
    function getDef(q,type)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (type == "http")
            {
                document.getElementById("result").innerHTML = this.responseText;
            }
            if (type == "xml")
            {
                var response = this.responseXML;
                var result = document.querySelector('#result');
                var entry = response.getElementsByTagName('definition');
                
                
                var list = document.createElement('ol');
                
                
                result.appendChild(list);
                for (var x = 0; x < entry.length; x++) {
                    
                    var heading = document.createTextNode(entry[x].attributes[0].textContent);
                    var authortext = "- " + entry[x].attributes[1].textContent;
                    var author = document.createTextNode(authortext);
                    var text = document.createTextNode(entry[x].textContent);
                    var definition = document.createElement('li');
                    
                    var heading3 = document.createElement('h3');
                    heading3.appendChild(heading);
                    definition.appendChild(heading3);
                    var npara = document.createElement('p');
                    npara.appendChild(text);
                    definition.appendChild(npara);
                    var authpara = document.createElement('p');
                    authpara.appendChild(author);
                    definition.appendChild(authpara);
                    list.appendChild(definition);
                    
                }
            }
        }
      };
      var querystring = "request.php?q=" + q;
      //console.log(querystring);
      xhttp.open("GET", querystring , true);
      xhttp.send();
    }
    
    function clearresult() {
        document.getElementById("result").innerHTML = "";
    }
}