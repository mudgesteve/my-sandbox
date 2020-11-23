import './App.css';

function App() {
  const myCss = `.App {
    text-align: center;
  }
  
  .container-fluid {
    margin: 0;
  
  }
  #header {
    background-color: #498cac;
    min-height: 50px;
  }
  
  #main-wrapper {
    margin: 10px auto;
    min-height: 500px;
    width: 90%;
    border: 1px solid black;
    background-color: lightgray;
  }
  
  #main {
    margin: 10px auto 10px auto;
    padding: 0px;
    background-color: lightslategray;
  }
  
  #leftSideBar {
    width: 50px;
    border: 1px solid red;
    background-color: lightgreen;
  }
  
  #content {
    margin: 0px auto 0px auto;
    background-color: rgb(55, 95, 146);
  }
  
  #rightSideBar {
    width: 10%;
    background-color: lightgreen;
  }
  
  #footer {
    min-height: 50px;
    background-color: darkgray;
  }
  
  .section {
    margin: 5px 5px;
    border: 2px dashed darkgoldenrod;
    background-color: darkgray;
  }
  
  .myRow {
    background-color: lightblue;
  }`

  return (
    <div className="Steve using Amplify">

      <nav>
        <navBar id="navBar" class="row justify-content-between align-items-center myRow">
          <div className="col-sm-2 btn btn-primary">1</div>
          <div className="col-sm-2 btn btn-info">2</div>
          <div className="col-sm-2 btn btn-warning">3</div>
          <div className="col-sm-2 btn btn-info">4</div>
          <div className="col-sm-2 btn btn-primary">5</div>
        </navBar>
      </nav>

      <header id="header" className="row App-header justify-content-center align-items-center">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            Header  
          </div>
        </div>
      </header>   

      <main id="main-wrapper" className="container-fluid">
        container with three columns
        <div id="main" className="row justify-content-between align-items-center">
          <div id="leftSideBar" className="col-sm-2">leftSideBar</div>
          <div id="content" className="row col-sm-8 container justify-content-center align-items-center">
              <div id="section-head" className="col-sm-12">
                Main
              </div>
              <code id="section1" className="col-sm-12 section">
                ${myCss}
              </code>
              <div id="section2" className="col-sm-12 section">
                Section 2
              </div>
              <div id="section3" className="col-sm-12 section">
                Section 3
              </div>
          </div>
          <div id="rightSideBar" className="col-sm-2">rightSideBar</div>
        </div>
      </main>

      <footer>
        <div id="footer" className="row justify-content-center align-items-center">Hmm..</div>
      </footer>
      <div>
        my Auth
      </div>
    </div>
  );
}

export default App;
