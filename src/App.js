import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import MenuLeft from "./component/MenuLeft";
import Footer from "./component/Footer";
import { useLocation } from "react-router-dom";

function App(props) {
  const location = useLocation();
  const { pathname } = location;
  const hideComponents = pathname === "/login" || pathname === "/register";

  return (
    <div className="wrapper">
      {!hideComponents && <MenuLeft />}
      <div className="main">
        {!hideComponents && <Header />}
        <main className="content">
          <div className="container-fluid p-0">{props.children}</div>
        </main>
        {!hideComponents && <Footer />}
      </div>
    </div>
  );
}

export default App;
