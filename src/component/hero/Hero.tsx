import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="container flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 pt-[12vh]"
    >
      {/* Text Content */}
      <div
        className="md:w-1/2 mb-10 md:mb-0"
        data-aos="fade-right"
      >
        <p className="text-sm mb-2 text-[#8490ff]">Hello,</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I&apos;m a Web Developer
        </h1>
        <p className="mb-6 text-gray-700 leading-relaxed">
          I specialize in creating responsive and dynamic web applications
          using modern technologies.
        </p>
        <a
          href="/CV.pdf"
          download
          className="inline-block px-6 py-3 rounded shadow bg-[#8490ff] text-white hover:bg-gradient-to-br from-purple-600 to-blue-500 transition-all duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 flex justify-center bg-transparent"
        data-aos="fade-left"
        data-aos-anchor="#hero"
        data-aos-offset="400"
        data-aos-duration="600"
      >
        <Image
          src="/assets/tiny.png"
          alt="Developer working on a laptop"
          width={400}
          height={400}
          priority
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export { Hero };
