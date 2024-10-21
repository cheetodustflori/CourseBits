import "../../styles.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <p className="header-title">UIC Course Planner</p>
        <div className="links">
          <button>Planner</button>
          <button>Catalog</button>
        </div>
      </div>
    </div>
  );
}
