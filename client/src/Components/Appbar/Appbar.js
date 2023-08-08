import { MenuOutlined } from "@ant-design/icons";
import Avatar from "../Avatar/Avatar";
import "./appbar.scss";

const Appbar = ({ showSidebar }) => {
  return (
    <div className="appbar">
      <div className="appbar-wrapper">
        {/* logo */}
        <div className="appbar-logo">
          <img
            src="https://res.cloudinary.com/dcltsh8p7/image/upload/v1691485767/logo_oumypk.png"
            alt="VPL"
          />
          <h3>NMS Master facility List</h3>
        </div>
        {/* Avatar */}
        <div className="appbar-avatar">
          <Avatar />
          <MenuOutlined onClick={showSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
