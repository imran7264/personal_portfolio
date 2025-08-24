export default function Button({ children, href, target }) {
  return (
    <a href={href} className="btn btn-primary rounded-2" target={target}>
      {children}
    </a>
  );
}
