import React from 'react';
import './App.css';
// import Greeting from './components/LoadPage/Greeting';
// import NavBar from './components/LoadPage/NavBar'
// better way to import img into code
import homeImg from './img/homeLogo.png';
import NavBar from './components/LoadPage/NavBar';

const sectionContent = [
  {
    title:'About',
    text:'Something about me'
  },
  {
    title:'Values',
    text:'Something about my values'
  },
  {
    title:'Projects',
    text:'Some of my projects'
  },
  {
    title:'Contacts',
    text:'Here are my contacts'
  }
]

function Header() {
  return(
    <header>
      <img src={homeImg} alt=''></img>
    </header>
  )
}

// props passing values to be displayed
function Sections(props) {
  return(
    <li>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </li>
  )
}

function App() {
  const clickHandler = (selectedButton) => {
    console.log(selectedButton);
  }
  return (
    <div className="appBody">
        <Header />
        {/* <Greeting /> */}
        <main>
          <section>
            {/* <NavBar /> */}
            <ul>
              {/* destructuring and accessing object with spread operator*/}
              <Sections {...sectionContent[0]} />
              <Sections {...sectionContent[1]} />
              <Sections {...sectionContent[2]} />
              <Sections {...sectionContent[3]} />
            </ul>
          </section>
          <section>
            <menu>
              {/* arrow function helps to make clickHandler customizable when it has to be executed*/}
              <NavBar buttonClicked={() => clickHandler('about')}>About</NavBar>
              <NavBar buttonClicked={() => clickHandler('values')}>Values</NavBar>
              <NavBar buttonClicked={() => clickHandler('projects')}>Projects</NavBar>
              <NavBar buttonClicked={() => clickHandler('contacts')}>Contacts</NavBar>
            </menu>
          </section>
        </main>
    </div>
  );
}

export default App;

