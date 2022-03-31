import './App.css';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';

function App() {
  return (
    <div className="card flex flex-col rounded-md gap-6">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default App;
