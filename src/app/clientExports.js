"use client"
import {
    mainStore,
    store
}
from '@/ReduxSystem/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export {
    mainStore ,
    store,
    Provider,
    PersistGate,
}