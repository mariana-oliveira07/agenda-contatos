import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <ContactList />
      <ContactForm />
    </div>
  );
}

export default App;
