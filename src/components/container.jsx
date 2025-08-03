export default function Container({ children }) {
  return (
    <main
      className="scrollspy-example container-fluid px-0 pt-5 min-vh-100 w-100 overflow-hidden"
      data-bs-spy="scroll"
      data-bs-target="#nav-scroll"
      data-bs-smooth-scroll="true"
      tabIndex={0}
    >
      {children}
    </main>
  );
}
