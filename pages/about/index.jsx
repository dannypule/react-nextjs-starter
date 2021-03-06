import withRedux from 'next-redux-wrapper'
import Layout from '../../components/Layout/Layout'
import About from '../../components/About/About'
import store from '../../store/store'
import '../../styles/styles.scss'

export default withRedux(store)(() => (
  <Layout>
    <About />
  </Layout>
))
