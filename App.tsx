import React from 'react'
import Navigator from './src/Navigator'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle={'light-content'} />
            <Navigator />
        </Provider>
    )
}

export default App