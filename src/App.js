import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const info = "drilling";

  return (
    <div className="App">
      <Header/>
      <TaskList info={info} title="Random" subtitle="test22"/>
      <Footer/>
    </div>
  );
}

export default App;
