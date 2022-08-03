import { createContext, useContext } from 'react'
import testStore from './test.js'
import settingsStore from './settings.js'

const stores = {
    testStore,
    settingsStore
}

const storesContext = createContext(stores)
export const useStore=()=>useContext(storesContext)