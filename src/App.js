/** @format */

import logo from './logo.svg';
import './App.css';
import Category from './Category';
import Email from './Email';
import GlobalContext from './GlobalContext';

function App() {
  return (
    <>
      <GlobalContext>
        <Category />
        <Email />
      </GlobalContext>
    </>
  );
}

export default App;
