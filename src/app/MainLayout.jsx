import { mainStore, store,Provider,PersistGate } from './clientExports'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={mainStore}>
          {children}
        </PersistGate>
      </Provider>
    </div>
  )
}

export default MainLayout