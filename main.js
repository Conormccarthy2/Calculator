const { app, BrowserWindow } = require("electron");
const path = require("node:path");

async function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 720,
    useContentSize: true,
    resizable: false,
    show: false,
    backgroundColor: "#262626",
  });

  await win.loadFile(path.join(__dirname, "index.html"));

  const size = await win.webContents.executeJavaScript(`
    (() => {
      const box = document.getElementById("calculator").getBoundingClientRect();
      return {
        width: Math.ceil(box.width),
        height: Math.ceil(box.height)
      };
    })()
  `);

  win.setContentSize(size.width, size.height);
  win.center();
  win.show();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
