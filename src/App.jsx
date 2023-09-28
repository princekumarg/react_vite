import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Component,useState } from "react";
//import reactLogo from "./assets/react.svg";
import "./App.css";
//import Counter from "./Counter";
//import Stopwatch from "./Stopwatch";
//import KittyGallery from "./KittyGallery";
//import DemoCounter from "./DemoCounter";
//import { useEffect } from "react";
//import useLocalStorage from "./useLocalStorage";
//import Header from "./header";
//import FruitBasket from "./FruitBasket";
//import MemoEx from "./MemoEx";
//import PizzaToppings from "./PizzaToppings";
//import CounterReducer from "./CounterReducer";
/*class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
      return <this.props.FallbackComponent error={error} />;
    }
    return this.props.children;
  }
}*/

/*function FallbackComponent({ error }) {
  return (
    <div>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  );
}*/
/*function AppLevelFallbackComponent({ error }) {
  return (
    <div>
      <p>App level</p>
      <pre>{error.message}</pre>
    </div>
  );
}
function Breaker() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => {
      if (prev > 2) {
        throw new Error("Boom 💥");
      }
      return prev + 1;
    });
  }
  return <button onClick={handleClick}>{count}</button>;
}

function AnotherComponent() {
  return <h1>Component for displaying some other info</h1>;
}*/

function App() {
  return(
    //{/*<ErrorBoundary FallbackComponent={AppLevelFallbackComponent}>*/
    //{/*<div className="App">*/}
     //   {/*<ErrorBoundary FallbackComponent={FallbackComponent}>
       //   <Breaker />
        //</ErrorBoundary>
      //  <AnotherComponent />*/}
      //  {/*<CounterReducer />*/}
    //  {/*</div>*/}
    //  {/*</ErrorBoundary>*/}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
  /*const [username, setUsername] = useLocalStorage("username", "");
  const [showHeader, setShowHeader] = useState(false);

  console.log("%c App: render start", "color: hotpink");

  const [showCounter, setShowCounter] = useState(() => {
    console.log("%c App: useState", "color:coral");
    return false;
  });

  useEffect(() => {
    console.log("%c App: useEffect no deps called", "color:royalblue");

    return () => {
      console.log("%c App: useEffect no deps clean up", "color:darkred");
    };
  });
  useEffect(() => {
    console.log("%c App: useEffect empty deps called", "color:royalblue");

    return () => {
      console.log("%c App: useEffect empty deps clean up", "color:darkred");
    };
  }, []);
  useEffect(() => {
    console.log("%c App: useEffect with deps called", "color:royalblue");

    return () => {
      console.log("%c App: useEffect with deps clean up", "color:darkred");
    };
  }, [showCounter]);
  function submitForm(e) {
    e.preventDefault();
    setShowHeader((prev) => !prev);
  }*/
  /*const element = (
    <>
      {showHeader && <Header />}
      <main className="App">
        <label htmlFor="showCounter">Show Counter</label>
        <input type="checkbox" name="showCounter" id="showCounter" onChange={(e) => setShowCounter(e.target.checked)} />
        {/*{showCounter && <DemoCounter />}*/
        {/*<Counter />*/}
        {/*<Stopwatch />*/}
        {/*<KittyGallery />*/}
      {/*<KittyGallery />*/ }
        {/*<form action="" onSubmit={submitForm}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </fieldset>
          <button type="submit">Login</button>
        </form>*/}
        {/*<FruitBasket />*/}
        {/*<MemoEx />*/}
        {/*<PizzaToppings />*/}

      {/*</main>
      </>*/}
  /*);*/
  /*console.log("%c App: render end", "color: hotpink");
  return element;*/
/*}*/
function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">this is the footer</footer>
    </div>
  );
}

function Dashboard() {
  return <h1>this is dashboard</h1>;
}

function About() {
  return <h1>This is about</h1>;
}
function Home() {
  return <h1>This is home</h1>;
}
export default App;