import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="container">{children}</body>
    </html>
  )
}
