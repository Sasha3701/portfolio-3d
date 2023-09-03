import { Layout } from './layout';
import { Contacts, Experience, Preview, Skills } from './components/view';

const App = () => (
  <Layout>
    <Preview />
    <Skills />
    <Experience />
    <Contacts />
  </Layout>
);

export default App;
