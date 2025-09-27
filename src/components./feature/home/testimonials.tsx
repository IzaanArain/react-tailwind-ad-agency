import { TESTIMONIALS } from "../../../constants";
import { cn } from "../../../utils";

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-stone-50 px-8 py-20">
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        What Client Say
      </h2>
      <div className="container mx-auto flex flex-wrap gap-8">
        {TESTIMONIALS.map((testimonials) => (
          <div
            key={testimonials.author}
            className={cn(
              "flex-1 rounded-3xl p-4 min-w-[250px] flex flex-col items-start",
              testimonials.bgColor
            )}
          >
            <img
              src={testimonials.image}
              alt={testimonials.author}
              className="mb-4 rounded-3xl object-cover"
            />
            <p className="mb-4 text-lg md:text-xl lg:text-2xl">
              {testimonials.text}
            </p>
            <div className="mt-6">
              <p className="font-bold">{testimonials.author}</p>
              <p className="text-sm">{testimonials.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
