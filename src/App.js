import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Addpost from './component/Addpost';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './component/Search';
import Viewall from './component/Viewall';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Addpost/>}/>
          <Route path='/search'exact element={<Search/>}/>
          <Route path='/view'exact element={<Viewall/>}/>
        </Routes>                                                                                   
      </BrowserRouter>
    </>
  );
}

export default App;
