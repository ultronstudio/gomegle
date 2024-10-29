import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [termsChecked, setTermsChecked] = useState(false);
  return (
    <>
      <Header />
      <main className="content">
        <div className='go-chat'>
          <div className="termsbox">
            <input type="checkbox" id="go-chat" name="go-chat" onChange={() => setTermsChecked(!termsChecked)} />
            <label htmlFor="go-chat">
              Súhlasim s podmienkami
            </label>
          </div>
          <a className={"go-chat-btn" + (termsChecked ? '' : ' disabled')} href="/chat">Ísť chatovať</a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
