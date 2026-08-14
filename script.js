const techData = {
    "HTML5": {
        desc: "웹 표준과 웹 접근성 및 SEO 최적화를 준수하는 시맨틱 태그 구조화, 효율적인 DOM 아키텍처 설계 및 크로스 브라우징을 고려한 레이아웃 구축",
        level: 5,
        experiences: ["WebWindow", "Blog", "Pathfinder", "로그인/회원가입 웹 서비스"]
    },
    "CSS3": {
        desc: "Flexbox 및 Grid 레이아웃 아키텍처 기반 반응형 웹 디자인, Keyframes 애니메이션, Media Query 및 하드웨어 가속 트랜지션을 활용한 동적 UI 스타일링",
        level: 4,
        experiences: ["금고", "WebWindow", "개인 블로그"]
    },
    "SCSS": {
        desc: "변수(Variables), 믹스인(Mixin), 중첩(Nesting) 및 모듈화 구조를 활용하여 코드 재사용성을 극대화하고 유지보수성이 뛰어난 UI CSS 아키텍처 구현",
        level: 5,
        experiences: ["WebWindow", "Pathfinder", "개인 포트폴리오"]
    },
    "JavaScript": {
        desc: "바닐라 JS 기반 DOM 및 이벤트 핸들링, ES6+ 비동기 처리(Async/Await, Promise), Canvas API 제어, Fetch 통신 및 인터랙티브 사용자 경험 구축",
        level: 5,
        experiences: ["금고", "WebWindow", "Pathfinder"]
    },
    "Python": {
        desc: "Selenium 기반 동적 DOM 추적 및 자동화 크롤링 스크립팅, 데이터 수집 파이프라인 구축, 객체지향/절차적 프로그램 작성 및 효율적인 알고리즘 해결",
        level: 5,
        experiences: ["아두이노 제어 스크립트", "KOI / NYPC 알고리즘 풀이", "Flask로 카카오톡 챗봇 서버 제작", "웹 오토메이션 파이프라인"]
    },
    "C / C++": {
        desc: "포인터 및 메모리(Heap/Stack) 로우레벨 제어, 하드웨어 임베디드 로직 설계, 효율적인 자료구조 활용과 고성능 알고리즘 및 시스템 엔진 구현",
        level: 5,
        experiences: ["KOI / 백준 알고리즘 문제 해결", "임베디드 로직 작성"]
    },
    "React": {
        desc: "JSX 및 컴포넌트 기반 아키텍처 이해, State/Props 기반 단방향 데이터 흐름 및 Hooks(useState, useEffect)를 활용한 기초적인 UI 모듈화 설계",
        level: 2,
        experiences: []
    },
    "Vue.js": {
        desc: "Single File Component(SFC) 구조 이해, Reactive Data Binding(v-bind, v-model) 및 Vue 디렉티브를 활용한 반응형 프론트엔드 UI 구축",
        level: 2,
        experiences: []
    },
    "Kotlin": {
        desc: "JVM 기반 기본 문법 구조 파악, 객체지향 프로그래밍(OOP) 개념 적용 및 기본 변수/함수/클래스 선언을 통한 소스코드 흐름 및 로직 파악",
        level: 1,
        experiences: []
    },
    "Node.js": {
        desc: "이벤트 루프 및 비동기 Non-blocking I/O 아키텍처 이해, serialport 등 외부 NPM 모듈을 활용한 아두이노 하드웨어 시리얼 통신 연동 및 서버 환경 제어",
        level: 2,
        experiences: ["아두이노와 시리얼통신 데이터 연동"]
    },
    "Express": {
        desc: "Node.js 기반 RESTful API 엔드포인트 라우팅 설계, 요청/응답 미들웨어 파이프라인 구성 및 웹 서버 백엔드 기초 아키텍처 구축",
        level: 2,
        experiences: []
    },
    "PHP": {
        desc: "서버 사이드 스크립팅(SSR)을 통한 HTTP 요청/응답 처리, Session/Cookie 기반 인증 로직 구현 및 MySQL DB 연동을 통한 동적 데이터 웹 서비스 구축",
        level: 3,
        experiences: ["로그인 / 회원가입 인증 서비스 다수 구축", "서버 사이드 폼 데이터 처리"]
    },
    "MySQL": {
        desc: "관계형 데이터베이스(RDBMS) 스키마 설계, Primary/Foreign Key 제약조건 설정, Complex JOIN 및 CRUD SQL 쿼리문을 활용한 효율적 데이터 관리",
        level: 3,
        experiences: ["회원 관리 DB 스키마 설계 및 CRUD 연동", "ScoreWiki 파라미터 변조 진단"]
    },
    "Socket.io": {
        desc: "WebSocket 기반 양방향 실시간 이벤트 데이터 통신 파이프라인 구축, 실시간 데이터 스트리밍 및 클라이언트-서버 간 소켓 네트워크 인터랙션 제어",
        level: 3,
        experiences: []
    },
    "Arduino": {
        desc: "C/C++ 기반 임베디드 펌웨어 작성, 서보모터·가변저항 등 센서/액추에이터 제어 및 PC와의 시리얼(UART) 데이터 통신 인터페이스 연동",
        level: 5,
        experiences: ["금고 (가변저항 연동)", "1축 관절 로봇 하드웨어 연동", "휴대용 선풍기 제작"]
    },
    "Selenium": {
        desc: "WebDriver 기반 동적 웹페이지 DOM 파싱, Explicit/Implicit Wait 대기 로직 처리 및 동적 수집 자동화 크롤러 스크립트 파이프라인 구축",
        level: 5,
        experiences: ["제미나이 답변 크롤러 제작", "네이버 웹툰 크롤링 및 다운로더 제작"]
    },
    "Git": {
        desc: "분산 버전 관리 시스템(VCS)의 스테이징, 커밋(Commit), 브랜치 생성 및 체크아웃을 활용한 체계적인 소스코드 변경 이력 및 형상 관리",
        level: 2,
        experiences: ["개인 개발 프로젝트 버전 및 이력 관리"]
    },
    "GitHub": {
        desc: "Remote Repository 연동, Issue/Pull Request 흐름 이해 및 프로젝트 소스코드의 안전한 원격 백업, 버전 관리 및 레포지토리 동기화",
        level: 3,
        experiences: ["개인 원격 저장소 관리 및 소스코드 동기화"]
    },
    "Postman": {
        desc: "HTTP/HTTPS 프로토콜 기반 API 요청(GET/POST) 테스트, Header/Body 파라미터 검증, 응답 상태 코드 및 JSON 데이터 구조 디버깅",
        level: 2,
        experiences: ["API 테스트 시 활용"]
    },
    "Figma": {
        desc: "UI/UX 와이어프레임 설계, 디자인 시스템 기반 컴포넌트 레이아웃 시각화, 프로토타이핑 및 사용자 인터페이스 구조 설계",
        level: 2,
        experiences: ["개인 프로젝트 UI/UX 와이어프레임 설계"]
    },
    "VS Code": {
        desc: "주력 코드 에디터 환경 구축, Linter/Formatter(Prettier/ESLint) 설정, 익스텐션 활용 및 내장 터미널 기반의 고효율 디버깅 및 개발 운용",
        level: 5,
        experiences: ["웹 프론트엔드 / Python / PHP 프로젝트 개발"]
    },
    "Visual Studio": {
        desc: "MSVC 컴파일러 기반 C/C++ 프로젝트 빌드, 중단점(Breakpoint) 및 메모리 추적을 활용한 로우레벨 코드 디버깅 환경 운용",
        level: 4,
        experiences: ["C/C++ 알고리즘 및 로우레벨 코드 디버깅"]
    },
    "FileZilla": {
        desc: "FTP/SFTP 프로토콜을 활용한 원격 웹 서버 호스팅 파일 업로드/다운로드, CHMOD 파일 접근 권한 설정 및 웹 디렉토리 구조 관리",
        level: 3,
        experiences: ["웹 호스팅 서버 원격 파일 업로드 및 관리 (2023)"]
    }
};

const projects = [
    {
        name: "ChatGPT 답변 크롤러 및 챗봇",
        desc: "Selenium을 활용하여 ChatGPT 웹 UI에서 동적으로 생성되는 답변 스트리밍 데이터를 실시간 추적 및 크롤링하고, PHP 백엔드 서버를 거쳐 클라이언트에 안정적으로 메시지를 중계하도록 구축한 AI 인터랙티브 챗봇 시스템입니다. 브라우저 자동화와 서버 사이드 폼 데이터를 연동하여 비공식 API 형태의 대화 파이프라인을 완성했습니다.",
        demo: null,
        repo: "https://github.com/Junehyuk0920/Crawl-Chatgpt",
        lang: ["Python", "Selenium", "PHP", "SCSS", "JS"]
    },
    {
        name: "WebWindow (알파버전)",
        desc: "웹 브라우저 상에서 동작하는 창 관리 인터페이스(Window Manager)와 Windows CMD(명령 프롬프트) 스타일의 대화형 터미널을 제공하는 웹 데스크톱 환경 프로젝트입니다. SCSS 기반의 모듈화 스타일링과 바닐라 JavaScript 기반의 DOM 제어를 통해 창 드래그 앤 드롭, 포커스 제어, 최소화/최대화 및 커스텀 터미널 명령어 해석 로직을 직접 구현했습니다.",
        demo: "https://junehyuk0920.github.io/WebWindow",
        repo: "https://github.com/Junehyuk0920/WebWindow",
        lang: ["SCSS", "JS"]
    },
    {
        name: "웹툰 이미지 다운로더",
        desc: "Selenium 기반으로 웹 페이지 내 동적 스크롤 이벤트를 트리거하여 지연 로딩(Lazy Loading)되는 고해상도 이미지 요소를 추적하고 순차적으로 수집·저장하는 자동화 파이프라인 크롤러입니다. 요청 헤더 제어 및 대기 로직(Explicit/Implicit Wait)을 적용하여 차단을 방지하고, 수집된 리소스를 에피소드별 폴더 구조로 자동 분류하여 저장하도록 설계했습니다.",
        demo: null,
        repo: "https://github.com/Junehyuk0920/WebCrawling",
        lang: ["Python", "Selenium"]
    },
    {
        name: "JH PathFinder | 각종 지원 서류 분석 및 면접 체험",
        desc: "취업 준비 과정에서 활용할 수 있는 AI 기반 서류 분석 및 면접 시뮬레이션 웹 서비스입니다. 사용자가 이력서, 자기소개서 등의 서류를 입력하면 OpenRouter API를 활용한 AI가 이를 분석하여 총평, 핵심 강점, 위험 요소, 전략적 제언의 4단계로 구조화된 피드백을 제공합니다. 또한 면접 체험 기능을 통해 예상 질문과 압박형 꼬리 질문을 생성하고, 이에 대한 모범 답안과 핵심 키워드를 함께 제시하여 실전 면접 대비가 가능하도록 설계했습니다.",
        demo: "https://jh-pathfinder.vercel.app",
        repo: "https://github.com/Junehyuk0920/PathFinder",
        lang: ["JS", "API"]
    },
    {
        name: "Lock",
        desc: "아두이노 나노와 포텐셔미터 3개를 활용하여 조합 기반 잠금 시스템을 구현한 임베디드 프로젝트입니다. 각 포텐셔미터의 회전 각도를 아날로그 신호로 입력받아 이를 0부터 40까지의 정수 값으로 매핑하고, 세 개의 값을 조합하여 하나의 비밀번호로 사용하는 구조로 설계했습니다. 또한 시리얼 통신을 통해 아두이노와 Node.js 기반 환경을 연동하여, 하드웨어에서 발생한 데이터를 실시간으로 전송하고 웹 인터페이스에서 확인 및 제어할 수 있도록 구성했습니다. 세 개의 입력값 조합을 통해 총 40³(약 64,000)가지의 경우의 수를 가지는 조합형 잠금 시스템을 구현했으며, 센서 입력 처리부터 데이터 통신까지의 전반적인 임베디드 시스템 흐름을 직접 설계하고 구현한 것이 특징입니다.",
        demo: "https://junehyuk0920.github.io/lock/",
        repo: "https://github.com/Junehyuk0920/lock",
        lang: ["JS", "Node.js", "Arduino"]
    },
    {
        name: "JH의 개발일지",
        desc: "순수 HTML, CSS, JavaScript로 구현한 개발 블로그 플랫폼입니다. 외부 프레임워크 없이 정적 웹 환경에서 동작하도록 설계했으며, 블로그 글을 언어별로 분류하여 카테고리화하고 사용자에게 직관적인 탐색 구조를 제공합니다. 콘텐츠는 .txt 파일 기반으로 관리하며, 새로운 글을 작업 폴더에 추가한 후 Git을 통해 배포하는 방식으로 운영됩니다. 클라이언트에서는 비동기 fetch를 통해 .txt 파일을 불러오고, [], (), {} 등의 커스텀 문법을 정규표현식으로 분석하여 <h1>, <b> 등의 HTML 태그로 변환하는 텍스트 파싱 로직을 구현했습니다. 이를 통해 별도의 마크다운 라이브러리 없이도 구조화된 문서 렌더링이 가능하도록 설계했습니다. 또한 Firebase를 활용하여 게시글의 좋아요 수를 저장하고 관리하는 기능을 추가하여 사용자 상호작용 요소를 구현했습니다.",
        demo: "https://junehyuk0920.github.io/blog/",
        repo: "https://github.com/Junehyuk0920/blog",
        lang: ["JS", "Firebase"]
    },
    {
        name: "JH Words (알파버전)",
        desc: "사용자의 효율적인 외국어 어휘 학습 및 단어 관리를 돕기 위해 구축된 웹 기반 대화형 단어장 애플리케이션입니다. 외부 Open API와 연동하여 단어의 발음, 뜻, 예문 데이터를 비동기로 호출하고, 순수 JavaScript 기반의 플래시카드 UI 및 실시간 검색, 학습 상태 저장 기능을 제공하여 반응형 사용자 인터페이스를 구현했습니다.",
        demo: null,
        repo: "https://github.com/Junehyuk0920/JH-words",
        lang: ["JS", "API"]
    },
    {
        name: "JH 챗봇 (카카오톡 챗봇)",
        desc: "Python과 Flask 백엔드 프레임워크를 기반으로 구축한 카카오톡 오픈빌더 연동 챗봇 API 서버입니다. 사용자의 카카오톡 요청 웹훅(Webhook) 패킷을 파싱하고, 조건별 응답 로직 및 데이터 처리 파이프라인을 거쳐 카카오톡 규격에 맞는 JSON 스키마 응답을 실시간으로 반환하도록 구현했습니다.",
        demo: "https://pf.kakao.com/_Ivxnpn/chat",
        repo: null,
        lang: ["JS", "Python"]
    },
];

window.addEventListener("mousemove", function(e) {
    document.querySelector(".blur").style.top = `${e.clientY - 10}px`;
    document.querySelector(".blur").style.left = `${e.clientX - 10}px`;
})

function loadLang(selected)
{
    document.querySelector(".info h1").innerText = selected;
    document.querySelector(".info p").innerText = techData[selected].desc;
    document.querySelector(".info h2").innerText = '숙련도 : ' + techData[selected].level + ' / 5';
    document.querySelector(".info ul").innerHTML = '';

    techData[selected].experiences.forEach(exp => {
        document.querySelector(".info ul").insertAdjacentHTML('beforeend', `<li>${exp}</li>`);
    });
}

function loadProject(idx)
{
    let curr = projects[idx];
    document.querySelector(".project h1").textContent = curr.name;
    document.querySelector(".project p").textContent = curr.desc;
    document.querySelector(".project ul").innerHTML = "";
    curr.lang.forEach(l => {
        document.querySelector(".project ul").insertAdjacentHTML("beforeend", `<li>${l}</li>`);
    })
}

function copy(text)
{
    navigator.clipboard.writeText(text).then(() => {
        alert("클립보드에 복사되었습니다!");
    });
}

document.querySelector("#demo").addEventListener("click", () => {
    let curr = projects[currProject];
    if (curr.demo == null)
        alert("Sorry, No demo.");
    else
        window.open(curr.demo);
})

document.querySelector("#github").addEventListener("click", () => {
    let curr = projects[currProject];
    if (curr.repo == null)
        alert("Sorry, No Repository.");
    else
        window.open(curr.repo);
})

loadLang("HTML5");
loadProject(0);

document.querySelectorAll(".tag").forEach(dom => {
    dom.addEventListener("click", function(e) {
        document.querySelector(".selected").classList.remove("selected");
        e.currentTarget.classList.add("selected");
        selected = e.currentTarget.innerText;

        loadLang(selected);
    })
})

let currProject = 0;

document.querySelectorAll(".indicator li").forEach((elem, idx) => {
    elem.addEventListener("click", e => {
        document.querySelector(".curr").classList.remove("curr");
        e.target.classList.add("curr");
        currProject = idx;

        loadProject(idx);
    })
})