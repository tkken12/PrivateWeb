const header = {
  // 나의 시그니쳐 넣기
  // // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  // title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: '- 김태영 -',
  role: 'Cloud Computing Developer',
  description:
    "풀스택 개발자를 목표로한 클라우드 컴퓨팅 개발자",
  social: {
    github: 'https://github.com/tkken12',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
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

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'Node.JS',
  'Go',
  'Git',
  'CI/CD',
  'Docker',
  'Kubernetes',
  'LXD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
