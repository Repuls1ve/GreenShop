import {FC} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import AppRouter from './router'
import {store} from './store/store'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
