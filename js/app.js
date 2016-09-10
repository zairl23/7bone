var myApp = new Framework7({
    pushState: true,
    swipePanel: 'left',
    // ... other parameters
	// http://framework7.io/docs/init-app.html
});

var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});
