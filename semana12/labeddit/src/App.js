import Router from './Router/Router'
import GloblaStateProvider from './Global/GloblaStateProvider'
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <GloblaStateProvider>
      <Router />
    </GloblaStateProvider>
  );
}

export default App;
