export default function Container({ children }) {
  return (
    <main className="container-fluid p-0 min-vh-100 w-100 overflow-hidden">
      {children}
    </main>
  );
}
