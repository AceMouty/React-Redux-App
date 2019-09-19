import React from 'react';
import './App.css';
// Components
import Search from './components/Serach';
import AmiiboList from './components/AmiiboList';

function App() {
  return (
    <div className="App">
			<header>
				<div className="headerContent">
					<h1>Hello Amiibo!</h1>
					<Search/>
				</div>
			</header>
			<section className="amiibo-container">
				<AmiiboList />
			</section>
    </div>
  );
}

export default App;
