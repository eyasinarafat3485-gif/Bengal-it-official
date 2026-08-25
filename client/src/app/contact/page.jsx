import ContactForm from '../../components/ContactForm';
import FAQ from '../../components/FAQ';

export const metadata = {
  title: 'Contact Us | Bengal-IT',
  description: 'Get in touch with Bengal-IT team for direct strategy calls and web development inquiries.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <ContactForm />
      <FAQ />
    </div>
  );
}
