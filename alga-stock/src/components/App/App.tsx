import './App.css';
import Header from '../Header';
import Button from '../Shared/Button';
import Container from '../Container';
import Input from '../Shared/Input';

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      
      <Container>
       <Button onClick={() =>window.alert('UIIU')}>
         Alert
        </Button>
        <Input label='Rua'/>
      </Container>
      
    </div>
  );
}

export default App;
