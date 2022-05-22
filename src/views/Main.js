import About from 'components/About/About'
import Projects from 'components/Projects/Projects'
import Skills from 'components/Skills/Skills'
import "App.css"

const Main = ( props ) => { 

    return ( 
        <div>
            <About />
            <Projects />
            <Skills />
        </div>
    )
}

export default Main