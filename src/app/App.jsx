import "./App.scss";
import CounterDepr from "./components/counter-class-comp/Counter-class-comp";
import Counter from "./components/counter/Counter.tsx";
import Searchbar from "./components/searchbar/Searchbar.tsx";
import Tabs from "./components/tabs/Tabs.tsx";

function App() {
  let tabsList = ["All", "Documentory", "Comedy", "Horror", "Crime"];

  let list = tabsList.map((tab) => (tab = { title: tab, active: false }));
  list[0].active = true;

  return (
    <div className="App">
      <header className="App-header">
        <h1> Zolo Movies </h1>
      </header>
      <section>
        <Searchbar initialSearch=""></Searchbar>
        <Tabs tabsList={list}></Tabs>
        <div className="movieList">
          <Counter initialCount="3"></Counter>

          <CounterDepr initialCount="3"></CounterDepr>
        </div>
      </section>
    </div>
  );
}

export default App;
