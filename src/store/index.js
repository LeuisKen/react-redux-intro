import configureStoreProd from './configureStore.prod'
import configureStoreDev from './configureStore.dev'

var configureStore

if (process.env.NODE_ENV === 'production') {
  configureStore = configureStoreProd
} else {
  configureStore = configureStoreDev
}

export default configureStore
