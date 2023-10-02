import * as React from "react";
import ContactForm from "@/app/contact/components/ContactForm";

const InquiryContainer: React.FC = () => {
  return (
    <div className={"contactFormContainer"}>
      <h3 className={"contactFormTitle"}>inquiry</h3>
      <div className={"w-full lg:w-auto"}>
        <ContactForm />
      </div>
    </div>
  );
};
export default InquiryContainer;
