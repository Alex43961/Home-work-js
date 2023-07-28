"use strict";


const {app, BrowserWindow} = require("electron"); 
app.on("ready", () => {
const win = new BrowserWindow({
    autoHideMenuBar : true,
    webPreferences: {
        "contextIsolation": false,
        "nodeIntegration": true
      },
});
win.on("ready-to-show", () => {
    win.show();
    win.webContents.openDevTools();
});
win.loadFile("index.html");
});