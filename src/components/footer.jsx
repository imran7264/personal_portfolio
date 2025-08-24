export default function Footer() {
  return (
    <footer className="footer text-dark p-2 text-center">
      <p>Copyright {new Date().getFullYear()} Shaikh Imran, All Rights Reserved.</p>
      <span>Visitors: </span>

      <a href="https://smallcounter.com">
      <img src="https://smallcounter.com/count.php?c_style=75&id=1754313787" border={0} style={{ width: 15 }} alt="web counter" />
      </a>
     

    </footer>
  );
}
