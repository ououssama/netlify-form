// import Contact from "./Contact";
// import "./App.css";

function App() {
  return (
    <form name='login' data-netlify='true'>
      <input type='hidden' name='form-name' value='login' />
      <input type='email' placeholder='Email' name='email' />
      <input type='password' placeholder='Password' name='password' />
      <button type='submit'>login</button>
    </form>
  );
}

export default App;
