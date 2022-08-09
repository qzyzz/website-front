import { createContext, useContext } from 'react'
import settingsStore from './settings.js'

const stores = {
    settingsStore
}

const storesContext = createContext(stores)
export const useStore=()=>useContext(storesContext)