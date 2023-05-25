import { app,ipcMain } from 'electron'
const eventRegister=function(win){
   ipcMain.handle('miniSize', async () => {
      win.minimize();
      return true
    })
    ipcMain.handle('resize', async () => {
      if(win.isMaximized()){
         win.unmaximize()
      }else{
         win.maximize();
      }
      return true
    })
    ipcMain.handle('close', async () => {
      app.exit();
      return true
    })
}
export default eventRegister