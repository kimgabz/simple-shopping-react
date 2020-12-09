import React from 'react'; 
import store from "./reducers/store";
import { Provider } from "react-redux";
import HomeScreen from "./pages/home.screen";
import AdminScreen from "./pages/admin.screen";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link href="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/admin" component={AdminScreen} />
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
