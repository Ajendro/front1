import { HashRouter } from 'react-router-dom';
import Rutes from "./rutes";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Rutes />
      </HashRouter>
    </div>

    
  );
}