import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About />

        <Portfolio />

        <Resume />

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
