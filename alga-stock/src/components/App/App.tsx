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
      <ul>
          {
            ['Daniel', 'William', 'Thiago', 'Daniel'].map((name, index) => {
              return <li key={index}>
                { name }
              </li>
            })
          }
        </ul>
      </Container>
      
    </div>
  );
}

export default App;
