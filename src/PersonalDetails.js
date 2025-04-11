import React, { useState } from 'react';
import './PersonalDetails.css';
import Collegelogo from './college-logo.jpeg';

function PersonalDetails() {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    regNo: "",
    studentEmail: "",
    personalEmail: "",
    doj: "",
    dob: "",
    bloodGroup: "",
    community: "",
    caste: "",
    religion: "",
    fathersName: "",
    fathersOccupation: "",
    mothersName: "",
    mothersOccupation: "",
    annualIncome: "",
    parentsEmail: "",
    address: "",
    studentMobile: "",
    fatherMobile: "",
    motherMobile: ""
  });

  const [studentImage, setStudentImage] = useState("student-image.png"); // Default student image
  const [additionalTableData, setAdditionalTableData] = useState([
    { col1: "", col2: "", col3: "", col4: "", col5: "" },
  ]);

  const [educationalInfo, setEducationalInfo] = useState([
    {
      course: "SSLC",
      school: "",
      year: "",
      marks: "",
      medium: "",
      x: "" // New column
    },
    {
      course: "",
      school: "",
      year: "",
      marks: "",
      medium: "",
      x: "" // New column
    }
  ]);

  const handleChange = (field, value) => {
    setStudentInfo({ ...studentInfo, [field]: value });
  };

  const handleAdditionalTableChange = (index, field, value) => {
    const updatedTableData = [...additionalTableData];
    updatedTableData[index][field] = value;
    setAdditionalTableData(updatedTableData);
  };

  const handleEducationalChange = (index, field, value) => {
    const updatedEducationalInfo = [...educationalInfo];
    updatedEducationalInfo[index][field] = value;
    setEducationalInfo(updatedEducationalInfo);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentImage(reader.result); // Set the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <img src={Collegelogo} alt="College Logo" className="logo" />
        <div className="college-details">
          <h1>NATIONAL ENGINEERING COLLEGE</h1>
          <h2>(An Autonomous Institution, Affiliated to Anna University, Chennai)</h2>
          <p>K.R.NAGAR, KOVILPATTI – 628 503</p>
        </div>
        <div className="student-image-container">
          <img src={studentImage} alt="Upload the Photo here" className="student-image" />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="image-upload"
            />
          )}
        </div>
        <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="student-record">
        <h2 className="centered-title">STUDENT’S RECORD</h2>

        {/* Additional 5-column table */}
        <div className="additional-table">
          <table>
            <thead>
              <tr>
                <th>B.E/B.TECH</th>
                <th>Branch</th>
                <th>Mgt./Govt.</th>
                <th>Day Scholar/Hosteller</th>
                <th>School Medium</th>
              </tr>
            </thead>
            <tbody>
              {additionalTableData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={row.col1}
                      onChange={(e) => handleAdditionalTableChange(index, 'col1', e.target.value)}
                      disabled={!isEditing}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.col2}
                      onChange={(e) => handleAdditionalTableChange(index, 'col2', e.target.value)}
                      disabled={!isEditing}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.col3}
                      onChange={(e) => handleAdditionalTableChange(index, 'col3', e.target.value)}
                      disabled={!isEditing}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.col4}
                      onChange={(e) => handleAdditionalTableChange(index, 'col4', e.target.value)}
                      disabled={!isEditing}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.col5}
                      onChange={(e) => handleAdditionalTableChange(index, 'col5', e.target.value)}
                      disabled={!isEditing}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="info-section">
          {/* Left Side */}
          <div className="left-section">
            <div className="info-item">
              <label>Name:</label>
              <input
                type="text"
                value={studentInfo.name}
                onChange={(e) => handleChange('name', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Register No:</label>
              <input
                type="text"
                value={studentInfo.regNo}
                onChange={(e) => handleChange('regNo', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Student Email:</label>
              <input
                type="text"
                value={studentInfo.studentEmail}
                onChange={(e) => handleChange('studentEmail', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Personal Email Address:</label>
              <input
                type="text"
                value={studentInfo.personalEmail}
                onChange={(e) => handleChange('personalEmail', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Date of Joining:</label>
              <input
                type="text"
                value={studentInfo.doj}
                onChange={(e) => handleChange('doj', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Date of Birth:</label>
              <input
                type="text"
                value={studentInfo.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Blood Group:</label>
              <input
                type="text"
                value={studentInfo.bloodGroup}
                onChange={(e) => handleChange('bloodGroup', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Community:</label>
              <input
                type="text"
                value={studentInfo.community}
                onChange={(e) => handleChange('community', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Caste:</label>
              <input
                type="text"
                value={studentInfo.caste}
                onChange={(e) => handleChange('caste', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Religion:</label>
              <input
                type="text"
                value={studentInfo.religion}
                onChange={(e) => handleChange('religion', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="right-section">
            <div className="info-item">
              <label>Father's Name:</label>
              <input
                type="text"
                value={studentInfo.fathersName}
                onChange={(e) => handleChange('fathersName', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Father's Occupation:</label>
              <input
                type="text"
                value={studentInfo.fathersOccupation}
                onChange={(e) => handleChange('fathersOccupation', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Mother's Name:</label>
              <input
                type="text"
                value={studentInfo.mothersName}
                onChange={(e) => handleChange('mothersName', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Mother's Occupation:</label>
              <input
                type="text"
                value={studentInfo.mothersOccupation}
                onChange={(e) => handleChange('mothersOccupation', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Annual Income:</label>
              <input
                type="text"
                value={studentInfo.annualIncome}
                onChange={(e) => handleChange('annualIncome', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Parent's Email:</label>
              <input
                type="text"
                value={studentInfo.parentsEmail}
                onChange={(e) => handleChange('parentsEmail', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Address:</label>
              <input
                type="text"
                value={studentInfo.address}
                onChange={(e) => handleChange('address', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Student Mobile:</label>
              <input
                type="text"
                value={studentInfo.studentMobile}
                onChange={(e) => handleChange('studentMobile', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Father's Mobile:</label>
              <input
                type="text"
                value={studentInfo.fatherMobile}
                onChange={(e) => handleChange('fatherMobile', e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="info-item">
              <label>Mother's Mobile:</label>
              <input
                type="text"
                value={studentInfo.motherMobile}
                onChange={(e) => handleChange('motherMobile', e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="educational-background">
        <h2>Educational Background</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>School / College & University</th>
              <th>Year of Passing</th>
              <th>Obtained Marks</th>
              <th>Total Marks</th>
              <th>Medium</th>
            </tr>
          </thead>
          <tbody>
            {educationalInfo.map((info, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={info.course}
                    onChange={(e) => handleEducationalChange(index, 'course', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={info.school}
                    onChange={(e) => handleEducationalChange(index, 'school', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={info.year}
                    onChange={(e) => handleEducationalChange(index, 'year', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={info.marks}
                    onChange={(e) => handleEducationalChange(index, 'marks', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={info.medium}
                    onChange={(e) => handleEducationalChange(index, 'medium', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={info.x}
                    onChange={(e) => handleEducationalChange(index, 'x', e.target.value)}
                    disabled={!isEditing}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalDetails;