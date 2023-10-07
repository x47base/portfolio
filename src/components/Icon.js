import './Icon.css'
export default function Icon({ icon, classes }) {
    return (
      <div className="sidebar-icon">
        <div className={classes}>{icon}</div>
      </div>
    );
};