import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us | Bengal-IT',
  description: 'Get in touch with Bengal-IT team for direct strategy calls and web development inquiries.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <ContactForm />
    </div>
  );
}
