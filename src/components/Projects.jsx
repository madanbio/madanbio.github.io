import { useState } from "react";

const projects = [
  { title: "Social Justice", type: "web" },
  { title: "PM-AJAY", type: "web" },
  { title: "Graphic Work", type: "graphic" }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  return (
    <section id="cv_portfolio">
      <div className="section_title">
        <h3>Recent Project</h3>
      </div>

      <div className="portfolio_filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("web")}>Web</button>
        <button onClick={() => setFilter("graphic")}>Graphic</button>
      </div>

      <ul className="grid">
        {projects
          .filter(p => filter === "all" || p.type === filter)
          .map((p, i) => (
            <li key={i} className="grid-item">
              {p.title}
            </li>
          ))}
      </ul>
    </section>
  );
}
