import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
});
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const Testimonial = () => {
  const clients = [
    {
      company: "Homebless",
      message:
        "From the very beginning of negotiating with them, they were very responsive and understanding of our requests for our campaign shoot, and when we asked for some details to make the partnership possible, they were reliable and easy to talk to. ",
      logo: "/rose.png",
    },
    {
      company: "OMSMPC",
      message:
        "Teaming up with Instapost PH for our company's AVP and seller stories was a seamless experience. Their team creatively made videos that perfectly captured our brand's essence and seller narratives. We recommend Instapost PH for any video production needs",
      logo: "/rose.png",
    },
    {
      company: "Ilocaneza",
      message:
        "The photos were very nice and output was released within 24 hous! So fast! Hi dear, Thank you so much for the promo you offered to startup tiny business like us. Wishing you more success!",
      logo: "/rose.png",
    },
    {
      company: "BUBBA SMOKEDMEAT.MNL",
      message:
        "Their photos definitely gave our little brand a boost. It gave us the edge we needed to stand out online. I found instapostph just as we weâ€™re starting our new business during the pandemic, to stand out online.",
      logo: "/rose.png",
    },
    {
      company: "Pegs and Beyond",
      message:
        "Instapostph made an ecellent video ad on products! The animation was fantastic and ad views (FB and IG) reached almost 10k and counting! The team clearly put their hearts and extra efforts on making the video ad. Thank you for the opportunity to work with you guys! Kudos!",
      logo: "/rose.png",
    },
    {
      company: "MAMACHOWS",
      message:
        "Discovering @instapostph services made it easier for me to fulfill that dream of having that good quality video for marketing. Loved the result, usually does everything by themselves - like me, I'm a one woman team. I do everything, from baking, to marketing, to taking photos of our products etc. Instapostph - fun to work with, professional and most of all very accommodating. Thanks guys!",
      logo: "/rose.png",
    },
    {
      company: "BIBSMANILA",
      message:
        "Instapost is my go to vendor when it comes to my professional photo and video requirements! Promise, they do a really amazing job. No mediocre work with a fast turn-around-time. Best bang for your back! I' m a happy suki!",
      logo: "/rose.png",
    },
    {
      company: "GALACTOBOMBS",
      message:
        "Sa sobrang sawa ko na sa products ko dahil everyday ko nakikita, when I saw shots natakam ako sa sarili kong products. Loved the results, ang ganda ng shots and looks soo classy :) Helped my business too. Ito na ginagamit kong Menu sa page ko. I got lot of good feedback.",
      logo: "/rose.png",
    },
    {
      company: "HIGH AND MIGHTY PH",
      message:
        "They ask and listen to what concept you like and really try their best to execute it according to your preference!!! 5 star for Instapost!!! The videos they made for our product is so nice!!! They are also friendly and very easy to communicate!!! They edited our revisions with no complain! Will definitely let them shoot our other products in the future!!!",
      logo: "/rose.png",
    },
    {
      company: "GAVA'S_KITCHEN",
      message:
        " One of the most affordable and excellent customer services in the city. The video ads that @instapostph made for Ava's Kitchen has helped us reach our target market. They were able to capture the angles that we'd want our customers to see through their professionally done photos and videos. Thank you @instapostph for helping Small Businesses thrive during this challenging times.",
      logo: "/rose.png",
    },
  ];
  return (
    <div className="w-full h-auto relative px-4 py-20">
      <h1
        className={`${raleway.className} text-center text-gray-600 text-5xl md:text-6xl pb-12`}
      >
        TESTIMONIAL <br />
        <span className={`${raleway.className} text-center text-lg`}>
          (Read what our client says to us)
        </span>
      </h1>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {clients.map((item, index) => (
          <div
            key={index}
            className="w-fit h-fit flex flex-col py-8 shadow-lg gap-3 px-2 hover:scale-105 duration-300 ease-out transition-all hover:cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full relative">
              <Image src={item.logo} alt="LOGO" fill className="object-cover" />
            </div>
            <div className="w-fit px-4">
              <h1
                className={`${raleway.className} text-lg md:text-2xl font-semibold inline-block`}
              >
                {item.company}
              </h1>
              <p className={`${raleway.className}`}>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
