import Image from 'next/image'
import Link from 'next/link'

export default function About2(props:any) {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About Me
        </h1>

        <section className="mb-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <Image
              src="/nr1.png"
              alt="Working on a project"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-400">My Journey</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate Software Engineer with a keen interest in microservices, finance and robust backends. My journey in tech started when I built my first website in react at the age of 18, and since then, I've been on an exciting path of continuous learning and growth.
            </p>
            <p className="text-gray-300">
              With a background in computer science and years of industry experience, I've had the opportunity to work on diverse projects ranging from small mobile applications to large-scale legacy enterprise applications.
            </p>
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <Image
              src="/nr2.png"
              alt="Collaborating with team"
              quality={100}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-400">What I Do</h2>
            <p className="text-gray-300 mb-4">
              I specialize in building performant and scalable and financial applications using technologies like .NET, Docker, Terraform and SQL. My approach to development is centered around creating clean, maintainable code and delivering exceptional user experiences.
            </p>
            <p className="text-gray-300">
              Beyond coding, I'm passionate about frisbee-golf and climbing. These activities not only keep me active and healthy but also help me stay focused and motivated in my work.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400">Let's Create Something Amazing</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>
          <Link onClick={(e) => props.behaviour(e)} href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  )
}

