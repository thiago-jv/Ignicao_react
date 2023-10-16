import './App.css';
import Header from '../Header';
import Container from '../Container';
import Table from '../Table';

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
       <Table/>
      </Container>
      
    </div>
  );
}

export default App;
