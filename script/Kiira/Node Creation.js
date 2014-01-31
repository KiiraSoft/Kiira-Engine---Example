//check for a node and then write it's elements to the screen with it's styling aplied

//These variables calls insert XML's to the javascript so they can be used to read and write to them.
//---This javascript file writes to the Project.xml whenever a node is created and writes it's default information inside of it so it can be used later on.
//---The other XML, which is nodeTypes, is loaded up so that it can check which node is being sent to the Project.
var ProjectXML=loadXMLDoc("../Project.xml");
var nodeTypesXML=loadXMLDoc("../Node Types/nodeTypes.xml");
//This variable is created so that we can use a for loop to find the node inside the Node Types.xml that we're looking to create
var XMLlength = nodeTypesXML.getElementsByTagName("node").length;
//This is created as a placeholder for when the createNode function is called, it will assign itself to the node on the Project.xml that we're applying so it can assign attributes to the node. 
var currentNode;
var currentNode.position;

//this is the create node function. This will work to create a node when the user drags one from the library.
function createNode(nodeName)
{
	//This is a for loop that is ran through for how many nodes are in the Node Types.xml, so we can pinpoint which node is what we're looking for
	for (i = 0; i < XMLlength; i++)
	{
		//This is asking each node in the XML if it's name is the name of the node the user is trying to create. If so, it will be appended to the Project.xml
		if (nodeTypesXML.getAttribute('name') = nodeName)
		{
			//this creates the node on the Project.xml
			currentNode = ProjectXML.createElement("node");
			//These are the attributes for the node being created. 
			currentNode.setAttribute("name",nodeName);
			currentNode.setAttribute("type", noteTypesXML.getAttribute('value'));
			//The UID attribute is assigned to a randomly generated number. A node will be displayed from the Project.xml depending on it's Name, UID, position, and Styling attributes. 
			currentNode.setAttribute("UID", Math.random());
		};
	};
	
};
