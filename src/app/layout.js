import "./globals.css";

export const metadata = {
  title: "Kamran Ali Memon | Full-Stack Developer",
  description:
    "Portfolio of Kamran Ali Memon — web developer building modern experiences with React, Next.js and the MERN stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
