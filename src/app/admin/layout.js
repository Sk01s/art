"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
