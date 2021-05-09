import Router from './Router/Router'
import GloblaStateProvider from './Global/GloblaStateProvider'
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GloblaStateProvider>
        <Header />
        <Router />
      </GloblaStateProvider>
    </BrowserRouter>
  );
}

export default App;
