var waypoint = new Waypoint({
	element: document.getElementById("head1"),
	handler: function () {
		notify("Basic waypoint triggered");
	},
});
