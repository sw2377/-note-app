import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStore } from "../../store/notebooks";

const Sidebar = () => {
  const { notebooks } = useStore();

  // const navigate = useNavigate();

  return (
    <nav>
      <div>NOTEBOOKS</div>
      <ul>
        {notebooks.map(notebook => (
          <li key={notebook.id}>
            <Link to={notebook.name}>{notebook.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
