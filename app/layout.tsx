import Navbar from './components/Navbar';
import Header from './components/Header';
import './globals.css';
import Metadata from 'next/document';
import { ManagerProvider } from './context/Manager';
import Sidebar from './components/Sidebar';
import { CssBaseline } from '@mui/material';

export default function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <CssBaseline />
      <body>
        <ManagerProvider>
          <Header />
          <main>
            {/* <Sidebar /> */}
            {children}
          </main>
        </ManagerProvider>
      </body>
    </html>
  );
}
