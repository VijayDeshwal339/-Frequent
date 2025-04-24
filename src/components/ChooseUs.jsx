import React from "react";
import Bulb from "../assets/bulb.png"
import unique from "../assets/unique.png"
import traditional from "../assets/traditional.png"
import special from "../assets/special.png"
import creative from "../assets/creative.jpg"
import bread from "../assets/bread.jpg"
import talk from "../assets/talk.jpg"
import hand from "../assets/hand.png"
import Heart from "../assets/Heart.png"
import who from "../assets/who.png"

const ChooseUsPage = () => {
  return (
    <div className="bg-[#fff8f2]">
    <div className="text-gray-800 w-[90%] sm:w-[80%] mx-auto">
      {/* Top Section */}
      <section className="py-12 ">
        <div className="flex items-center">
         <img src={Bulb} alt='' />
        <p className="font-bold text-3xl text-[#890227]">Choose us<span className="text-[#aca8a7] italic"> ...Let’s work together</span></p>
        </div>
        {/* Definitions */}
        <div className="sm:flex justify-between mt-8">
          <div>
            <p className="italic font-semibold">vintage <span className="not-italic text-sm font-normal">adj.</span></p>
            <p className="text-sm">of old, recognized and enduring interest, importance or quality: classic</p>
          </div>
          <div>
            <p className="italic font-semibold">hippo <span className="not-italic text-sm font-normal">n.</span></p>
            <p className="text-sm">
              meaning versatile, strong, friendly, assertive, caring, quirky and supportive
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-10 grid md:grid-cols-3 gap-10  mx-auto text-center">
        {/* Card 1 */}
        <div className="space-y-4 flex flex-col items-center">
          <img src={unique} alt="unique" className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] " />
          <h3 className="text-xl font-semibold">
            Why <span className="text-orange-500">We’re unique</span>
          </h3>
          <hr className="w-[40%] h-[4px] bg-gray-400 border-none self-center" />
          <p className="text-sm">
            We believe in support, customer service and being available to our clients 24/7.
            We answer our phones, emails and texts. We’re unique that way! We provide our clients with the best service and care.
          </p>
        </div>

        {/* Card 2 */}
        <div className="space-y-4 flex flex-col items-center">
          <img src={traditional} alt="traditional" className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] " />
          <h3 className="text-xl font-semibold">
            Why <span className="text-green-600">We’re traditional</span>
          </h3>
          <hr className="w-[40%] h-[4px] bg-gray-400 border-none self-center" />
          <p className="text-sm">
            Our values are traditional, but our approach is not. Our clients are people we want to work with.
            We enjoy the work we do, the people and businesses we do it with and for. Get in touch…you’ll see the difference.
          </p>
        </div>

        {/* Card 3 */}
        <div className="space-y-4 flex flex-col items-center">
          <img src={special} alt="special" className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] " />
          <h3 className="text-xl font-semibold">
            Why <span className="text-red-500">We’re special</span>
          </h3>
          <hr className="w-[40%] h-[4px] bg-gray-400 border-none self-center" />
          <p className="text-sm">
            We enjoy what we do and who we do it with! Our passion is very apparent. Get in touch…you’ll see the difference.
          </p>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex justify-center gap-4 py-6">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-full">Learn More</button>
        <button className="bg-orange-400 text-white px-6 py-2 rounded-full">Contact Us</button>
      </div>

      {/* Golden Rule Section */}
      <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start py-10 px-4 gap-8">
      <img src={Heart} alt="Heart Icon" className=" w-10 h-10 sm:w-24 sm:h-24 object-contain" />

      <div className="w-full flex flex-col justify-center text-center">
       <p className="font-play">
          We live and work by the<br />
          <span className="text-3xl sm:text-6xl font-bold text-yellow-600 mt-2">GOLDEN RULE</span>
      </p>
      <p className="italic font-medium text-xl sm:text-2xl mt-2">
         “Do unto others as you would have them do unto you”
      </p>
     </div>
    </section>


      {/* Frequent Research Section */}
      <section className="py-12 w-[100%]">
        <img src={who} alt='' className="w-[100%]"/>
        <div className="flex flex-col sm:flex-row items-center justify-center it sm:justify-start">
        <img src={hand} alt='' className="w-10-h-10" />
        <h2 className="text-xl sm:text-3xl font-bold text-pink-900 text-center">
          We are <span className="text-gray-500 font-light italic">Frequent Research</span>
        </h2>
        </div>

        

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white py-6  rounded-lg text-center space-y-4 shadow-2xl">
            <img src={creative} alt="creative people" className="mx-auto h-[150px] w-[150px] sm:h-[250px] sm:w-[250px]" />
            <hr className="h-[1px] bg-gray-400 border-none w-full" />
            <div className="px-6 space-y-4">
            <p className="text-xl font-bold italic text-orange-500">We are a group of<br></br>
              <span>… dedicated, creative people</span></p>
            <p className="text-sm ">
              We love print. We love graphics and design. We love our team. Come check us out.
            </p>
          </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white py-6 shadow-2xl rounded-lg text-center space-y-4">
            <img src={bread} alt="bread butter" className="mx-auto h-[150px] w-[150px] sm:h-[250px] sm:w-[250px]" />
            <hr className="h-[1px] bg-gray-400 border-none w-full" />
            <div className="px-6 space-y-4">
            <p className="text-lg font-bold text-gray-400">Our <span className=" text-green-600">bread & butter</span></p>
            <p className="text-sm">
              Trusted long lasting relationships are the b & b of VHMM.
              We value & build relationships with our clients, vendors, friends, family and each other.
              It is important for a healthy & happy work environment.
            </p>
          </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white py-6 shadow-2xl rounded-lg text-center space-y-4">
            <img src={talk} alt="lets talk" className="mx-auto h-[150px]  sm:h-[250px] sm:w-[250px]" />
            <hr className="h-[1px] bg-gray-400 border-none w-full" />
            <div className="px-6 space-y-4">
            <p className="text-lg font-bold text-red-500">Got an idea?<br></br><span> Let’s talk</span></p>
            <p className="text-sm">
              We know that listening is an invaluable skill. We like to listen.
              Run your ideas by us and we’ll give you our honest opinion. Call, email or text.
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    </div>
  );
};

export default ChooseUsPage;
