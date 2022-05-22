import { constObject } from "common/Const"
const header = {
  // 나의 시그니쳐 넣기
}


const calculateYear = () => {
  return new Date().getFullYear() - constObject.carrerStartYear
}

const about = {
  name: '- 김태영 -',
  role: 'Cloud Computing Developer',
  description:
    calculateYear() + "년간 Private 클라우드 연구개발 경력이 있는 풀스택 개발자가 목표인 클라우드 컴퓨팅 개발자입니다.  ",
    
  social: {
    github: 'https://github.com/tkken12',
  },
}

// TODO - DB에서 가져오는걸로 변경해야함.
const projects = [
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [ 'React', 'Node.JS',
                 'Go', 'Git', 'CI/CD',
                 'Docker', 'Kubernetes', 'LXD',
               ]

const contact = { email: 'tkken12@gmail.com' }

export { header, about, projects, skills, contact }