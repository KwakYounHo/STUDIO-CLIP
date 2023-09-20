import * as React from "react";
import ContactForm from "@/components/Contact/ContactForm";

const InquiryContainer: React.FC = () => {
  return (
    <div className={"contactFormContainer"}>
      <h3 className={"contactFormTitle"}>inquiry</h3>
      <div className={"w-10/12 md:min-w-[694.5px] md:max-w-[896.25px]"}>
        <ContactForm />
      </div>
    </div>
  );
};
export default InquiryContainer;
