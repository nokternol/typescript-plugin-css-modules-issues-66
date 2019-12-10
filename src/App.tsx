import React from 'react';
import './App.css';
import styles from "./test.module.scss";


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className={styles.test}>
          TEST
        </p>        
      </header>
    </div>
  );
}

export default App;
