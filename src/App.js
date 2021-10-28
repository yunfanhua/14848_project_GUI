import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Which tool would you like to use?
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apache Hadoop
        </a>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Apache Spark
        </a>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Jupyter Notebook
        </a>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          SonarQube and SonarScanner
        </a>
      </header>
    </div>
  );
}

export default App;
