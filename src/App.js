import './App.css';
import { Toaster } from 'react-hot-toast'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <Toaster 
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize: '0.9rem',
          }
        }}
      />
    </div>
  );
}

export default App;
