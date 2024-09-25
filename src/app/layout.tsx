import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="mytheme"> {/* Applying custom theme */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
