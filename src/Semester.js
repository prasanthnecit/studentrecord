import React, { useState } from 'react';
import './Semester.css';

function Semester() {
  const [activeTab, setActiveTab] = useState('attendance'); // State to manage active tab

  return (
    <div className="app-container">
      <h1>Semester Details</h1>

      {/* Tabs for Navigation */}
      <div className="tabs">
        <button
          className={activeTab === 'attendance' ? 'active' : ''}
          onClick={() => setActiveTab('attendance')}
        >
          Attendance & Skill Development
        </button>
        <button
          className={activeTab === 'courses' ? 'active' : ''}
          onClick={() => setActiveTab('courses')}
        >
          Course Details
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'attendance' && <AttendanceAndSkillDevelopment />}
        {activeTab === 'courses' && <CourseDetails />}
      </div>
    </div>
  );
}

// Attendance and Skill Development Component
function AttendanceAndSkillDevelopment() {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [attendanceData, setAttendanceData] = useState([
    { month: '', attended: '', conducted: '', percentage: '' },
    { month: '', attended: '', conducted: '', percentage: '' },
    { month: '', attended: '', conducted: '', percentage: '' },
    { month: '', attended: '', conducted: '', percentage: '' },
    { month: '', attended: '', conducted: '', percentage: '' },
    { month: '', attended: '', conducted: '', percentage: '' },
    { month: '', attended: '', conducted: '', percentage: '' },
  ]);

  const [careerObjective, setCareerObjective] = useState('');

  // Handle changes in attendance data
  const handleAttendanceChange = (colIndex, field, value) => {
    const updatedData = [...attendanceData];
    updatedData[colIndex][field] = value;
    setAttendanceData(updatedData);
  };

  // Handle changes in career objective
  const handleCareerObjectiveChange = (e) => {
    setCareerObjective(e.target.value);
  };

  // Skill Development Modules
  const [events, setEvents] = useState([]);
  const [eventDate, setEventDate] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventCategory, setEventCategory] = useState('Technical');
  const [skillsGained, setSkillsGained] = useState('');
  const [feedback, setFeedback] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const [internships, setInternships] = useState([]);
  const [organizationName, setOrganizationName] = useState('');
  const [internshipDuration, setInternshipDuration] = useState('');
  const [internshipSkills, setInternshipSkills] = useState('');
  const [internshipFeedback, setInternshipFeedback] = useState('');
  const [internshipCertificate, setInternshipCertificate] = useState(null);
  const [editInternshipIndex, setEditInternshipIndex] = useState(null);
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  const [expandedInternship, setExpandedInternship] = useState(null);

  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [platform, setPlatform] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseSkills, setCourseSkills] = useState('');
  const [courseFeedback, setCourseFeedback] = useState('');
  const [courseCertificate, setCourseCertificate] = useState(null);
  const [editCourseIndex, setEditCourseIndex] = useState(null);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const [activities, setActivities] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [activitySkills, setActivitySkills] = useState('');
  const [activityFeedback, setActivityFeedback] = useState('');
  const [activityCertificate, setActivityCertificate] = useState(null);
  const [editActivityIndex, setEditActivityIndex] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [expandedActivity, setExpandedActivity] = useState(null);

  const [codingProfiles, setCodingProfiles] = useState([]);
  const [platformName, setPlatformName] = useState('');
  const [username, setUsername] = useState('');
  const [showCodingForm, setShowCodingForm] = useState(false);

  // Save Event
  const saveEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      eventDate,
      collegeName,
      eventName,
      eventCategory,
      skillsGained,
      feedback,
      certificate: certificate ? URL.createObjectURL(certificate) : null,
    };

    if (editIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = newEvent;
      setEvents(updatedEvents);
      setEditIndex(null);
    } else {
      setEvents([...events, newEvent]);
    }

    setEventDate('');
    setCollegeName('');
    setEventName('');
    setEventCategory('Technical');
    setSkillsGained('');
    setFeedback('');
    setCertificate(null);
    setShowForm(false);
  };

  // Edit Event
  const editEvent = (index) => {
    const event = events[index];
    setEventDate(event.eventDate);
    setCollegeName(event.collegeName);
    setEventName(event.eventName);
    setEventCategory(event.eventCategory);
    setSkillsGained(event.skillsGained);
    setFeedback(event.feedback);
    setCertificate(event.certificate ? new File([], event.certificate) : null);
    setEditIndex(index);
    setShowForm(true);
  };

  // Delete Event
  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  // Toggle Event Details
  const toggleEventDetails = (index) => {
    if (expandedEvent === index) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(index);
    }
  };

  // Save Internship
  const saveInternship = (e) => {
    e.preventDefault();
    const newInternship = {
      organizationName,
      duration: internshipDuration,
      skillsGained: internshipSkills,
      feedback: internshipFeedback,
      certificate: internshipCertificate ? URL.createObjectURL(internshipCertificate) : null,
    };

    if (editInternshipIndex !== null) {
      const updatedInternships = [...internships];
      updatedInternships[editInternshipIndex] = newInternship;
      setInternships(updatedInternships);
      setEditInternshipIndex(null);
    } else {
      setInternships([...internships, newInternship]);
    }

    setOrganizationName('');
    setInternshipDuration('');
    setInternshipSkills('');
    setInternshipFeedback('');
    setInternshipCertificate(null);
    setShowInternshipForm(false);
  };

  // Edit Internship
  const editInternship = (index) => {
    const internship = internships[index];
    setOrganizationName(internship.organizationName);
    setInternshipDuration(internship.duration);
    setInternshipSkills(internship.skillsGained);
    setInternshipFeedback(internship.feedback);
    setInternshipCertificate(internship.certificate ? new File([], internship.certificate) : null);
    setEditInternshipIndex(index);
    setShowInternshipForm(true);
  };

  // Delete Internship
  const deleteInternship = (index) => {
    const updatedInternships = internships.filter((_, i) => i !== index);
    setInternships(updatedInternships);
  };

  // Toggle Internship Details
  const toggleInternshipDetails = (index) => {
    if (expandedInternship === index) {
      setExpandedInternship(null);
    } else {
      setExpandedInternship(index);
    }
  };

  // Save Course
  const saveCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      courseName,
      platform,
      duration: courseDuration,
      skillsGained: courseSkills,
      feedback: courseFeedback,
      certificate: courseCertificate ? URL.createObjectURL(courseCertificate) : null,
    };

    if (editCourseIndex !== null) {
      const updatedCourses = [...courses];
      updatedCourses[editCourseIndex] = newCourse;
      setCourses(updatedCourses);
      setEditCourseIndex(null);
    } else {
      setCourses([...courses, newCourse]);
    }

    setCourseName('');
    setPlatform('');
    setCourseDuration('');
    setCourseSkills('');
    setCourseFeedback('');
    setCourseCertificate(null);
    setShowCourseForm(false);
  };

  // Edit Course
  const editCourse = (index) => {
    const course = courses[index];
    setCourseName(course.courseName);
    setPlatform(course.platform);
    setCourseDuration(course.duration);
    setCourseSkills(course.skillsGained);
    setCourseFeedback(course.feedback);
    setCourseCertificate(course.certificate ? new File([], course.certificate) : null);
    setEditCourseIndex(index);
    setShowCourseForm(true);
  };

  // Delete Course
  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  // Toggle Course Details
  const toggleCourseDetails = (index) => {
    if (expandedCourse === index) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(index);
    }
  };

  // Save Activity
  const saveActivity = (e) => {
    e.preventDefault();
    const newActivity = {
      activityName,
      description: activityDescription,
      skillsGained: activitySkills,
      feedback: activityFeedback,
      certificate: activityCertificate ? URL.createObjectURL(activityCertificate) : null,
    };

    if (editActivityIndex !== null) {
      const updatedActivities = [...activities];
      updatedActivities[editActivityIndex] = newActivity;
      setActivities(updatedActivities);
      setEditActivityIndex(null);
    } else {
      setActivities([...activities, newActivity]);
    }

    setActivityName('');
    setActivityDescription('');
    setActivitySkills('');
    setActivityFeedback('');
    setActivityCertificate(null);
    setShowActivityForm(false);
  };

  // Edit Activity
  const editActivity = (index) => {
    const activity = activities[index];
    setActivityName(activity.activityName);
    setActivityDescription(activity.description);
    setActivitySkills(activity.skillsGained);
    setActivityFeedback(activity.feedback);
    setActivityCertificate(activity.certificate ? new File([], activity.certificate) : null);
    setEditActivityIndex(index);
    setShowActivityForm(true);
  };

  // Delete Activity
  const deleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  // Toggle Activity Details
  const toggleActivityDetails = (index) => {
    if (expandedActivity === index) {
      setExpandedActivity(null);
    } else {
      setExpandedActivity(index);
    }
  };

  // Save Coding Profile
  const saveCodingProfile = (e) => {
    e.preventDefault();
    const newProfile = {
      platformName,
      username,
    };

    setCodingProfiles([...codingProfiles, newProfile]);
    setPlatformName('');
    setUsername('');
    setShowCodingForm(false);
  };

  // Delete Coding Profile
  const deleteCodingProfile = (index) => {
    const updatedProfiles = codingProfiles.filter((_, i) => i !== index);
    setCodingProfiles(updatedProfiles);
  };

  return (
    <div>
      {/* Edit Button */}
      <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>

      {/* Attendance Details */}
      <div className="attendance-details">
        <h2>Attendance Details</h2>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              {attendanceData.map((_, index) => (
                <th key={index}>
                  <input
                    type="text"
                    value={attendanceData[index].month}
                    onChange={(e) => handleAttendanceChange(index, 'month', e.target.value)}
                    disabled={!isEditing}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Attended Hours</td>
              {attendanceData.map((data, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={data.attended}
                    onChange={(e) => handleAttendanceChange(colIndex, 'attended', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td>Conducted Hours</td>
              {attendanceData.map((data, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={data.conducted}
                    onChange={(e) => handleAttendanceChange(colIndex, 'conducted', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td>Percentage</td>
              {attendanceData.map((data, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={data.percentage}
                    onChange={(e) => handleAttendanceChange(colIndex, 'percentage', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Career Objective */}
      <div className="career-objective">
        <label>Career Objective:</label>
        <input
          type="text"
          value={careerObjective}
          onChange={handleCareerObjectiveChange}
          disabled={!isEditing}
        />
      </div>

      {/* Skill Development */}
      <div className="skill-development">
        <h2>Skill Development</h2>

        {/* Inter/Intra College Participations */}
        <div className="module">
          <h3>
            Inter/Intra College Participations
            <button className="small-button" onClick={() => { setShowForm(!showForm); setEditIndex(null); }}>
              +
            </button>
          </h3>

          {/* Event Form */}
          {showForm && (
            <form onSubmit={saveEvent} className="form">
              <label>Event Date:</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
              <label>College Name:</label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                required
              />
              <label>Event Name:</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />
              <label>Event Category:</label>
              <select
                value={eventCategory}
                onChange={(e) => setEventCategory(e.target.value)}
                required
              >
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
                <option value="Workshops">Workshops</option>
                <option value="Seminars">Seminars</option>
                <option value="Others">Others</option>
              </select>
              <label>Skills Gained:</label>
              <textarea
                value={skillsGained}
                onChange={(e) => setSkillsGained(e.target.value)}
                required
              />
              <label>Feedback:</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
              <label>Upload Certificate (JPG, PNG, PDF):</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setCertificate(e.target.files[0])}
                required
              />
              <button type="submit" className="small-button">
                {editIndex !== null ? 'Update' : 'Save'}
              </button>
            </form>
          )}

          {/* Event List */}
          <div className="list">
            {events.map((event, index) => (
              <div key={index} className="item">
                <div className="summary" onClick={() => toggleEventDetails(index)}>
                  <strong>{event.eventName} - {event.collegeName} 
                  <span className="arrow">{expandedEvent === index ? '▲' : '▼'}</span></strong>
                </div>
                {expandedEvent === index && (
                  <div className="details">
                    <p><strong>Date:</strong> {event.eventDate}</p>
                    <p><strong>Category:</strong> {event.eventCategory}</p>
                    <p><strong>Skills Gained:</strong> {event.skillsGained}</p>
                    <p><strong>Feedback:</strong> {event.feedback}</p>
                    {event.certificate && (
                      <p>
                        <strong>Certificate:</strong>{' '}
                        <a href={event.certificate} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </p>
                    )}
                    {isEditing && (
                      <div className="actions">
                        <button className="small-button" onClick={() => editEvent(index)}>
                          Edit
                        </button>
                        <button className="small-button" onClick={() => deleteEvent(index)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* In-Plant Training/Internships */}
        <div className="module">
          <h3>
            In-Plant Training/Internships
            <button className="small-button" onClick={() => { setShowInternshipForm(!showInternshipForm); setEditInternshipIndex(null); }}>
              +
            </button>
          </h3>

          {/* Internship Form */}
          {showInternshipForm && (
            <form onSubmit={saveInternship} className="form">
              <label>Organization Name:</label>
              <input
                type="text"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                required
              />
              <label>Duration:</label>
              <input
                type="text"
                value={internshipDuration}
                onChange={(e) => setInternshipDuration(e.target.value)}
                required
              />
              <label>Skills Gained:</label>
              <textarea
                value={internshipSkills}
                onChange={(e) => setInternshipSkills(e.target.value)}
                required
              />
              <label>Feedback:</label>
              <textarea
                value={internshipFeedback}
                onChange={(e) => setInternshipFeedback(e.target.value)}
                required
              />
              <label>Upload Certificate (JPG, PNG, PDF):</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setInternshipCertificate(e.target.files[0])}
                required
              />
              <button type="submit" className="small-button">
                {editInternshipIndex !== null ? 'Update' : 'Save'}
              </button>
            </form>
          )}

          {/* Internship List */}
          <div className="list">
            {internships.map((internship, index) => (
              <div key={index} className="item">
                <div className="summary" onClick={() => toggleInternshipDetails(index)}>
                  <strong>{internship.organizationName}</strong> - {internship.duration}
                  <span className="arrow">{expandedInternship === index ? '▲' : '▼'}</span>
                </div>
                {expandedInternship === index && (
                  <div className="details">
                    <p><strong>Skills Gained:</strong> {internship.skillsGained}</p>
                    <p><strong>Feedback:</strong> {internship.feedback}</p>
                    {internship.certificate && (
                      <p>
                        <strong>Certificate:</strong>{' '}
                        <a href={internship.certificate} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </p>
                    )}
                    {isEditing && (
                      <div className="actions">
                        <button className="small-button" onClick={() => editInternship(index)}>
                          Edit
                        </button>
                        <button className="small-button" onClick={() => deleteInternship(index)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Online Courses/Short-Term Courses */}
        <div className="module">
          <h3>
            Online Courses/Short-Term Courses
            <button className="small-button" onClick={() => { setShowCourseForm(!showCourseForm); setEditCourseIndex(null); }}>
              +
            </button>
          </h3>

          {/* Course Form */}
          {showCourseForm && (
            <form onSubmit={saveCourse} className="form">
              <label>Course Name:</label>
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
              <label>Platform:</label>
              <input
                type="text"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                required
              />
              <label>Duration:</label>
              <input
                type="text"
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                required
              />
              <label>Skills Gained:</label>
              <textarea
                value={courseSkills}
                onChange={(e) => setCourseSkills(e.target.value)}
                required
              />
              <label>Feedback:</label>
              <textarea
                value={courseFeedback}
                onChange={(e) => setCourseFeedback(e.target.value)}
                required
              />
              <label>Upload Certificate (JPG, PNG, PDF):</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setCourseCertificate(e.target.files[0])}
                required
              />
              <button type="submit" className="small-button">
                {editCourseIndex !== null ? 'Update' : 'Save'}
              </button>
            </form>
          )}

          {/* Course List */}
          <div className="list">
            {courses.map((course, index) => (
              <div key={index} className="item">
                <div className="summary" onClick={() => toggleCourseDetails(index)}>
                  <strong>{course.courseName}</strong> - {course.platform}
                  <span className="arrow">{expandedCourse === index ? '▲' : '▼'}</span>
                </div>
                {expandedCourse === index && (
                  <div className="details">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Skills Gained:</strong> {course.skillsGained}</p>
                    <p><strong>Feedback:</strong> {course.feedback}</p>
                    {course.certificate && (
                      <p>
                        <strong>Certificate:</strong>{' '}
                        <a href={course.certificate} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </p>
                    )}
                    {isEditing && (
                      <div className="actions">
                        <button className="small-button" onClick={() => editCourse(index)}>
                          Edit
                        </button>
                        <button className="small-button" onClick={() => deleteCourse(index)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Other Activities */}
        <div className="module">
          <h3>
            Other Activities
            <button className="small-button" onClick={() => { setShowActivityForm(!showActivityForm); setEditActivityIndex(null); }}>
              +
            </button>
          </h3>

          {/* Activity Form */}
          {showActivityForm && (
            <form onSubmit={saveActivity} className="form">
              <label>Activity Name:</label>
              <input
                type="text"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
                required
              />
              <label>Description:</label>
              <textarea
                value={activityDescription}
                onChange={(e) => setActivityDescription(e.target.value)}
                required
              />
              <label>Skills Gained:</label>
              <textarea
                value={activitySkills}
                onChange={(e) => setActivitySkills(e.target.value)}
                required
              />
              <label>Feedback:</label>
              <textarea
                value={activityFeedback}
                onChange={(e) => setActivityFeedback(e.target.value)}
                required
              />
              <label>Upload Certificate (JPG, PNG, PDF):</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setActivityCertificate(e.target.files[0])}
                required
              />
              <button type="submit" className="small-button">
                {editActivityIndex !== null ? 'Update' : 'Save'}
              </button>
            </form>
          )}

          {/* Activity List */}
          <div className="list">
            {activities.map((activity, index) => (
              <div key={index} className="item">
                <div className="summary" onClick={() => toggleActivityDetails(index)}>
                  <strong>{activity.activityName}</strong>
                  <span className="arrow">{expandedActivity === index ? '▲' : '▼'}</span>
                </div>
                {expandedActivity === index && (
                  <div className="details">
                    <p><strong>Description:</strong> {activity.description}</p>
                    <p><strong>Skills Gained:</strong> {activity.skillsGained}</p>
                    <p><strong>Feedback:</strong> {activity.feedback}</p>
                    {activity.certificate && (
                      <p>
                        <strong>Certificate:</strong>{' '}
                        <a href={activity.certificate} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </p>
                    )}
                    {isEditing && (
                      <div className="actions">
                        <button className="small-button" onClick={() => editActivity(index)}>
                          Edit
                        </button>
                        <button className="small-button" onClick={() => deleteActivity(index)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="module">
          <h3>
            Coding Profiles
            <button className="small-button" onClick={() => setShowCodingForm(!showCodingForm)}>
              +
            </button>
          </h3>

          {/* Coding Profile Form */}
          {showCodingForm && (
            <form onSubmit={saveCodingProfile} className="form">
              <label>Platform Name:</label>
              <input
                type="text"
                value={platformName}
                onChange={(e) => setPlatformName(e.target.value)}
                required
              />
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <button type="submit" className="small-button">
                Save
              </button>
            </form>
          )}

          {/* Coding Profile List */}
          <div className="list">
            {codingProfiles.map((profile, index) => (
              <div key={index} className="item">
                <div className="summary">
                  <strong>{profile.platformName}:</strong>{' '}
                  <a
                    href={`https://${profile.platformName.toLowerCase()}.com/${profile.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.username}
                  </a>
                </div>
                {isEditing && (
                  <div className="actions">
                    <button className="small-button" onClick={() => deleteCodingProfile(index)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Course Details Component
function CourseDetails() {
  const [isEditable, setIsEditable] = useState(false); // State to toggle edit mode
  const [theoryCourses, setTheoryCourses] = useState([
    { code: '', title: '', iat1: '', iat2: '', credit: '', grade: '' },
    { code: '', title: '', iat1: '', iat2: '', credit: '', grade: '' },
  ]);
  const [practicalCourses, setPracticalCourses] = useState([
    { code: '', title: '', iat1: '', iat2: '', credit: '', grade: '' },
  ]);
  const [nptelCourses, setNptelCourses] = useState([
    { sno: 1, category: '', name: '', duration: '', instructor: '', institution: '', remarks: '' },
  ]);
  const [cgp, setCgp] = useState(''); // State for CGP
  const [cgpa, setCgpa] = useState(''); // State for CGPA

  const handleEdit = () => {
    setIsEditable(!isEditable); // Toggle edit mode
  };

  const addTheoryCourse = () => {
    setTheoryCourses([...theoryCourses, { code: '', title: '', iat1: '', iat2: '', credit: '', grade: '' }]);
  };

  const addPracticalCourse = () => {
    setPracticalCourses([...practicalCourses, { code: '', title: '', iat1: '', iat2: '', credit: '', grade: '' }]);
  };

  const addNptelCourse = () => {
    setNptelCourses([...nptelCourses, { sno: nptelCourses.length + 1, category: '', name: '', duration: '', instructor: '', institution: '', remarks: '' }]);
  };

  return (
    <div>
      {/* Edit Button */}
      <button className="edit-button" onClick={handleEdit}>
        {isEditable ? 'Save' : 'Edit'}
      </button>

      {/* Theory Courses Table */}
      <div className="card">
        <h2>Theory Courses</h2>
        <button className="add-button" onClick={addTheoryCourse}>+</button>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>IAT 1 Marks</th>
              <th>IAT 2 Marks</th>
              <th>Credit</th>
              <th>Grade Earned</th>
            </tr>
          </thead>
          <tbody>
            {theoryCourses.map((course, index) => (
              <tr key={index}>
                <td>{isEditable ? <input type="text" value={course.code} onChange={(e) => {
                  const updatedCourses = [...theoryCourses];
                  updatedCourses[index].code = e.target.value;
                  setTheoryCourses(updatedCourses);
                }} /> : course.code}</td>
                <td>{isEditable ? <input type="text" value={course.title} onChange={(e) => {
                  const updatedCourses = [...theoryCourses];
                  updatedCourses[index].title = e.target.value;
                  setTheoryCourses(updatedCourses);
                }} /> : course.title}</td>
                <td>{isEditable ? <input type="number" value={course.iat1} onChange={(e) => {
                  const updatedCourses = [...theoryCourses];
                  updatedCourses[index].iat1 = e.target.value;
                  setTheoryCourses(updatedCourses);
                }} /> : course.iat1}</td>
                <td>{isEditable ? <input type="number" value={course.iat2} onChange={(e) => {
                  const updatedCourses = [...theoryCourses];
                  updatedCourses[index].iat2 = e.target.value;
                  setTheoryCourses(updatedCourses);
                }} /> : course.iat2}</td>
                <td>{isEditable ? (
                  <select value={course.credit} onChange={(e) => {
                    const updatedCourses = [...theoryCourses];
                    updatedCourses[index].credit = e.target.value;
                    setTheoryCourses(updatedCourses);
                  }}>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                ) : course.credit}</td>
                <td>{isEditable ? (
                  <select value={course.grade} onChange={(e) => {
                    const updatedCourses = [...theoryCourses];
                    updatedCourses[index].grade = e.target.value;
                    setTheoryCourses(updatedCourses);
                  }}>
                    <option value="O">O</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="U">U</option>
                  </select>
                ) : course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Practical Courses Table */}
      <div className="card">
        <h2>Practical Courses</h2>
        <button className="add-button" onClick={addPracticalCourse}>+</button>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>IAT 1 Marks</th>
              <th>IAT 2 Marks</th>
              <th>Credit</th>
              <th>Grade Earned</th>
            </tr>
          </thead>
          <tbody>
            {practicalCourses.map((course, index) => (
              <tr key={index}>
                <td>{isEditable ? <input type="text" value={course.code} onChange={(e) => {
                  const updatedCourses = [...practicalCourses];
                  updatedCourses[index].code = e.target.value;
                  setPracticalCourses(updatedCourses);
                }} /> : course.code}</td>
                <td>{isEditable ? <input type="text" value={course.title} onChange={(e) => {
                  const updatedCourses = [...practicalCourses];
                  updatedCourses[index].title = e.target.value;
                  setPracticalCourses(updatedCourses);
                }} /> : course.title}</td>
                <td>{isEditable ? <input type="number" value={course.iat1} onChange={(e) => {
                  const updatedCourses = [...practicalCourses];
                  updatedCourses[index].iat1 = e.target.value;
                  setPracticalCourses(updatedCourses);
                }} /> : course.iat1}</td>
                <td>{isEditable ? <input type="number" value={course.iat2} onChange={(e) => {
                  const updatedCourses = [...practicalCourses];
                  updatedCourses[index].iat2 = e.target.value;
                  setPracticalCourses(updatedCourses);
                }} /> : course.iat2}</td>
                <td>{isEditable ? (
                  <select value={course.credit} onChange={(e) => {
                    const updatedCourses = [...practicalCourses];
                    updatedCourses[index].credit = e.target.value;
                    setPracticalCourses(updatedCourses);
                  }}>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                ) : course.credit}</td>
                <td>{isEditable ? (
                  <select value={course.grade} onChange={(e) => {
                    const updatedCourses = [...practicalCourses];
                    updatedCourses[index].grade = e.target.value;
                    setPracticalCourses(updatedCourses);
                  }}>
                    <option value="O">O</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="U">U</option>
                  </select>
                ) : course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CGPA and CGP Boxes */}
      <div className="cgpa-container">
        <div className="cgp-box">
          <label>CGP:</label>
          <input
            type="number"
            value={cgp}
            onChange={(e) => setCgp(e.target.value)}
            disabled={!isEditable}
          />
        </div>
        <div className="cgpa-box">
          <label>CGPA:</label>
          <input
            type="number"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            disabled={!isEditable}
          />
        </div>
      </div>

      {/* NPTEL/Value-Added Courses Table */}
      <div className="card">
        <h2>NPTEL/Value-Added Courses</h2>
        <button className="add-button" onClick={addNptelCourse}>+</button>
        <table className="course-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Course Category</th>
              <th>Name of the Course</th>
              <th>Duration</th>
              <th>Instructor/Institution</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {nptelCourses.map((course, index) => (
              <tr key={index}>
                <td>{isEditable ? <input type="number" value={course.sno} onChange={(e) => {
                  const updatedCourses = [...nptelCourses];
                  updatedCourses[index].sno = e.target.value;
                  setNptelCourses(updatedCourses);
                }} /> : course.sno}</td>
                <td>{isEditable ? <input type="text" value={course.category} onChange={(e) => {
                  const updatedCourses = [...nptelCourses];
                  updatedCourses[index].category = e.target.value;
                  setNptelCourses(updatedCourses);
                }} /> : course.category}</td>
                <td>{isEditable ? <input type="text" value={course.name} onChange={(e) => {
                  const updatedCourses = [...nptelCourses];
                  updatedCourses[index].name = e.target.value;
                  setNptelCourses(updatedCourses);
                }} /> : course.name}</td>
                <td>{isEditable ? <input type="text" value={course.duration} onChange={(e) => {
                  const updatedCourses = [...nptelCourses];
                  updatedCourses[index].duration = e.target.value;
                  setNptelCourses(updatedCourses);
                }} /> : course.duration}</td>
                <td>{isEditable ? <input type="text" value={course.instructor} onChange={(e) => {
                  const updatedCourses = [...nptelCourses];
                  updatedCourses[index].instructor = e.target.value;
                  setNptelCourses(updatedCourses);
                }} /> : course.instructor}</td>
                <td>{isEditable ? <input type="text" value={course.remarks} onChange={(e) => {
                  const updatedCourses = [...nptelCourses];
                  updatedCourses[index].remarks = e.target.value;
                  setNptelCourses(updatedCourses);
                }} /> : course.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Semester;