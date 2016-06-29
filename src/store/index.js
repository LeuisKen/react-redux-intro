import configureStoreProd from './configureStore.prod'
import configureStoreDev from './configureStore.dev'

const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
