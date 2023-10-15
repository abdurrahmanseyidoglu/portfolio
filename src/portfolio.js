const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://abdurrahmanseyidoglu.github.io/protfolio',
  title: 'My Protfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abdurrahman Seyidoğlu',
  role: 'Front End Engineer',
  description:
    "I enjoy challenges and thrive when working on projects that push my boundaries. With a solid background in solving problems and creating solutions, I have a proven track record of effectively addressing issues. I'm passionate about using technology to empower individuals and help new developers find their way. This drives my enthusiasm for front-end development. Continuously learning and embracing new languages and techniques are essential to me. I believe that this not only benefits me personally but also contributes significantly to a company's success. I'm dedicated to expanding my skills and knowledge to create better experiences through technology",
  resume: 'https://drive.google.com/file/d/1AXPUJwOKhmiglBu-q_RPzujhvJhARhu1/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/abdurrahmanseyidoglu/',
    github: 'https://github.com/abdurrahmanseyidoglu',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ILAJAK Website',
    description:
      'The official website of ILAJAK Company in Istanbul.',
    stack: ['Vue.js', 'Nuxt.js', 'Vuex', 'SASS', 'Bootstrap',],
    sourceCode: '',
    livePreview: 'https://www.ilajak.com',
  },

  {
    name: 'Imtilak Global',
    description:
      'The official website of Imtilak Group Company in UAE.',
    stack: ['Blade', 'HTML', 'SASS', 'Jquery'],
    sourceCode: '',
    livePreview: 'https://www.imtilakglobal.ae',
  },
  {
    name: 'Oragon',
    description:
      "The official website of OragnGPYCompany in Istanbul.",
    stack: ['Blade', 'HTML', 'SCSS', 'JavaScript'],
    sourceCode: '',
    livePreview: 'https://www.oragongpy.com/',
  },
  {
    name: 'InceGroup',
    description:
      'The official website of INCE Group Company in Istanbul.',
    stack: ['React.js','SASS',],
    sourceCode: '',
    livePreview: 'https://incegroup.com.tr',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'Jquery',
  'React',
  'Vue',
  'Vuex',
  'Pinia',
  'Nuxt',
  'SASS',
  'Bootstrap',
  'Tailwindcss',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abdurrahmanseyidoglu@gmail.com',
}

export { header, about, projects, skills, contact }
