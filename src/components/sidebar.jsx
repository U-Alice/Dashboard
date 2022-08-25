import { NavLink } from 'react-router-dom';
import './main.css';
export function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/"    className={({ isActive }) => (isActive ? "active" : "")}>
      <i class="fa-solid fa-users"></i>
      </NavLink>
      <NavLink to="/page1" className={({ isActive }) => (isActive ? "active" : "")}>
      <i class="fa-solid fa-martini-glass-citrus"></i>
      </NavLink>
      <NavLink to="/page2"  className={({ isActive }) => (isActive ? "active" : "")}>
      <i class="fa-solid fa-utensils"></i>
      </NavLink>
      <NavLink to="/page3" className={({ isActive }) => (isActive ? "active" : "")}>
      <i class="fa-solid fa-truck"></i>
      </NavLink>
      <div className="bottom">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
      </div>
    </div>
  );
}
