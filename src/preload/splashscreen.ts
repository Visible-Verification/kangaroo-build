// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  onProgressUpdate: (callback) => ipcRenderer.on('loading-progress-update', callback),
  onNameAndVersion: (callback) => ipcRenderer.on('name-and-version', callback),
  lairSetupRequired: () => ipcRenderer.invoke('lair-setup-required'),
  launch: (password: string) => ipcRenderer.invoke('launch', password),
  getProfile: () => ipcRenderer.invoke('get-profile'),
  exit: () => ipcRenderer.invoke('exit'),
});
