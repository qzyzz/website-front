import BlogRouter from '@/router/index'
import routers from '@/router/routers'
import '@/assets/style/global.less'

function App() {
  return (
    < BlogRouter routers={routers} />
  )
}

export default App
