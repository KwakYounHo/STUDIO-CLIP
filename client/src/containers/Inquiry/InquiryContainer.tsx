import * as React from 'react';
import ContactForm from '@/components/Contact/ContactForm';

const InquiryContainer: React.FC = () => {
  return (
    <div className={'w-screen h-screen flex flex-col items-center justify-center gap-16'}>
      <h3 className={"uppercase text-content-text text-4xl font-black"}>inquiry</h3>
      <div className={'w-10/12 md:min-w-[694.5px] md:max-w-[896.25px]'}>
        <ContactForm />
      </div>
    </div>
  )
}
export default InquiryContainer;