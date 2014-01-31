//This javascript files adds more to the styling so the user can modify the layout of their Engine screen a little bit.


//This allows the user to be able to resize each object for editing their project
	$(function() {
		$( ".object" ).resizable({
			handles: "e,w,n,s,ne,nw,se,sw",
			minWidth: 128,
		});
	});


//This allows the user to be able to position them
	$(function() {
		$( ".object" ).draggable({snap:true});
	});


	$(function() {
		$( ".library" ).accordion({
			heightStyle: "fill",
			collapsible: true
		});
	});

