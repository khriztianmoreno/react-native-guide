import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

// Import the App container component
import Main from './Main'

// Pass the store into the Provider
const AppWithStore = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default AppWithStore
