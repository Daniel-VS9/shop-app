import MainRouter from "./components/MainRouter";
import {Provider} from 'react-redux'
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </div>
  );
}

export default App;
