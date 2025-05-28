import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';
import { title } from 'process';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setAlert({ type: '', message: '' });

    try {
      const now = new Date();
      await emailjs.send(
        'service_vvfpggf',
        'template_ve16uxg',
        {
          'name': formData.name + ' - ' + formData.email,
          'email': 'hello@gokulsujan.com',
          'title': formData.subject,
          'message': formData.message,
          'time': `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`,
        },
        'Mpk3WVp3AgiW5BKaL'
      );
      setAlert({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to send message. Please try again later. Error' + error });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>

        <div className="col-span-2">
          {alert.message && (
            <div
              className={`mb-4 rounded px-4 py-3 text-sm ${
                alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {alert.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 md:grid-cols-2">
              <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
              <Input
                placeholder="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-8">
              <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="mt-8">
              <TextArea
                placeholder="Message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-8">
              <Button
                className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
                type="submit"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
