import { Modal } from "antd";
import { Animate, Buy, Zoom } from "~/components";
import { servicesData } from "~/data/services";
import { useState } from "react";

export const Services = () => {
  return (
    <>
      <section className="min-h-[1050px] bg-[url('/service-bg.png')] z-0 -mt-[130px] relative bg-cover bg-no-repeat flex flex-col justify-center items-center pt-[50px] md:pt-[unset] md:pb-[40px] px-[20px] py-[30px]">
        <div className="flex flex-col gap-[30px]">
          <Animate>
            <h1 className="text-[#fff] text-[28px] md:text-[62px] font-[500] font-body leading-[1.125] text-center mt-[90px] md:mt-[150px]">
              Our Top Notch Services
            </h1>
          </Animate>
          <div className="grid md:grid-cols-4 gap-[20px] md:pt-[40px]">
            {servicesData?.map((card) => {
              return (
                <Zoom key={card.heading}>
                  <Card
                    heading={card.heading}
                    icon={card.icon}
                    text={card.text}
                    modalText={card.modalText}
                  />
                </Zoom>
              );
            })}
          </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-[#0FF]" />
    </>
  );
};

const Card = ({ heading = "", icon = "", text = "", modalText = "" }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="bg-[rgba(255,255,255,0.05)] rounded-[20px] px-[20px] py-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.15)] flex flex-col gap-[15px] justify-center">
        <div className="flex flex-col w-full min-h-[250px] gap-[20px] px-[10px] py-[20px]">
          {/* Header */}

          <img src={icon} alt="elite-branding" className="w-[80px]" />
          <Animate>
            <h2 className="font-[500] text-[24px] h-[70px] text-white font-body">
              {heading}
            </h2>
          </Animate>
          <Animate>
            <p className=" text-[16px] h-[120px] font-body font-[400] text-[rgba(255,255,255,0.7)]">
              {text}
            </p>
          </Animate>
          <CustomModal
            open={open}
            setOpen={setOpen}
            modalText={modalText}
            heading={heading}
            icon={icon}
          />
          <div className="">
            <Animate>
              <Button onClick={showModal} />
            </Animate>
          </div>
        </div>
      </div>
    </>
  );
};

const Button = ({ text = "Learn More", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00B7FF] flex items-center text-back gap-[12px] w-[150px] rounded-[8px] px-[15px] py-[10px] text-[1.6rem] font-body font-[500]"
    >
      <span>{text}</span>
      <img src="/svg/learn-arrow.svg" alt="Arrow" />
    </button>
  );
};

export const CustomModal = ({ open, setOpen, modalText, heading, icon }) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title=""
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        width="95vw"
        bodyStyle={{
          paddingTop: "3.5rem",
          // paddingRight: "30px",
          background: "#071419",
        }}
        style={{ padding: "20px" }}
      >
        <div className="flex items-center justify-center gap-[2.4rem]">
          <img src={icon} alt="elite-branding" />
          <h2 className="font-[600] text-[26px] text-white font-body">
            {heading}
          </h2>
        </div>
        <p className="text-[1.8rem] mt-[3rem] text-white text-center">
          {modalText}
        </p>
        <div className="flex justify-center">
          <Buy />
        </div>
      </Modal>
    </>
  );
};
