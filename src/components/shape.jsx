export default function Shape({
  width,
  height,
  left,
  top,
  animation,
  opacity,
}) {
  return (
    <div
      className="position-absolute"
      style={{ top: top, left: left }}
      id="shape"
    >
      <div className="wave-wrapper">
        <div
          className="main-circle"
          style={{ width: width, height: height, opacity }}
        ></div>
        <span
          className="wave wave1"
          style={{ animation: animation, animationDelay: "0s" }}
        ></span>
        <span
          className="wave wave2"
          style={{ animation: animation, animationDelay: "1s" }}
        ></span>
        <span
          className="wave wave3"
          style={{ animation: animation, animationDelay: "2s" }}
        ></span>
      </div>
    </div>
  );
}
