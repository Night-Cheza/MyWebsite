import React, {useState} from 'react';
import './App.css';
import Greeting from './components/LoadPage/Greeting';
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

const content = {
  about: {
    title:'About',
    text:'Something about me'
  },
  values: {
    title:'Values',
    text:'Something about my values'
  },
  projects: {
    title:'Projects',
    text:'Some of my projects'
  },
  contacts: {
    title:'Contacts',
    text:'Here are my contacts'
  }
}

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
  //first element 'selectedSection' is default value that is rendered the first time component is accessed/executed
  //second element 'setSelectedSection' is always a function that has to be executed for the componen to be re-evaluated
  const [selectedSection, setSelectedSection] = useState();
  const clickHandler = (selectedButton) => {
    // console.log(selectedButton);
    setSelectedSection(selectedButton);
  }
  return (
    <div className="appBody">
        <Header />
        {/* <Greeting /> */}
        <main>
          <section>
            {/* <NavBar /> */}
            <li>
              {/* destructuring and accessing object with spread operator
              <Sections {...sectionContent[0]} />
              <Sections {...sectionContent[1]} />
              <Sections {...sectionContent[2]} />
              <Sections {...sectionContent[3]} /> */}
              {/* better way to output list of data dynamically instead of previous code*/}
              {sectionContent.map((sectionItem) => (
              <Sections key={sectionItem.title} {...sectionItem} />))}
            </li>
          </section>
          <section>
            <menu>
              {/* arrow function helps to make clickHandler customizable when it has to be executed*/}
              <NavBar
              // isSelected is for dynamic styling if the button is selected, css styling for active button will be applied
                isSelected={selectedSection === 'about'}
                buttonClicked={() => clickHandler('about')}>About</NavBar>
              <NavBar
                isSelected={selectedSection === 'values'}
                buttonClicked={() => clickHandler('values')}>Values</NavBar>
              <NavBar
              isSelected={selectedSection === 'projects'}
              buttonClicked={() => clickHandler('projects')}>Projects</NavBar>
              <NavBar
              isSelected={selectedSection === 'contacts'}
              buttonClicked={() => clickHandler('contacts')}>Contacts</NavBar>
            </menu>
            {
              !selectedSection 
              ?  <Greeting /> 
              :  (<div>
                  <h3>
                    {/* @ts-ignore */}
                    {content[selectedSection].title}
                  </h3>
                  <p>
                    {/* @ts-ignore */}
                    {content[selectedSection].text}
                  </p>
                </div>)
            }
          </section>
        </main>
    </div>
  );
}

export default App;

