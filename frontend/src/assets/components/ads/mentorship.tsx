import { useState } from "react";
import { applyForMentorship } from "@/api/mentorshipApi";
import { JoinSchools } from "./banners";

const SchoolMentorshipForm = () => {
  const [schoolName, setSchoolName] = useState("");
  const [location, setLocation] = useState("");
  const [googleMapsLink, setGoogleMapsLink] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [sessionsPerWeek, setSessionsPerWeek] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await applyForMentorship(schoolName, location, googleMapsLink, contactName, contactEmail, contactPhone, sessionsPerWeek, message);
      alert("Application submitted successfully!");
      setSchoolName("");
      setLocation("");
      setGoogleMapsLink("");
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setSessionsPerWeek(1);
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-bannerWrap">
    <JoinSchools />
    <div className="layouts schoolMentorship">
        <form onSubmit={handleSubmit} id="schoolMentorshipForm">
        <h1>School Mentorship Application</h1>
        <div className="form-wrap">
            <h2>School Contact Personnel</h2>
            <span className="Text_S_Normal truncate description">
                Details need are bound to only a member of the school, most likely a head of department (not a student).
            </span>
            <div className="form-children-wrap">
                <span className="Text_Normal bold">Name</span>
                <input type="text" placeholder="Name" value={contactName} onChange={(e) => setContactName(e.target.value)} required className="input" />
                <span className="Text_S_Normal description">Full Names are required</span>
            </div>
            <div className="form-children-wrap">
                <span className="Text_Normal bold">Email</span>
                <input type="email" placeholder="Email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required className="input" />
                <span className="Text_S_Normal description">Emails are collected for club notices on changes on any changes of the program</span>
            </div>
            <div className="form-children-wrap">
                <span className="Text_Normal bold">Phone</span>
                <input type="tel" placeholder="Phone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required className="input" />
                <span className="Text_S_Normal description">Phone numbers are collected for communication between the coaching departmnent and the school</span>
            </div>        
        </div>
        <div className="form-wrap">
            <h2>School Details</h2>
            <div className="form-children-wrap">
                <span className="Text_Normal bold">Name</span>
                <input type="text" placeholder="School Name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required className="input" />
                <span className="Text_S_Normal description">The schools' actual name</span>
            </div>
            <div className="form-children-wrap">
                <span className="Text_Normal bold">Location</span>
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required className="input" />
                <span className="Text_S_Normal description">The approximate location of the school</span>
            </div>
            <div className="form-children-wrap">
                <span className="Text_Normal bold">Google Maps</span>
                <input type="url" placeholder="Google Maps Link" value={googleMapsLink} onChange={(e) => setGoogleMapsLink(e.target.value)} required className="input" />
                <span className="Text_S_Normal description">The actual geographical location as displayed on google maps</span>
            </div>
            <div className="row gap-10 content-x1">
                <span className="Text_Normal">Sessions Available per Week</span>
                <input type="number" min="1" max="7" value={sessionsPerWeek} onChange={(e) => setSessionsPerWeek(parseInt(e.target.value))} required className="input-session" />
            </div>
            <div className="column gap-10">
              <span>Cover Letter (Optional)</span>
            <textarea placeholder="paste as plain text" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
            </div>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit Application</button>
      </form>
    </div>
    </div>
  );
};

export default SchoolMentorshipForm;
