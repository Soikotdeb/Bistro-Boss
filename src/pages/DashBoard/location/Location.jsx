import { FaClock, FaMapMarker, FaPhone } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const Location = () => {
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"OUR LOCATION"}
        ></SectionTitle>
        <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title bg-yellow-400 w-40 h-11">
          <FaPhone className="footer-icon" style={{ height: '100%', width: '100%', color: '#fff' }} />
        </span>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div>
        <span className="footer-title bg-yellow-400 w-40 h-11">
          <FaMapMarker className="footer-icon" style={{ height: '100%', width: '100%', color: '#fff' }} />
        </span>
        <p>Address: 123 Main St, City, State</p>
      </div>
      <div>
        <span className="footer-title bg-yellow-400 w-40 h-11">
          <FaClock className="footer-icon" style={{ height: '100%', width: '100%', color: '#fff' }} />
        </span>
        <p>Working Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
      </div>
    </footer>
        </div>
      </div>
    </div>
  );
};

export default Location;
