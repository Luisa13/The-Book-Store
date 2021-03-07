import logo from './logo.svg';
import './App.sass';
import './App.css';
import 'bulma/css/bulma.css'
import BookStoreApp from './component/templates/BookStoreApp';


function App() {
  return (
    <div className="App">
      <div>
        <BookStoreApp/>
      </div>
    </div>
  );

}

export default App;
