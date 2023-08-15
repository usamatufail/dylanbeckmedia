import { Form, Formik } from "formik";
import * as yup from "yup";
import { Element } from "react-scroll";
import { Animate, Input, Zoom } from "~/components";

const contactValidation = yup.object().shape({
  fName: yup.string().required("First name is required."),
  email: yup.string().email("Email is invalid!").required("Email is required."),
  phone: yup.string().required("Phone is required."),
  message: yup.string().required("Message is required."),
});

export const Contact = () => {
  return (
    <Element>
      <section
        className="min-h-[750px] md:min-h-[850px] bg-[url('/about-bg.png')] bg-cover bg-no-repeat flex flex-col justify-center items-center pt-[50px] md:pt-[unset] md:pb-[40px] px-[20px] py-[30px]"
        id="contact"
      >
        <div className="font-body flex flex-col justify-center items-center gap-[20px] max-w-[1300px] m-auto">
          <Animate>
            <p className="text-[#F8F9FA] text-[28px] md:text-[52px] font-body font-[500]">
              Contact
            </p>
          </Animate>
          <Zoom>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[50px] px-[20px] py-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] flex justify-center">
              <p className="text-[#b6b9ba] text-center font-body font-[400] text-[16px]">
                I am always excited to make new friends
              </p>
            </div>
          </Zoom>
          <div className="md:w-[700px] w-[350px] m-auto">
            <Formik
              initialValues={{
                fName: "",
                email: "",
                phone: "",
                message: "",
              }}
              onSubmit={(e) => {
                console.log(e);
              }}
              validationSchema={contactValidation}
            >
              <Form>
                <div className=" mt-[40px]">
                  <div className="grid md:grid-cols-2 gap-[10px]">
                    <Input type="text" name="fName" placeholder="First Name" />
                    <Input type="email" name="email" placeholder="Email" />
                    <Input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      isLarge
                    />
                    <Input
                      type="textarea"
                      name="message"
                      placeholder="Message"
                      isLarge
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-[#0dbfc3] px-[22px] py-[14px] rounded-[40px] flex gap-[8px] justify-center items-center text-[#000] text-[14px] font-body font-[500] border-[5px] border-solid border-[rgba(0,0,0,0.7)] shadow-sm"
                    >
                      Send Message
                      <img src="/svg/arrow.svg" alt="arrow" />
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </Element>
  );
};
