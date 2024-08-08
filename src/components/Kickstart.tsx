import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const raleway = Raleway({
  subsets: ["latin"],
});
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const Kickstart = () => {
  return (
    <div className="w-full h-auto relative mt-20">
      <div>
        <section className={`${raleway.className} "bg-slate-100 text-black"`}>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Kickstart your marketing
              </h2>

              <p className="mt-4 text-gray-500">
                Insta Post PH offers comprehensive event management and social
                media management for event services, including pre-event
                planning, content creation, audience engagement, and post-event
                analysis, ensuring a seamless and impactful event experience
                from start to finish.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-yellow-400/10"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Photography
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Insta Post delivers high-quality photography that showcases
                  your brand or products in the best light possible, enhancing
                  your overall image and professionalism.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-yellow-400/10 hover:shadow-yellow-400/10"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Videography
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Harness the potential of video marketing to amplify your
                  bran's reach and engagement. With our expertise, your message
                  will resonate with your audience, leaving a lasting impression
                  and driving action
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-yellow-400/10 hover:shadow-yellow-400/10"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Social Media Management
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  We curate tailored social media strategies for each month of
                  your business, crafted a month in advance, ensuring timely and
                  relevant content.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-yellow-400/10 hover:shadow-yellow-400/10"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Content Creation
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Insta Post PH offers comprehensive event management and social
                  media management for event services, including pre-event
                  planning, content creation, audience engagement, and
                  post-event analysis, ensuring a seamless and impactful event
                  experience from start to finish.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-yellow-400/10 hover:shadow-yellow-400/10"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">
                  Influencers
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Eagle-eyed monitoring and reporting, your campaign won't just
                  make waves—it'll make a splash big enough to create a tidal
                  wave of success! Jump into our pool of influencers and let
                  your brand ride the wave of influence like a pro surfer!
                </p>
              </a>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                className="inline-block rounded bg-yellow-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-200 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Kickstart;
