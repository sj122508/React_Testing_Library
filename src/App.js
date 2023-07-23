import './App.css';
// import {Application} from './components/Application/Application'
import { AppProviders } from './components/Providers/App-providers';
import Counter from './components/Counter/Counter';
import {MuiMode} from './components/MUI/MUI-Mode'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
    </div>
    </AppProviders>
    
  );
}

export default App;
