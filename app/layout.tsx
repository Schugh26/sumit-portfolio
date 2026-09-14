import "./globals.css";

export const metadata = {
  title: "Sumit Chugh | Electrical Engineering",
  description:
    "Personal portfolio of Sumit Chugh, Electrical Engineering student at Penn State University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}