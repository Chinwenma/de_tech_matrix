import Image from "next/image";



const Hero: React.FC = () => {
  return (
    <section className=" container flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 pt-[12vh]" id="#">
      {" "}
      <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
        {" "}
        <p className="text-sm mb-2 text-[#8490ff]">Hello,</p>{" "}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {" I'm a Front-End Developer"} 
        </h1>{" "}
        <p className="mb-6">
          {" "}
          I specialize in building responsive and interactive web applications
          using modern technologies like React, Next.js, and Tailwind CSS.{" "}
        </p>{" "}
        <a
          href="/docs/CV.pdf"
          download
          className="px-6 py-3  rounded shadow  bg-[#8490ff] text-white hover:bg-gradient-to-br from-purple-600 to-blue-500 transition-all duration-200"
        >
          Download CV
        </a>{" "}
      </div>{" "}
      <div className="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        {" "}
        <Image
          src="/assets/matrix2.png"
          alt="Developer Illustration"
          width={400}
          height={400}
          className="rounded-xl object-cover bg-transparent"
        />{" "}
      </div>{" "}
    </section>
  );
};

export { Hero };
