import './Portfolio.css';

function Portfolio() {
    return (
        <div id="Portfolio">
            <div className="portfolio-container" data-aos="fade-up">
                <h1 className="portfolio-title">My Portfolio</h1>
                <div className="portfolio-grid">
                    <a
                        href="https://made-by-human.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        data-aos="fade-up"
                    >
                        <img src="https://i.postimg.cc/k5snZ3JJ/SCR-20250511-qnwr.png" alt="Made By Human Project" />
                        <span className="portfolio-item-title">Made By Human</span>
                    </a>
                    <a
                        href="https://expofp-brazil.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="50"
                    >
                        <img src="https://i.postimg.cc/J0Vdtg5y/Expo.png" alt="Expo FP Brazil Project" />
                        <span className="portfolio-item-title">Expo FP Brazil</span>
                    </a>
                    <a
                        href="https://rocketlauncher-f7105.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="50"
                    >
                        <img src="public/SCR-20250811-nqtj.png" alt="Rocket Launcher" />
                        <span className="portfolio-item-title">Launch The Rocket</span>
                    </a>
                    <a
                        href="https://waterjetcut.netlify.app/"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img src="public/SCR-20250811-nrkp.jpeg" alt="WaterJetCut Project (in" />
                        <span className="portfolio-item-title">WaterJetCut (publication process)</span>
                    </a>
                    <a
                        href="https://c1gap-fill-innovation.netlify.app/"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <img src="public/SCR-20250811-numv.jpeg" alt="Moodle Education Project" />
                        <span className="portfolio-item-title">Moodle Education 35+ English Exercises in Vanilla JS (iframe)</span>
                    </a>
                    <a
                        href="#"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <img src="https://i.postimg.cc/7L8K9Q3J/office.jpg" alt="Interactive Office Project" />
                        <span className="portfolio-item-title">Interactive Office</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;




