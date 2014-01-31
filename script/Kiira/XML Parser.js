//This is the XML parser, which reads XML information depending on certain events. 
//---The XML file for Project.xml will be parsed through the engine in real time, assigning the position, user modified properties, and other things to each node while the use is editing. 
//---The nodeTypes.XML is pushed when another node is uploaded to the engine, and is loaded up inside of the engine whenever another element is detected. This is so that the users can get to those nodes in an instant.
//---The node's individual xml's will be loaded up every time they're added to a project, and will modify the user's set up depending on how the node works.
function loadXMLDoc(filename)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else // code for IE5 and IE6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
} 

