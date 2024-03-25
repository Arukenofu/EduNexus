// This is the preload script for Electron.
// It runs in the renderer process before the page is loaded.
// --------------------------------------------

import { contextBridge } from 'electron'

process.once('loaded', () => {
  contextBridge.exposeInMainWorld('versions', process.env)
})
