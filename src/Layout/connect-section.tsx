import { FC, useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import SectionHeading from "../Components/section-components/heading";
import Section from "../Components/section-components/section";
import SectionBlurBg from "../Components/section-components/blur-bg";
import FormInput from "../Components/connect-section.tsx/form-input";

const ConnectSection: FC = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="relative z-[1] overflow-hidden" id="connect">
      <Section classname={"py-16 flex flex-col gap-3"}>
        <SectionHeading heading={"GET IN TOUCH"} />
        <div className="relative top">
          <SectionBlurBg top={"top-80"} left={"left-[40%]"} />

          <div className="grid grid-cols-1/3 gap-14">
            <div className="flex flex-col gap-3 ml-[0.5%] mt-8">
              <p className="text-2xl font-semibold ml-[3%] text-primary-500 dark:text-secondary-200 ">
                Let's Connect! :{")"}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/araf-khatri-9819851b4/"
                  className="flex gap-3 items-center"
                >
                  <BsLinkedin className="h-5 w-5 text-[#0072b1]" />
                  <p>@Araf Khatri</p>
                </a>
                <a
                  target="_blank"
                  href="mailto:arafkhatri0@gmail.com"
                  className="flex gap-3 items-center"
                >
                  <IoMdMail className="h-5 w-5 text-[#D44638]" />
                  <p>arafkhatri0@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="border border-primary-200 bg-primary-100 dark:border-primary-900 dark:bg-primary-1000 shadow-form shadow-secondary-500-25">
              <p className="p-4 font-bold text-2xl text-center border-b border-primary-200 dark:border-primary-900">Contact Me!</p>
              <form className="grid grid-cols-2 gap-6 p-6">
                <FormInput ref={usernameRef} label={"Your Name"} type="text" />
                <FormInput ref={usernameRef} label={"How can I Connect?"} type="text" />
                <FormInput classname="col-span-2" ref={usernameRef} label={"Subject"} type="text" />
                <FormInput classname="col-span-2" ref={usernameRef} label={"Description"} type="text-area" />
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ConnectSection;
// SOON
// POST api/send-mail
// const obj = {name: "", connect: "", subject: '', description: ""}
// const response = await fetch("/api/send-mail", {
//   method: "POST",
//   body: JSON.stringify({data: obj}),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
