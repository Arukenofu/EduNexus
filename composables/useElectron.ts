export default function useElectron() {
  const isServer = process.server || typeof window === 'undefined' || typeof window.require === 'undefined'
  const isElectron = !isServer && navigator.userAgent.toLowerCase().includes('electron')

  if (!isElectron || isServer) return { isElectron }


  const electron = window.require('electron')

  const titleBarActions = {
    minimize: () => electron.ipcRenderer.invoke('titlebar:action', 'minimize'),
    toggleMaximize: () => electron.ipcRenderer.invoke('titlebar:action', 'toggleMaximize'),
    isMaximized: () => electron.ipcRenderer.invoke('isMaximized:app', null),
    close: () => electron.ipcRenderer.invoke('close:app', null)
  }

  const windowStats = ref({
    isMaximized: false,
    isFullscreen: false
  })

  electron.ipcRenderer.on('window:maximizeChanged', (_event, value) => {
    windowStats.value.isMaximized = value
  })
  electron.ipcRenderer.on('window:fullscreenChanged', (_event, value) => {
    windowStats.value.isFullscreen = value
  })

  return { isElectron, titleBarActions, windowStats }
}
