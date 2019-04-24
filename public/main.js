const electron = require('electron');

// Module to control application life. 
const app = electron.app;

// Module to create native browser window. 
const BrowserWindow = electron.BrowserWindow;

// declare what environment our app is working
const env = process.env.ENV;

// Keep a global reference of the window object,  
// if you don't, the window will be closed automatically 
// when the JavaScript object is garbage collected. 
var mainWindow = null;

// Quit when all windows are closed. 
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their 
    // menu barto stay active until the user quits  
    // explicitly with Cmd + Q 
    if (process.platform != 'darwin') 
    {
        app.quit();
    }
});

// This method will be called when Electron has finished 
// initialization and is ready to create browser windows. 
app.on('ready', function () {
    // Create the browser 
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app. 
    const url = env == 'development' ? process.env.ELECTRON_START_URL : __dirname + "/index.html";
    
    mainWindow.loadURL(url);

    if (env == 'development') {
        // Open the DevTools. 
        mainWindow.webContents.openDevTools(); 
    }

    // Emitted when the window is closed. 
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you 
        // would store windows in an array if your 
        // app supports multi windows, this is the time 
        // when you should delete the corresponding element. 
        mainWindow = null;
    });
});