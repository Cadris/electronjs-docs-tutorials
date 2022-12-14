const { app, BrowserWindow } = require('electron');
const path = require('path');

// create a new browser window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // load the page in browser ui when it loads
    win.loadFile('index.html');

    // Open the DevTools.
    win.webContents.openDevTools()
};


// when the main app process is ready it fires ready event - on ready then resovle the promise 
// and create a window with the config. in the createWindow function. 
app.whenReady().then(() => {
    createWindow();

    // extra support for mac
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// extra support for mac automatic for `Windows` and `Linux`
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});