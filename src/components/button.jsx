export default function Button({ children, href }) {
  return (
    <a href={href} className="btn btn-sm btn-primary rounded-2" target="_blank">
      {children}
    </a>
  );
}
