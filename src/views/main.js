import About from 'components/About/About'
import Projects from 'components/Projects/Projects'
import Skills from 'components/Skills/Skills'
import Contact from 'components/Contact/Contact'
import "App.css"

const Main = ( props ) => { 

    return ( 
        <div>
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}

export default Main