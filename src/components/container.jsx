export default function Container({ children }) {
  return (
    <main
      className="scrollspy-example container-fluid p-0 min-vh-100 w-100 overflow-hidden"
      data-bs-spy="scroll"
      data-bs-target="#nav-scroll"
      data-bs-smooth-scroll="true"
      tabIndex={0}
    >
      {children}
    </main>
  );
}
