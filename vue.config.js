const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
   resolve: {
     // 别名配置
     alias: {
       '@': path.join(__dirname, 'src'),
     }
   }
 },
 
  pluginOptions: {
   electronBuilder: {
     builderOptions: {
       // options placed here will be merged with default configuration and passed to electron-builder
       "appId": "this.is.tasky",
       "productName": "Tasky",
       "copyright": "Copyright © 2021 Alaso",
       "directories": {
         "buildResources": "build"
       },
       "mac": {
         "category": "public.app-category.utilities"
       },
       "dmg": {
         "background": "build/background.jfif",
         "icon": "build/icons/icon.icns",
         "iconSize": 100,
         "contents": [
           {
             "x": 380,
             "y": 180,
             "type": "link",
             "path": "/Applications"
           },
           {
             "x": 130,
             "y": 180,
             "type": "file"
           }
         ],
         "window": {
           "width": 540,
           "height": 380
         }
       },
       "win": {
         "target": [
           "msi",
           "nsis"
         ],
         "icon": "build/icons/icon.ico"
       },
       "nsis": {
         "oneClick": false,
         "language": "2052",
         "perMachine": true,
         "allowToChangeInstallationDirectory": true
       }
     }
   }
}
})
