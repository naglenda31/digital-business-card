

const CardBody = () => {
    return (
        <div className="flex flex-col gap-4 px-4">
            <div className="card-body-section">
                <h3 className="section-title">About</h3>
                <p className="text-sm">Hi, I am a Frontend Web Developer with 1+ years of experience in the industry. Freelancing I have successfully completed multiple jobs in Upwork, you can check my profile there <a href="https://www.upwork.com/freelancers/~013734e5927d51861d" className="underline hover:text-rose-400">Glenda N Web Developer</a>. I am always open to learn more efficient solutions and new programming languages and frameworks. I love working in a team setting and fast-paced environment and I can also work on my own.</p>
            </div>
            <div className="card-body-section">
                <h3 className="section-title">Skills</h3>
                <ul className="list-disc text-sm grid grid-cols-2">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
            </div>
        </div>
    )
}


export default CardBody;