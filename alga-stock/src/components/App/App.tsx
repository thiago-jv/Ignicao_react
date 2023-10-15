import './App.css';
import Header from '../Header';
import Button from '../Button';

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      
      <div className='Container'>
       <Button onClick={() =>window.alert('UIIU')}>
        Alert
        </Button>
      </div>
    
    </div>
  );
}

export default App;
