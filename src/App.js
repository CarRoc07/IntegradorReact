
import './App.css';
import WatcherFooter from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Layout from './components/layout/Layout';
import Routes from './routes/Routes';

function App() {
  return (
    <Layout >
      <Navbar />
      <Routes />
      <WatcherFooter />
    </Layout>
  );
}

export default App;
