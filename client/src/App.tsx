import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './router';

function App() {
  return (
    <div className={"app"}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;