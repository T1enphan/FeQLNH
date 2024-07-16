import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import MenuLeft from "./component/MenuLeft";
import Footer from "./component/Footer";
function App(props) {
  return (
    <div className="wrapper">
      <MenuLeft />
      <div className="main">
        <Header />
        <main className="content">
          <div className="container-fluid p-0">{props.children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
