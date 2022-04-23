import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from 'portfolio'
import "assets/css/About.css"

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <div className='about__name'>{name}</div>
          <div className='about__name'> 개발 노트 및 포트폴리오 </div>
        </h1>
      )}

      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
      </div>
    </div>
  )
}

export default About
