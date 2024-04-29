
import './App.css';
import Navbar from './Components/Navbar';
import Part1 from './Components/Part1';
import Part2 from './Components/Part2';
import Part3 from './Components/Part3';
import Part4 from './Components/Part4';
import Part5Footer from './Components/Part5Footer';
function App() {
  return (
    <div className='w-full overflow-hidden' >
    <Navbar></Navbar>
    <Part1></Part1>
    <Part2></Part2>
    <Part3></Part3>
    <Part4></Part4>
    <Part5Footer></Part5Footer>
    </div>
  );
}

export default App;
