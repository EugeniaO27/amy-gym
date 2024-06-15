import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="w-full py-10" id="contact-us">
      <div className="container">
        <h2 className="text-2xl font-bold uppercase text-primary-500">
          Join now to get in shape
        </h2>
        <p className="w-full md:w-[60%] mt-3 text-primary-300">
          Take the first step by contacting our {`customer's`} service.
          {`customer's`} service is available 24/7 and we {`can't`} wait to
          welcome you in our fitness center.
        </p>
        <div className="flex flex-col md:flex-row gap-10 mt-5">
          <div className="flex-1">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                className="px-5 py-2 border-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-5 py-2 border-2"
              />
              <textarea
                placeholder="Message..."
                className="h-[100px] px-5 py-2 border-2 resize-none"></textarea>
            </form>
            <button className="px-10 py-2 mt-5 rounded-full font-semibold text-white bg-primary-400">
              submit
            </button>
          </div>
          <div className="flex-1 rounded-[20px] overflow-hidden  bg-primary-200">
            <div className="w-full h-[200px] md:h-[400px] relative">
              <Image
                fill
                src="/images/contactGraphic.png"
                alt="contact image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
