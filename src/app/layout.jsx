import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SmoothScroll from '../components/SmoothScroll';

export const metadata = {
  title: 'Bengal-IT Official | Enterprise Software & Web Solutions',
  description: 'Official website of Bengal-IT. Built with Next.js, Express.js, Node.js, and MongoDB.',
  keywords: ['Bengal-IT', 'Software Agency', 'Next.js', 'Express', 'MongoDB', 'Node.js', 'Web Development Bangladesh'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <div className="bg-glow-orb-1" />
          <div className="bg-glow-orb-2" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}

