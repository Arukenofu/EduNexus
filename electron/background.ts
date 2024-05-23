import * as path from 'path'
import * as os from 'os'
import { app, BrowserWindow, session } from 'electron'
import singleInstance from './singleInstance'
import dynamicRenderer from './dynamicRenderer'
import titleBarActionsModule from './modules/titleBarActions'
import updaterModule from './modules/updater'
import macMenuModule from './modules/macMenu'
import {globalShortcut} from 'electron'


process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
const isProduction = process.env.NODE_ENV !== 'development'
const platform: 'darwin' | 'win32' | 'linux' = process.platform as any
const architucture: '64' | '32' = os.arch() === 'x64' ? '64' : '32'
const headerSize = 32
const modules = [titleBarActionsModule, macMenuModule, updaterModule]

function createWindow() {
  console.log('System info', { isProduction, platform, architucture })
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 100,
    minHeight: 600,
    minWidth: 1000,
    titleBarStyle: "hidden",
        titleBarOverlay: {
        color: '#0f0f0f',
        symbolColor: '#ffffff',
        height: 30,
    },
    autoHideMenuBar: true,
    icon: 'C:\\Users\\Admin\\Desktop\\public\\icon32x32.png',
    webPreferences: {
      devTools: !isProduction,
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'EduNexus'
  })

  if (singleInstance(app, mainWindow)) return

  !isProduction &&
    mainWindow.webContents.openDevTools({
      mode: 'bottom'
    })

  return mainWindow
}

app.whenReady().then(async () => {

  if (!isProduction) {
    try {
      await session.defaultSession.loadExtension(path.join(__dirname, '../..', '__extensions', 'vue-devtools'))
    } catch (err) {
      console.log('[Electron::loadExtensions] An error occurred: ', err)
    }
  }

  const mainWindow = createWindow()
  if (!mainWindow) return

  dynamicRenderer(mainWindow)

  console.log('-'.repeat(30) + '\n[+] Loading modules...')
  modules.forEach((module) => {
    try {
      module(mainWindow)
    } catch (err: any) {
      console.log('[!] Module error: ', err.message || err)
    }
  })

  console.log('[!] Loading modules: Done.' + '\r\n' + '-'.repeat(30))

  globalShortcut.register('Control+R', () => {
  });

  app.on('activate', function () {
    mainWindow.show()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
