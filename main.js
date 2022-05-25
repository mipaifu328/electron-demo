/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2022-05-25 14:12:26
 * @LastEditors: mipaifu328
 * @LastEditTime: 2022-05-25 16:46:56
 */
const { app, BrowserWindow, ipcMain, Notification } = require("electron")

const handleIPC = () => {
  ipcMain.handle(
    "notification",
    async (e, { body, title, actions, closeButtonText }) => {
      let res = await new Promise((resolve, reject) => {
        let notification = new Notification({
          title,
          body,
          actions,
          closeButtonText,
        })
        notification.show()
        notification.on("action", function (event) {
          resolve({ event: "action" })
        })
        notification.on("close", function (event) {
          resolve({ event: "close" })
        })
      })
      return res
    }
  )
}
let win
const createMainWindow = () => {
  win = new BrowserWindow({
    width: 250,
    height: 350,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  win.loadFile("index.html")
  win.on("closed", () => {
    win = null
  })
}

app.whenReady().then(() => {
  handleIPC()
  createMainWindow()
})
