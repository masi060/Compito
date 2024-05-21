import logo from './logo.svg';
import './App.css';
import SingUp from './SingUp';
import { useState } from 'react';

async function App() {

  const [mostraSingUp, setMostraSingUp] = useState(false);
  const [mostraLogin, setMostraLogin] = useState(false);
  const [token, setToken] = useState();
  const [username , setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [info, setInfo] = useState();



  async function SingUp(){
    setMostraLogin(false);
    const response = await fetch("http://localhost:8080/signup",{
            method:"POST",
            body : JSON.stringify({username: username, 
                                   password: password, 
                                   email: email})
          }
  )};
  const json = await response.json();

  if(json.status == true){
    setInfo("Utente Registrato");
  }
  else{
    setInfo("Errore durante la Registrazione");
  }

  async function Login(){
    setMostraSingUp(false);
    const response = await fetch("http://localhost:8080/login",{
            method:"POST",
            body : JSON.stringify({username: username, 
                                   password: password})
          }
  )};

  return{
    
  };

}

export default App;
