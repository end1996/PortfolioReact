import { techIcons } from "../assets/images/icons";

function Stack() {
    const technologies = [
        { name: 'React', icon: techIcons.react },
        { name: 'Flutter', icon: techIcons.flutter },
        { name: 'Bootstrap', icon: techIcons.bootstrap },
        { name: 'Git', icon: techIcons.git },
        { name: 'HTML', icon: techIcons.html },
        { name: 'CSS', icon: techIcons.css },
        { name: 'PHP', icon: techIcons.php },
        { name: 'MySQL', icon: techIcons.mysql },
        { name: 'WordPress', icon: techIcons.wordpress },
        { name: 'JavaScript', icon: techIcons.javascript },
        { name: 'Java', icon: techIcons.java },
        { name: 'Python', icon: techIcons.python },
        { name: 'TypeScript', icon: techIcons.typescript }
    ]
    return (
        <>
            <section id="stack" className="text-center my-5">
                <h2 className="mb-4">Stack de tecnologías</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {technologies.map((tech, index) => (
                        <div key={index} className="m-3 text-center tech-icon">
                            <img src={tech.icon} alt={tech.name} className="img-fluid mb-2" />
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stack;

