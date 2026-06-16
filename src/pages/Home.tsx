import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8">
            <div className="lg:w-1/2 text-center lg:text-left space-y-4 lg:space-y-6 mt-8 lg:mt-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">안녕하세요, 웹 개발자 이민규입니다.</h1>
              <p className="text-lg md:text-xl lg:text-2xl opacity-90">
                프론트엔드의 흐름을 이해하며, 탄탄한 백엔드 아키텍처를 구축하는 실전형 개발자입니다.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-4 lg:mt-6">
                <Link
                  to="/portfolio"
                  className="px-6 py-3 text-base md:text-lg font-medium rounded-md bg-white text-indigo-600 hover:bg-gray-100 transition duration-300"
                >
                  포트폴리오 보기
                </Link>
                <a
                  href="tel:010-4157-9597"
                  className="px-6 py-3 text-base md:text-lg font-medium rounded-md border-2 border-white hover:bg-white hover:text-indigo-600 transition duration-300"
                >
                  연락하기
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              {/* w-56 h-64 md:w-64 md:h-80 */}
              <div className="w-52 md:w-60 lg:w-72 aspect-[4/5] mx-auto">
                {/* public 폴더 기준 절대 경로 사용 */}
                <img
                  src="/picture/myProfile_New.png"
                  alt="이민규 프로필 사진"
                  className="w-full h-full object-cover shadow-lg"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white">기술 스택</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-2 md:mb-4">
                  {/* 실제 아이콘 경로로 수정해주세요. 예: public 폴더 기준 */}
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 md:w-14 md:h-14 object-contain" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-700 dark:text-gray-200">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal About Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Terminal Window */}
            <div className="terminal-section bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs sm:text-sm text-gray-400">mkllel-portfolio -- bash</span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 text-sm md:text-base text-gray-300 h-[28rem] md:h-[32rem] overflow-y-auto"> {/* 높이 원복 */}
                {/* Initial Welcome Message */}
                <p className="mb-4 text-green-400">Last login: {new Date().toString()} on ttys000</p>
                
                {/* Command 1: whoami */}
                <div className="mb-1 flex items-baseline">
                  <span className="text-green-400">mkllel@portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$</span>
                  <span className="text-white ml-2">whoami</span>
                </div>
                <p className="text-gray-300 mb-4 ml-1">Lee Min-Kyu // Backend & Full-Stack Developer</p>

                {/* Command 2: cat bio.md */}
                <div className="mb-1 flex items-baseline">
                  <span className="text-green-400">mkllel@portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$</span>
                  <span className="text-white ml-2">cat bio.md</span>
                </div>
                <div className="text-gray-300 mb-4 ml-1 whitespace-pre-line">
{`
# 안녕하세요!

반복적인 비효율을 자동화로 줄이고 문제를 끝까지 추적해 해결하는 개발자 이민규입니다.
Python과 FastAPI로 서버를 구축하고 Selenium 자동화 파이프라인을 설계하는 데 강점이 있습니다.

- 웹 크롤링과 API 연동, Selenium 자동화로 수작업을 줄여 실제 업무 효율을 높인 경험이 있습니다.
- 새로운 기술(TypeScript, Firebase 등)도 주저하지 않고 학습해 프로젝트에 직접 적용하며 성장하는 과정을 즐깁니다.
- 프론트엔드(React) 생태계를 이해하고 있어 서버 배포 시 발생하는 이슈(라우팅 404 등)를 직접 디버깅하고 해결합니다.
- 주어진 업무에 그치지 않고 개발 과정에서 마주한 에러의 원인을 분석하고 해결해 나가는 과정을 꼼꼼히 기록합니다.

이 포트폴리오에는 제가 문제를 추적하고 해결해 온 기술 경험과 기록을 담았습니다.
관심 있게 봐주셔서 감사합니다. 편하게 연락 부탁드립니다.
`}
                </div>

                {/* Command 3: ls interests */}
                <div className="mb-1 flex items-baseline">
                  <span className="text-green-400">mkllel@portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$</span>
                  <span className="text-white ml-2">ls -a interests/</span>
                </div>
                <p className="text-blue-400 mb-4 ml-1">
                  <span className="text-gray-300">.</span>    
                  <span className="text-gray-300">..</span>    
                  Backend_Architecture   Data_Automation   Cloud_Infra   FullStack_Dev   Clean_Code
                </p>
                
                {/* Command 4: echo "Stay Curious, Build Awesome." */}
                <div className="mb-1 flex items-baseline">
                  <span className="text-green-400">mkllel@portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$</span>
                  <span className="text-white ml-2">echo "Stay Curious, Build Awesome."</span>
                </div>
                <p className="text-gray-300 mb-4 ml-1">Stay Curious, Build Awesome.</p>


                {/* Current command line with cursor */}
                <div className="flex items-baseline">
                  <span className="text-green-400">mkllel@portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$</span>
                  <span className="ml-2 inline-block w-2 h-4 bg-green-400 animate-pulse" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const skills = [
  { name: 'Python', icon: '/skills/python.png' },
  { name: 'FastAPI', icon: '/skills/fastapi.png' },
  { name: 'AWS', icon: '/skills/aws.png' },
  { name: 'Docker', icon: '/skills/docker.png' },
  { name: 'MySQL', icon: '/skills/mysql.png' },
  { name: 'JavaScript', icon: '/skills/javascript.png' },
  { name: 'React', icon: '/skills/react.png' },
  { name: 'Git', icon: '/skills/git.png' },
];

export default Home;
