import { BrowserRouter } from 'react-router-dom';
import  AppRouter  from "./app.router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
