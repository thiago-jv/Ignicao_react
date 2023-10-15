import './App.css';
import Header from '../Header';
import Button from '../Shared/Button';
import Container from '../Container';

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      
      <Container>
       <Button onClick={() =>window.alert('UIIU')}>
         Alert
        </Button>
      </Container>
      
    </div>
  );
}

export default App;
