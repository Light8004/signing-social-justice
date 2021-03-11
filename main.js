const electron = require('electron');
const url = require('url');
const path = require()
const {app, BrowserWindow} = electron; 

let mainWindow; 

//Listens for the app to be ready
app.on('ready', function(){

    mainWindow = new BrowserWindow({});

    //load html here
    main_window.loadRL(url.format({

        pathname: path.join(__dirname, "main_window.html"),
        protocol:'file',
        slashes: true

    })); 
}); 

