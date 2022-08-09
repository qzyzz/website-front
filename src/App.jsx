import BlogRouter from '@/router/index'
import routers from '@/router/routers'
import 'antd/dist/antd.variable.min.css'

const App = () => {
  return (
    < BlogRouter routers={routers} />
  )
}

export default App
