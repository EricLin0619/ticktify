
import RootProvider from "@/components/provider";
import './globals.css'
import Navbar from '@/components/navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Ticketify</title>
      </head>
      <body className="overflow-x-hidden">
        <div className="flex flex-col max-w-[80vw] mx-auto h-dvh pt-4">
          <RootProvider>
            <Navbar />
            {children}
          </RootProvider>
        </div>
      </body>
    </html>
  );
}
