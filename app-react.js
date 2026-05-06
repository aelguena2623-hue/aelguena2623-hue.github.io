const { useState, useEffect, useRef } = React;

const ChatBot = () => {
    const [messages, setMessages] = useState([{ type: 'bot', text: "Hey! 👋 I'm your AI assistant. Ask me anything or pick a quick question." }]);
    const [input, setInput] = useState('');
    const endRef = useRef(null);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

    const quickQuestions = [
        { q: "Who are you?", a: "I'm a Junior Full-Stack Developer specialized in React & Laravel." },
        { q: "Tell me about your skills", a: "I build responsive, high-performance web apps using modern tech." },
        { q: "What projects?", a: "I've built several apps, from 3D portfolios to E-commerce solutions." }
    ];

    const ask = (txt, reply) => {
        if (!txt.trim()) return;
        setMessages(prev => [...prev, { type: 'user', text: txt }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: reply || "Interesting! That sounds like a cool challenge." }]);
        }, 600);
    };

    return (
        <div className="chat-box" id="chatBox">
            <div className="chat-header"><div style={{fontWeight:700, fontSize:'1rem'}}>Abderrazak</div></div>
            <div className="chat-messages">
                {messages.map((m, i) => <div key={i} className={`msg ${m.type}`}>{m.text}</div>)}
                <div ref={endRef} />
            </div>
            <div className="quick-questions">
                {quickQuestions.map((qq, i) => (
                    <div key={i} className="q-chip" onClick={() => ask(qq.q, qq.a)}>{qq.q}</div>
                ))}
            </div>
            <div className="chat-footer">
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && ask(input)} placeholder="Pose ta question..." />
                <button onClick={() => ask(input)} style={{background:'var(--primary)', border:'none', borderRadius:'10px', padding:'0 15px'}}><i className="fas fa-paper-plane" style={{color:'#000'}}></i></button>
            </div>
        </div>
    );
};

const ProjectCard = ({ title, desc, tech, link, img }) => {
    const handleVisit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (link && link !== "#" && link !== "") {
            window.open(link, "_blank");
        }
    };

    return (
        <div className="project-card">
            <div className="project-img-wrapper">
                <img src={img} alt={title} className="project-img" />
                <div className="project-overlay">
                    <button onClick={handleVisit} className="visit-btn">   
                        <i className="fas fa-external-link-alt"> View Project</i> 
                    </button>
                </div>
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="project-tech">
                    {tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                </div>
            </div>
        </div>
    );
};

const App = () => {
  useEffect(() => {
    // 1. Swiper Initialization
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        observer: true,           
        observeParents: true,    
        coverflowEffect: { 
            rotate: 10, 
            stretch: 0, 
            depth: 100, 
            modifier: 1, 
            slideShadows: true 
        },
        navigation: { 
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev" 
        },
        pagination: { 
            el: ".swiper-pagination",
            clickable: true 
        },
    });

    VanillaTilt.init(document.querySelectorAll(".futuristic-card, .profile-img, .contact-card-futu"), {
        max: 15, speed: 400, glare: true, "max-glare": 0.2
    });

    tsParticles.load("tsparticles", {
        particles: { number: { value: 60 }, move: { enable: true, speed: 0.6 }, links: { enable: true, opacity: 0.1 }, size: { value: 1 } }
    });

    $(document).on('mousemove', '.highlight-with-img', function(e) {
        let x = e.clientX + 20;
        let y = e.clientY + 20;

        if (x + 220 > window.innerWidth) {
            x = e.clientX - 230;
        }

        $(this).find('.hover-img').css({
            left: x + 'px',
            top: y + 'px',
            position: 'fixed', 
            display: 'block'
        });
    });
}, []);

    return (
        <div>
            <section id="about" className="hero">
                <div className="hero-content">
                    <h1>I Build <span>Scalable</span> Web Solutions</h1>
                    <p>Computer Science student (L2). I create modern web interfaces using React and jQuery.</p>
                    <div style={{display:'flex', gap:'15px', marginTop:'20px'}}>
                        <button className="main-btn" onClick={() => document.getElementById('projects').scrollIntoView()}>MES PROJETS</button>
                        <button className="main-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>CONTACT</button>
                    </div>
                </div>
                   <div className="contact-info-wrapper">
            <div className="contact-card-futu" data-tilt>
                
                <div className="contact-icon"><i className="fas fa-envelope"></i> </div>
              
                <p>a.elguena2623@uca.ac.ma</p>
               <div class="li"><a  href="https://a.elguena2623@uca.ac.ma" className="contact-link">Send a message</a></div>
                
            </div>

            <div className="contact-card-futu" data-tilt>
                <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
                <h3>LinkedIn</h3>
                <p>Abderrazak Elguena</p>
                <a href="https://www.linkedin.com/in/abderrazak-elguena-b654653a8" target="_blank" className="contact-link">Connect with me</a>
            </div>

            <div className="contact-card-futu" data-tilt>
                <div className="contact-icon"><i className="fab fa-github"></i></div>
                <h3>GitHub</h3>
                <p>@aelguena2623-hue</p>
                <a href="https://github.com/aelguena2623-hue" target="_blank" className="contact-link">View my code</a>
            </div>
        </div>
                
                <div className="profile-container">
                    <img src="AB.jpeg" className="profile-img" alt="Ali" />
                </div>
              
            </section>
            <section id="abou">
                <h2>About Me</h2>
                <div className="about-card">
                    <p className="about-text">
                        Currently a <span className="highlight-with-img">Computer Science student (L2)</span>, 
                        my journey began in the mountains of <span className="highlight-with-img">Ourika (Setti Fatma)<img src="aghbalou.jpeg" className="hover-img" /></span>where I obtained my Baccalaureate. I then moved to Marrakesh to pursue my studies 
                        at the <span className="highlight-with-img">Faculty of Sciences Semlalia<img src="fssm.jpeg" className="hover-img" /></span>
                        starting with a rigorous year in 
            <strong> MIP</strong> before specializing in Informatics. 
            
            <br/><br/>
            
            Passionate about modern tech, I now focus on building interactive interfaces using 
            <strong> React</strong> and <strong> jQuery</strong>. My goal is to become a proficient 
            <strong> Full-Stack Developer</strong>, combining my solid scientific background with 
            creative software solutions to solve real-world problems.
                    </p>
                </div>
            </section>

            <section id="skills">
                <h2>My Skills</h2>
                <div className="skills-container-futuristic">
                    {/* React JS Card */}
                    <div className="futuristic-card">
                        <div className="card-number">01</div>
                        <div className="card-content">
                            <h3>React JS</h3>
                            <p>Component-based, Hooks, Context API</p>
                            <div className="level-container">
                                <span>Level:</span> <span className="percent">85%</span>
                                <div className="progress-bar-futu">
                                    <div className="progress-fill-futu" data-per="85%" style={{width: '0', background: '#61DBFB'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="futuristic-card">
                        <div className="card-number">02</div>
                        <div className="card-content">
                            <h3>JS & jQuery</h3>
                            <p>DOM Manipulation, AJX, jQuery Effects</p>
                            <div className="level-container">
                                <span>Level:</span> <span className="percent">90%</span>
                                <div className="progress-bar-futu">
                                    <div className="progress-fill-futu" data-per="90%" style={{width: '0%', background: '#F7DF1E'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="futuristic-card">
                        <div className="card-number">03</div>
                        <div className="card-content">
                            <h3>HTML & CSS</h3>
                            <p>Semantic HTML, Flexbox, Grid, RWD</p>
                            <div className="level-container">
                                <span>Level:</span> <span className="percent">95%</span>
                                <div className="progress-bar-futu">
                                    <div className="progress-fill-futu" data-per="95%" style={{width: '0%', background: '#E34F26'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

 <section id="formation" className="formation-section">
    <h2 className="section-title">Educational Journey</h2>
    <div className="timeline">
        <ul>
            <li className="timeline-item">
                <div className="timeline-content">
                    <span className="date">2026 - Present</span>
                    <h3>Informatics Specialization (L2)</h3>
                    <p>Faculty of Sciences Semlalia (FSSM), Marrakesh.</p>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-content">
                    <span className="date">2024 - 2025</span>
                    <h3>MIP (Math, Info, Physics)</h3>
                    <p>Rigorous foundational year at <span className="highlight-with-img"> FSSM, Marrakesh.<img src="fssm.jpeg" className="hover-img" /></span></p>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-content">
                    <span className="date">2023 - 2024</span>
                    <h3>Baccalaureate in Sciences</h3>
                    <p><span className="highlight-with-img">Obtained in Ourika (Setti Fatma) <img src="aghbalou.jpeg" className="hover-img" /></span>with honors.</p>
                </div>
            </li>
        </ul>
    </div>
</section>
          <section id="projects">
    <h2 className="section-title">My Projects</h2>
    <div className="swiper mySwiper">
        <div className="swiper-wrapper">
            
            <div className="swiper-slide">
                <ProjectCard 
                    title="Ourika Valley" 
                    desc="Tourism website for the Ourika Valley" 
                    tech={["HTML", "CSS"]} 
                    link="https://aelguena2623-hue.github.io/elgana/" 
                    img="p2.png" 
                />
            </div>

            <div className="swiper-slide">
                <ProjectCard 
                    title="Football" 
                    desc="A football browsing website." 
                    tech={["HTML", "CSS", "JS"]} 
                    link=" https://aelguena2623-hue.github.io/fotbol/" 
                    img="fot.png" 
                />
            </div>

            <div className="swiper-slide">
                <ProjectCard 
                    title="AI Chatbot" 
                    desc="A website about Mount Toubkal"
                    tech={["HTML", "CSS", "JS"]} 
                    link=" https://aelguena2623-hue.github.io/toubkal/" 
                    img="toubkal.png" 
                />
            </div>

        </div>

      
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

        <div className="swiper-pagination"></div>
    </div>
</section>

            
           
<section id="contact" className="contact-section">
    <h2 className="section-title">Get In Touch</h2>
    <div className="contact-container">
       

        <form className="contact-form-futu">
            <div className="input-group">
                <input type="text" placeholder="Your Name"  />
            </div>
            <div className="input-group">
                <input type="email" placeholder="Your Email" />
            </div>
            <div className="input-group">
                <textarea placeholder="Your Message" rows="5" ></textarea>
            </div>
            <button type="submit" className="main-btn">Send Message <i className="fas fa-paper-plane"></i></button>
        </form>
    </div>
</section>

<footer style={{textAlign: 'center', padding: '40px 0', opacity: '0.6', fontSize: '0.9rem'}}>
    <p>© 2026 Abderrazak Elguena. project.</p>
</footer>

            <div className="chat-button" onClick={() => $('#chatBox').fadeToggle()}><i className="fas fa-comment-dots"></i></div>
            <ChatBot />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);