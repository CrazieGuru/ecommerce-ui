import Navbar from "../components/navigation/Navbar";

export default function GuestLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-6">{children}</main>
    </>
  );
}
