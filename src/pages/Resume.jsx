import resumeData from "../data/resume.json";

export default function Resume() {

    return (
        <>
            <main>
                <header>
                    <h1>Anton Dahlström</h1>
                    <div className="contact-info">
                        <a href="tel:076-836-70-99">076-836 70 99</a>
                        <a href="mailto:anton.dahlstrom@hotmail.com">anton.dahlstrom@hotmail.com</a>
                        <a href="https://github.com/Anton-Dahlstrom" target="_blank">GitHub</a>
                        <a href="https://linkedin.com/anton-dahlström" target="_blank">LinkedIn</a>
                    </div>
                </header>

                <div className="section">
                    <h2>ABOUT ME</h2>
                    <p>Driven and goal-oriented individual who appreciates challenges and problem-solving. During my time
                        in esports, I constantly strived to improve my abilities and processes, and I&apos;m now looking forward to
                        doing the same as a software developer.</p>
                </div>

                <div className="section">
                    <h2>SKILLS</h2>
                    <div className="skills">
                        <span className="skill">C#</span>
                        <span className="skill">.NET</span>
                        <span className="skill">Python</span>
                        <span className="skill">SQL</span>
                        <span className="skill">Javascript & React</span>
                        <span className="skill">HTML & CSS</span>
                        <span className="skill">Data structures & Algorithms</span>
                    </div>
                </div>

                <div className="section">
                    <h2>PROJECTS</h2>
                    <div className="project">
                        <h3>Odds website</h3>
                        <p>Developed a fully functional dynamic website in Python with a PostgreSQL database, password
                            encryption, and OAuth2 login authentication. Some frameworks and libraries used include:
                            FastAPI, Jinja, SQLAlchemy & Alembic.</p>
                    </div>
                    <div className="project">
                        <h3>SEO Feedback Program</h3>
                        <p>Developed a program during my time as a copywriter that provided feedback on product descriptions
                            based on SEO rules specified by my employer. The program was written in Python using the regex
                            library and integrated with Google Sheets API.</p>
                    </div>
                </div>

                <div className="section">
                    <h2>Education</h2>
                    {resumeData.education.map((edu, index) => (
                        <div className="project" key={index}>
                            <div className="title-date">
                                <h3>{edu.school} - {edu.degree}</h3>
                                <h3>{edu.startDate} - {edu.endDate}</h3>
                            </div>
                            <p>{edu.info}</p>
                        </div>
                    ))}
                </div>

                <div className="section">
                    <h2>Work Experience</h2>
                    {resumeData.jobs.map((job, index) => (
                        <div className="project" key={index}>
                            <div className="title-date">
                                <h3>{job.position} {job.company}</h3>
                                <h3>{job.startDate} - {job.endDate}</h3>
                            </div>
                            {job.info.map((line, lineindex) => (
                                <p key={lineindex}>{line}<br></br></p>
                            ))}
                        </div>
                    ))}
                </div>

            </main >
        </>
    );
}