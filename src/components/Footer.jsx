import React from "react";

export default function Footer() {
    return (
        <footer>
            <p> &copy; {new Date().getFullYear()} Copyright: BeAyanK</p>
            <div className="f-contact">
                <a href="mailto:beaayank@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/mail.png" className="mail" alt="mail" />
                </a>
                <a href="https://github.com/BeAyanK" target="_blank" rel="noopener noreferrer">
                    <img src="/images/git.png" className="github" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/ayan-khan-work/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.png" className="linkedin" alt="linkedin" />
                </a>
                <a href="https://twitter.com/ChhodoYrr" target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter.png" className="twitter" alt="twitter" />
                </a>
                <a href="https://medium.com/@ultrainstinct" target="_blank" rel="noopener noreferrer">
                    <img src="/images/medium.png" className="medium" alt="medium" />
                </a>
            </div>
        </footer>
    )
}
