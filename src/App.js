import Login from "./screens/auth/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./screens/auth/Register";
import Home from "./screens/Home";
import ContactHeader from "./components/ContactHeader";
import LayoutComponent from "./components/Layout";
import Services from "./screens/Services";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Team from "./screens/Team";
import MentorsList from "./screens/mentors/MentorsList";
import ResourceList from "./screens/resources/ResourceList";
import MentorDetails from "./screens/mentors/MentorDetails";
import VideoChat from "./videoChat/VideoChat";
import MyBookings from "./screens/bookings/MyBookings";
import MentorBookings from "./screens/mentors/MentorBookings";

function App() {
  return (
    <>
      <ContactHeader />
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentors" element={<MentorsList />} />
          <Route path="/mentors/:id" element={<MentorDetails />} />
          {/* <Route path="/resources" element={<ResourceList />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/mentorbookings" element={<MentorBookings />} />
        </Routes>
      </LayoutComponent>
    </>
  );
}

export default App;
