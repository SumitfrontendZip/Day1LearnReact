import Dogcard from '../Dogcard';
import './App.css';
import Counter from './Counter';
import Nav from './Nav';
function App() {

  return (
    <>
      <Nav/>
      <Counter/>
      <Dogcard src="https://t3.ftcdn.net/jpg/06/10/71/64/360_F_610716498_li6BIgt75TXw8B4W89pbf3VtKgHNQkXo.jpg"/>
    </>
  );
}

export default App;
