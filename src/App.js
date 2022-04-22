import { Provider } from "react-redux";
import MainPage from "./components/MainPage/MainPage";
import Create from "./components/CreatePage/CreatePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {store} from "./store/store";


const App = () => {

  return (
    <div>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/main-page" element={<MainPage />} />
                <Route path="/create-page" element={<Create />} />
            </Routes>
        </BrowserRouter>
    </Provider>
    </div>
  );
};

export default App;
