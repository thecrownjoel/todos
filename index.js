const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
});