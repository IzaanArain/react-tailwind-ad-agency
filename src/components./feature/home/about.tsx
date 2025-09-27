import { ABOUT } from "../../../constants";
import { motion } from "motion/react";

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-emerald-50 px-6"
    >
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        About Us
      </h2>
      <div className="mb-10 flex items-center justify-center gap-4">
        {ABOUT.profileImages.map((image, index) => (
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: image.delay }}
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-1/4 rounded-3xl shadow-lg"
          />
        ))}
      </div>
      <p className="mb-4 max-w-4xl text-center text-xl md:text-4xl">
        {ABOUT.aboutUsText}
      </p>
    </section>
  );
};

export default About;
