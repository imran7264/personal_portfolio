export default function Card({ title, text, icon, children, img }) {
  return (
    <div className="card shadow-lg px-0" data-aos="fade-left">
      <img src={img} alt="" className="card-img-top border-bottom border-2 rounded" style={{borderColor: "#6c63ff !important"}}/>
      <div className="card-body py-2">
        <h5 className="card-title">
          {" "}
          <span className="fs-2">{icon}</span>
          <span style={{ color: "#b415ff" }}> {title}</span>
        </h5>
        <p className="card-text">{text}</p>
        {children}
      </div>
    </div>
  );
}
