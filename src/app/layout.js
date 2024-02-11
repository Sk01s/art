import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }) {
  return (
    <html className="background-100-e">
      <body className="state1 background-100-e">
        <ToastContainer />

        {children}
      </body>
    </html>
  );
}
