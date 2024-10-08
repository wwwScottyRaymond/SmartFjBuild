import React from "react";
import MainSection from "./smartFjMain";
import Header from "./smartFjHeader";
import './App.css';
import Footer from "./smartFjFooter";

function App() {
  return (
    <div className="container">
      <header>
      </header>
      <main className="cent">
        <Header />
        <MainSection />
        
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
