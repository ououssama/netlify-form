// import Contact from "./Contact";
// import "./App.css";

function App() {

  return (
    <form name='login' method="POST" data-netlify="true" onSubmit="submit">
      <input type='hidden' name='form-name' value='login' />
      <label htmlFor="email">Email :<input type='email' placeholder='Email' name='email' /></label>
      <label htmlFor="password">Password :<input type='password' placeholder='Password' name='password' /></label>
      <button type='submit'>login</button>
    </form>
  );
}

export default App;
