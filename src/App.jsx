import logo from './logo.svg';
import './App.css';
import LinkTo from './Image';

function ImageContainer() {
  return (
     <img
    src='https://avatars.mds.yandex.net/get-entity_search/2032283/791333379/orig'
    alt='Нячанг фото'
    width='340'
    height='150'
    />
  );
 }

//  function LinkToReact() {
//   return (
//     <div>
//   <img src={logo} alt='React logo'/>
//   <a  >
//   <div/>
//  );
// } 

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <section>
      <h1>My plan for life</h1>
      <ImageContainer />
      <ImageContainer />
      <ImageContainer />
      <LinkTo />
    </section>
   
    
    
   
  );
}

export default App;
