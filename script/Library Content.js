//This Javscript file modifies the library, adding in the autocompletion to the search bar, and the style for the dropdown grouping of nodes. 

//This script adds in the autocompletion feature for the text box: 
xmlDoc=loadXMLDoc("Project.xml");

x=xmlDoc.getElementsByTagName('node');

//This loops through the project to find nodes and writes them as div's with the attributes that were set by the user
for (i=0;i<x.length;i++)
{
	document.write('<div id="' & x[i].getAttribute('UID') & '" class=".node.' & x[i].getAttribute('type') & '></div<');
}
