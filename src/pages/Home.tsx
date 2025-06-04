import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-6 mt-8 md:mt-0">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">안녕하세요, 웹 개발자 이민규입니다.</h1>
              <p className="text-lg md:text-2xl opacity-90">
                창의적이고 기능적인 웹 솔루션을 만드는 열정적인 웹 개발자입니다
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-4 md:mt-6">
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
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="bg-gray-200 w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                {/* public 폴더 기준 절대 경로 사용 */}
                <img src="/picture/myProfile.png" alt="myProfile" className="w-full h-full object-cover" />
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
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden font-mono">
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
                <p className="text-gray-300 mb-4 ml-1">Lee Min-Kyu // Passionate Frontend Developer</p>

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
# 안녕하세요! 👋

저는 **사용자 중심의 웹 경험**을 추구하는 프론트엔드 개발자 이민규입니다.
주로 **React, JavaScript, HTML/CSS**를 사용하여 직관적이고 반응성이 뛰어난 웹 애플리케이션을 구현하는 데 집중하고 있습니다.

- 💡 새로운 기술 스택에 대한 학습을 즐기며, 때로는 **Python**을 활용하여 개발 생산성을 높이는 스크립트를 작성하기도 합니다.
- 🧹 **Git**을 통한 효율적인 버전 관리와 협업을 중요시하며, **Docker**를 이용한 일관된 개발 및 배포 환경 구축 경험이 있습니다.
- ☁️ **AWS**의 기본적인 서비스들을 활용하여 애플리케이션을 배포하고 관리하는 경험을 통해, 서비스의 안정적인 운영에도 기여하고자 합니다.
- 🎨 프론트엔드 개발뿐만 아니라, **Photoshop**을 활용하여 사용자의 시각적 만족도와 경험을 고려한 UI/UX 설계에도 깊은 관심을 가지고 있습니다.

이 포트폴리오에는 제가 진행한 프로젝트와 개발 경험을 담았습니다.
관심 있게 봐주셔서 감사드리며, 언제든지 편하게 연락 부탁드립니다!
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
                  UI_UX_Design    Clean_Code    Continuous_Learning    Problem_Solving    Collaboration
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
  { name: 'HTML/CSS', icon: '/skills/htmlcss.png' }, 
  { name: 'JavaScript', icon: '/skills/javascript.png' },
  { name: 'React', icon: '/skills/react.png' },
  { name: 'Python', icon: '/skills/python.png' },
  { name: 'AWS', icon: '/skills/aws.png' },
  { name: 'Git', icon: '/skills/git.png' },
  { name: 'Docker', icon: '/skills/docker.png' },
  { name: 'Photoshop', icon: '/skills/photoshop.png' },
];

export default Home;