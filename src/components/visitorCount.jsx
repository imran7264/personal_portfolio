import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://counterapi.dev/api/v1/count?key=shaikh-imran-portfolio&increment=true")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Error fetching count:", err));
  }, []);

  return (
    <div>
      {count !== null ? (
        <p>Visitor Count: {count}</p>
      ) : (
        <p>Loading visitor count...</p>
      )}
    </div>
  );
};

export default VisitorCounter;
