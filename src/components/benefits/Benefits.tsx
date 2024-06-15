import React from "react";
import Card from "../card/Card";
import { HiAcademicCap, HiUsers } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import Image from "next/image";

const Benefits = () => {
  const Cards = [
    {
      id: 1,
      icon: <HiAcademicCap size={25} />,
      title: "Expert and Qualified Trainers",
      desc: `We have best, skilled, and qualified trainers in Mike's gym. 
       We have trainers with over 10 years of working, teaching and training experience.`,
    },
    {
      id: 2,
      icon: <IoCalendarOutline size={25} />,
      title: "Flexible Workout Time",
      desc: `Mike's gym has one of the best flexible workout time schedule. 
       We provide fitness services for our members, base on their convinient time.`,
    },
    {
      id: 3,
      icon: <HiUsers size={25} />,
      title: "Special Plans And Bonus",
      desc: `We have special plans that allows families to access our fitness services at cheap 
       and discount prices. We also provide bonuses to our VIP members.`,
    },
  ];
  return (
    <section className="w-full py-10" id="benefits">
      <div className="container">
        <h2 className="text-2xl font-bold uppercase text-primary-500">
          {`It's`} more than just gym
        </h2>
        <p className="mt-3 leading-tight text-primary-300">
          We have world best fitness equipments, instructors and we provide{" "}
          amazing and <br /> affordable fitness classes for everyone.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          {Cards.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-14">
          <div className="flex-1 min-h-[300px] relative">
            <Image
              fill
              src="/benefitsGraphic.png"
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="flex-[2]">
            <h2 className="text-2xl font-bold mb-4 uppercase text-primary-500">
              Millions of members getting fit daily
            </h2>
            <p className="w-[85%] text-primary-300">
              Millions of members around the world always go for workout to have
              good shapes and <br /> to improve health status. Regular physical
              activity is one of the most important things you <br /> can do for
              your health. Being physically active can improve your brain
              health, help <br /> manage weight, reduce the risk of disease,
              strengthen bones and muscles, and improve <br /> your ability to
              do everyday activities.
            </p>
            <button className="font-bold py-2 px-10 mt-6 rounded-full
             cursor-pointer text-white bg-primary-400"
            >
              Join
            </button>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Benefits;
