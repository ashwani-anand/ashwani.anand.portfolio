"use client";
import { useState } from "react";
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'You are a helpful assistant.'
    },
    {
      role: 'user',
      content: 'Why is Python better than Javascript?'
    }
  ])

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'applications/json',
        },
      }
    ).then(res => res.json());
    setMessages([...messages, { role: 'system', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">A</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:itsashwanianand@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
                Ashwani Anand
              </h1>
              <p>
                <span>Blending creativity and technology,</span> I design intelligent solutions in AI, machine
                learning, and software development to transform ideas into reality and shape the future.
              </p>
              <div className="call-to-action">
                <a href="./AshwaniAnand-Resume.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:itsashwanianand@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/ashwani-anand">
                  <Image src="/images/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/ashwani-anand">
                  <Image src="/images/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <Image src="/images/hero.png" alt="Ashwani Anand" width={1200}
              height={800} layout="responsive" objectFit="contain" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <Image src="/images/html.png" alt="HTML" width="128" />
              <Image src="/images/css.png" alt="CSS" width="128" />
              <Image src="/images/javascript.png" alt="Javascript" width="128" />
              <Image src="/images/react.png" alt="ReactJS" width="128" />
              <Image src="/images/nextjs.png" alt="NextJS" width="128" />
              <Image src="/images/nodejs.png" alt="NodeJS" width="128" />
              <Image src="/images/expressjs.png" alt="ExpressJS" width="128" />
              <Image src="/images/mongodb.png" alt="MongoDB" width="128" />
              <Image src="/images/mysql.png" alt="MySQL" width="128" />
              <Image src="/images/python.png" alt="Python" width="128" />
              <Image src="/images/java.png" alt="Java" width="128" />
              <Image src="/images/git.png" alt="Git" width="128" />
              <Image src="/images/github.png" alt="GitHub" width="128" />
              <Image src="/images/azure.png" alt="Azure" width="128" />
              <Image src="/images/html.png" alt="HTML" width="128" />
              <Image src="/images/css.png" alt="CSS" width="128" />
              <Image src="/images/javascript.png" alt="Javascript" width="128" />
              <Image src="/images/react.png" alt="ReactJS" width="128" />
              <Image src="/images/nextjs.png" alt="NextJS" width="128" />
              <Image src="/images/nodejs.png" alt="NodeJS" width="128" />
              <Image src="/images/expressjs.png" alt="ExpressJS" width="128" />
              <Image src="/images/mongo.png" alt="MongoDB" width="128" />
              <Image src="/images/mysql.png" alt="MySQL" width="128" />
              <Image src="/images/python.png" alt="Python" width="128" />
              <Image src="/images/java.png" alt="Java" width="128" />
              <Image src="/images/git.png" alt="Git" width="128" />
              <Image src="/images/github.png" alt="GitHub" width="128" />
              <Image src="/images/azure.png" alt="Azure" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Languages</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
              <h3>Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi I'm Ashwani Anand, a software engineer with a strong passion for technology and
                problem-solving.
                My work focuses on creating practical, efficient solutions using a range of tools and
                technologies. I thrive on learning new concepts, improving my skills, and applying them to
                real-world challenges, whether it's in AI, data analysis, or application development.
              </p>
              <p>
                With a collaborative mindset and a focus on delivering quality results, I enjoy working on
                projects that push boundaries and make a tangible impact. Explore my work and feel free to reach
                out for potential collaborations or opportunities.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <Image src="/images/workplace1.png" alt="Emproto Technologies" width={1200} height={800} layout="responsive" objectFit="contain" />
                  <figcaption>
                    Emproto Technologies
                  </figcaption>
                </div>
              </figure>
              <h3>Machine Learning Intern</h3>
              <div>Oct 2023 - Nov 2023</div>
              <p>
                I gained experience in Linux command-line operations for file management and permissions, enhanced my problem-solving skills with Python (e.g., the 'Coin Change' problem), and performed regression analysis on a medical insurance dataset, covering data prep, visualization, feature selection, and model evaluation.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <Image src="/images/workplace2.png" alt="CleverBharat" width={1200} height={800} layout="responsive" objectFit="contain" />
                  <figcaption>
                    CleverBharat
                  </figcaption>
                </div>
              </figure>
              <h3>Algorithmic Trading Strategy Intern</h3>
              <div>Oct 2024 - Nov 2024</div>
              <p>I contributed to the development and implementation of algorithmic trading strategies, including performing sentiment analysis using X data. My role involved researching ways to optimize trading algorithms, monitoring market trends, and collaborating on system improvements.</p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>
              Previous
            </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://github.com/ashwani-anand/DrowsyDefender" className="bento-item">
              <Image src="/images/drowsydefender.jpeg" alt="DrowsyDefender" width={1200} height={800} layout="responsive" objectFit="contain" />
            </a>
            <a href="https://github.com/ashwani-anand/YouTube-to-Speech-Converter" className="bento-item">
              <Image src="/images/youtube2speech.jpg" alt="YouTube2Speech" width={1200} height={800} layout="responsive" objectFit="contain" />
            </a>
            <a href="https://github.com/ashwani-anand/AI-Checkers" className="bento-item">
              <Image src="/images/aicheckers.jpg" alt="AI Checkers" width={1200} height={800} layout="responsive" objectFit="contain" />
            </a>
            <a href="https://github.com/ashwani-anand/Web-Article-Scraper" className="bento-item">
              <Image src="/images/webscraper.jpeg" alt="WebScraper" width={1200} height={800} layout="responsive" objectFit="contain" />
            </a>
            <a href="https://github.com/ashwani-anand/ThrillQuest" className="bento-item">
              <Image src="/images/thrillquest.jpeg" alt="ThrillQuest" width={1200} height={800} layout="responsive" objectFit="contain" />
            </a>
            <a href="https://github.com/ashwani-anand/QuantTrader" className="bento-item">
              <Image src="/images/quanttrader.jpeg" alt="QuantTrader" width={1200} height={800} layout="responsive" objectFit="contain" />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've created an interactive chatbot that showcases my skills, work experience, and even provides
                access to my CV/Resume. Feel free to ask it any questions about my background to gain a deeper
                understanding of who I am and what I've accomplished.</p>
              <p>If you'd like a closer look at my qualifications, you can download my resume here. I'm actively
                exploring new opportunities, so if you have a project where you think my skills would be a great
                match, don't hesitate to reach out!</p>
              <a href="./AshwaniAnand-Resume.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>
                        {message.role === 'user' ? 'You' : 'AI'}
                      </span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Hey Ashwani, which skills do you excel at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
