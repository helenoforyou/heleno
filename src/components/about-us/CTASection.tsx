import ScrollReveal from "../../utils/ScrollReveal";

const CTASection = ({
  title,
  desc,
  a1Text,
  a1Link,
  a2Text,
  a2Link
}: {
  title: string;
  desc: string;
  a1Text: string;
  a1Link: string;
  a2Text: string;
  a2Link: string;
}) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-3xl font-semibold">{title}</h2>
          <p className="text-xl text-gray-600 mb-12">{desc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={a1Link}
              className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 text-white bg-black active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              {a1Text}
            </a>

            <a
              href={a2Link}
              className="px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 border border-gray-300 text-gray-800 bg-white active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              {a2Text}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
