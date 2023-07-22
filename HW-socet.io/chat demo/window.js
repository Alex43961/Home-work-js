"use strict";

require("./server.js");

const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    icon: "./appIcon.jpg",
    show: false,
    autoHideMenuBar: true
  });

  win.on("ready-to-show", () => {
    win.show();
  });

  win.loadURL("http://localhost:8888/");
  // win.webContents.openDevTools();
};

app.on("ready", createWindow);
