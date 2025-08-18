export const metadata = {
  title: 'EventScrapper',
  description: 'A sample layout with navbar and footer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <main>{children}</main>
      </body>
    </html>
  );
}

