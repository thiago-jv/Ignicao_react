import './App.css';
import Header from '../Header';
import Container from '../Container';
import Table, { TableHeader } from '../Shared/Table';
import Products from '../Shared/Table/Table.mockdata';
import ProductForm from '../Products/ProductForm';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
      <Table
          headers={headers}
          data={Products}
        />
        <ProductForm/>
      </Container>
    </div>
  );
}

export default App;
