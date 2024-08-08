import React from "react";

const AboutPhotography = () => {
  return (
    <div className="w-full h-auto relative bg-gray-100 py-20">
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-yellow-400 p-8 flex flex-col justify-center md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Why should you consider us for your photography needs?
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  We've got the lens for every occasion, whether it's products,
                  lifestyle moments, events, or store showcases.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-red-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="/two.png"
                className="h-40 w-full object-cover sm:h-56 md:h-full  object-top"
              />

              <img
                alt=""
                src="/ja.jpg"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPhotography;
