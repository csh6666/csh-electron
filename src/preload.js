const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('EventHandle', {
   miniSize: () => ipcRenderer.invoke('miniSize'),
   resize: () => ipcRenderer.invoke('resize'),
   close: () => ipcRenderer.invoke('close'),
   
})