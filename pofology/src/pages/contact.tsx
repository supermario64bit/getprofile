import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import emailjs from 'emailjs-com';

type Props = {};

const Contact = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessageSent(false);

    if (!form.current) return;

    emailjs
      .sendForm('service_vvfpggf', 'template_ve16uxg', form.current, 'Mpk3WVp3AgiW5BKaL')
      .then(() => {
        setIsSending(false);
        setMessageSent(true);
        form.current?.reset();
      })
      .catch((error) => {
        setIsSending(false);
        console.error('EmailJS error:', error);
      });
  };

  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Trivandrum</p>
              <p>Kerala, India</p>
              <p className="mt-4">+91 96454 54004</p>
              <p>hello@gokulsujan.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid gap-8 md:grid-cols-2">
                <Input name="user_name" placeholder="Your Name" required />
                <Input name="user_email" type="email" placeholder="Email Address" required />
              </div>
              <div className="mt-8">
                <Input name="subject" placeholder="Subject" required />
              </div>
              <div className="mt-8">
                <TextArea name="message" placeholder="Message" required />
              </div>
              <div className="mt-8">
                <Button
                  type="submit"
                  className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </Button>
                {messageSent && (
                  <p className="mt-4 text-green-600">Message sent successfully!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
