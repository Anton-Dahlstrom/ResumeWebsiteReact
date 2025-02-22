
export default function Contact() {
    return (
        <>
            <main>
                <p className="contact-content">Feel free to contact me through any of the links below. <br />
                    I look forward to hearing from you!
                </p>
                <div className="contact-container">
                    <div className="image-link">
                        <a href="https://github.com/Anton-Dahlstrom" target="_blank">
                            <img src="./images/github.png" alt="" />
                            GitHub</a>
                    </div>
                    <div className="image-link">
                        <a href="https://www.linkedin.com/in/anton-dahlstr%C3%B6m-5a56a9297/" target="_blank">
                            <img src="./images/linkedin.png" alt="" />
                            LinkedIn</a>
                    </div>
                    <div className="image-link">
                        <a href="mailto:anton.dahlstrom@hotmail.com">
                            <img src="./images/email.png" alt="" />
                            Email</a>
                    </div>
                </div>
            </main>
        </>
    )
}