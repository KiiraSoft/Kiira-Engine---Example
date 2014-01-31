The Kiira Engine is designed to be a VVVV look alike with a similar concept, but hopefully more usable features that are simply put together for the creators of nodes and the people who use them, while also creating a convenient tool for porting to every leading language. It works by using the power of XML to link all the languages together.

The way that it works is this:

The Index.html... 
	Well, we all know the Index.html. It's the container of the rest of a webpage, right? So, that's basically all this part does. It links to a couple things and that's about it. The linked items do the rest of the work for it.

XML Parser.js...
	The XML Parser.js contains a function that loads up XML files into the Engine. When loading each XML into the engine at different times, you can call the name of the function with the name of the XML inside perentheses. This allows you to easily access XML's and use them.

The Project.xml...
	The Project.xml tells what types of nodes are where, what their UIDS are, and what they're connected to. This is for easy loading and saving of projects in a fast and easy manner.

The nodeTypes.xml...
	this is what contains the different node types. When someone pushes a node into the system, and javascript library will write to this and add a new node tag inside of it, therefore pushing it into the node library for the user.

The node UID's...
	This is not only for absolute positioning of the node, but also for the way the node displays on the page. The engine works through a sequence going from the first node to the last one to write to the document, so the node's UID is important to know where it's code goes. Don't alter these, they will be automatically assigned whenever the node is applied to the project.

The node Styling...
	This allows the node to be linked to a style sheet, which can alter their default appearance. This allows people to customize what each individual node looks like in a simple manner.

The node types...
	Each node type has a different way of displaying and functioning inside the layout. The point of this is not only to keep organization in tact, but some nodes contain different ways the can be used while being clicked.
	Here are the different kinds of nodes:
	1. Builder
		The builder types are used to contain engines and editors within the project itself. Say, Three.js, we implement that by putting it in as a builder node, and whatever coded result we return, be it a scene, will be implemented inside of the game. These things also have inputs that can be put in for exact positioning of objects. Say, if you want to put 3D models in there, you just click and drag. The ThreeJS project, including those models (or whatever else you include) will be written within the project folder as a scene, or game.

	2. Math
		Well, it's pretty self explanatory isn't it? Add, subtract, devide, and the like. It's the container of nodes that calculate things, though it might be useful for people to modify these when times come that complicated calculations will need to be repeated.

	3. Value
		The value nodes are in their simplest forms, variables, booleans, objects, etc. The first two are easy. A variable in programming can either be a string or an integer, though it is common practice to use those as the statements for them. In this, it's just a simple variable, though it may not be compatible with certain languages for that reason. Booleans are true and false statements, and are available in just about every language. Objects actually have folders assigned to them that contain different codes for what they are. i.e. a 3D cube object, or a sprite. Those objects could be added to a Builder by linking.

	4. Vector
		Vectors are basically grouped values that end up equaling up to another value. Well, essiantually, though they were mainly made just to add in options that wouldn't be previously add in the math and value containers of nodes, to allow people more flexibility. Vectors are often used in physics.

The Documentation...
	Each node has a different way of acting on the project, and in this section, we will be covering what they are and how they affect the project.

