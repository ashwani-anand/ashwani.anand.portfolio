// import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
// import { NextResponse } from 'next/server';

// const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
// const apiKey = process.env.AZURE_OPENAI_API_KEY;
// const model = process.env.AZURE_OPENAI_MODEL;

// export async function POST(req) {

//     const { messages } = await req.json();

//     const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

//     messages.unshift({
//         role: 'system',
//         content: `You are PortfolioGPT, answering only questions based on the resume provided.
//         Resume:
//         ${DATA_RESUME}
        
//         Help users learn more about Ashwani Anand from his resume.`
//     })

//     // const messages = [
//     //     {
//     //         role: 'system',
//     //         content: 'You are a helpful assistant.'
//     //     },
//     //     {
//     //         role: 'user',
//     //         content: 'Why is Python better than Javascript?'
//     //     }
//     // ];

//     const response = await client.getChatCompletions(model, messages, { maxTokens: 128 });

//     return NextResponse.json({
//         message: response.choices[0].message.content
//     })
// }

// const DATA_RESUME = `PROJECTS
// ASHWANI ANAND
// SUMMARY
// Aspiring software engineer specializing in AI and machine learning, with a passion for learning and growth. Strong problem-solving,
// communication, and teamwork skills, focused on delivering impactful solutions and contributing to innovative projects.
// EXTRA-CURRICULAR ACTIVITIES
// • itsashwanianand@gmail.com • linkedin/ashwani-anand • github.com/ashwani-anand
// WORK EXPERIENCE
// Developed foundational skills in Linux command-line operations for file management and permissions, alongside enhancing
// algorithmic problem-solving through dynamic programming in Python with the "Coin Change" problem.
// Conducted regression analysis on a medical insurance dataset, including data preprocessing, visualization, feature selection,
// model training, and evaluation.
// Emproto Technologies Private Limited Oct 2023 - Nov 2023
// EDUCATION
// Bachelor of Engineering in Artificial Intelligence and Machine Learning
// BNM Institute of Technology, Bengaluru
// CGPA: 8.66
// 2021 - 2025
// Higher Secondary Education
// Hill Top School (ICSE), Jamshedpur
// Percentage: 76.25%
// 2020
// Secondary School Education
// Hill Top School (ICSE), Jamshedpur
// Percentage: 90.6%
// 2018
// Used OpenCV and dlib to develop a real-time driver fatigue monitoring system, enhancing road safety by detecting drowsiness.
// Utilized NumPy and SciPy for efficient image processing, improving the accuracy of drowsiness detection through facial
// landmark analysis.
// Implemented YOLO for object detection, ensuring timely alerts to drivers when signs of fatigue are detected.
// DrowsyDefender | Python, OpenCV, YOLO, dlib
// QuantTrader | Python, Pandas, Backtrader, Matplotlib
// Developed an algorithmic trading system using Python and Backtrader, optimizing trading strategies for improved investment
// performance.
// Conducted market trend analysis using Pandas and NumPy, delivering enhanced trading returns through data-driven decisions.
// Created performance visualization dashboards with Matplotlib for strategic evaluation and risk management.
// SKILLS
// Languages: Java, Python, SQL
// Frameworks: Pandas, Numpy, Scikit-Learn, Matplotlib
// Tools: Blender, VS Code, Git
// Platforms: MySQL, MongoDB, Unix/Linux, Windows, GitHub
// Soft Skills: Communication, Positive Attitude, Teamwork, Problem-Solving, Adaptability
// Assisted in developing and implementing algorithmic trading strategies, including sentiment analysis using X data.
// Conducted research to optimize trading algorithms, monitor market trends, and collaborate on system enhancements.
// CleverBharat Private Limited Oct 2024 - Present
// Machine Learning Intern | Linux, Python, Data Analysis, Machine Learning Bengaluru
// Algorithmic Trading Strategy Development Intern | C++, Python, Market Analysis
// Director, BNMIT Model United Nations (MUN): Led initiatives and organized events for new members.
// First Prize, 'Shoot Your Webs' Web Development Hackathon: Recognized for innovative web solutions.
// First Prize, Annual Skit and Monologue Competitions, Kalabhageerathi: Awarded for outstanding cultural performance.
// Anchoring Team Member, College Day 2023: Planned and hosted the event successfully.
// Member, National Service Scheme (NSS): Engaged in community service and outreach.
// ThrillQuest | MERN Stack
// Developed a dynamic trip planning website with React.js, achieving enhanced user engagement through personalized itineraries.
// Built robust backend infrastructure using Node.js/Express.js for efficient server-side operations and data handling.
// Implemented scalable database system with MongoDB and optimized frontend for seamless cross-device performance.`