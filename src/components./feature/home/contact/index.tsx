import ContactForm from "./contact-form";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-stone-50 p-4">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
