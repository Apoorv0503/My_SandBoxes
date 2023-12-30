import { useState } from "react";
import axios from "axios";

const BookSession = () => {
  //initialize the data to be susbmited in post request

  const appointment_initial = {
    firstName: "",
    lastName: "",
    Email: "",
    selectedDoctor: "",
    conatctMode: "",
    dayDate: "",
  };
  //made 3 states 1st to genertae data to be submitted and 2+3rd for conditional rendering of html elements
  const [submitData, setSubmitData] = useState(appointment_initial);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  //post request to api using axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      submitData
    );
    setIsBooked(true);
    console.log(res);
    setIsLoading(false);
  };

  const handleCancel = () => {
    setIsBooked(false);
  };

  //handle input change in any input box of form
  const handleChanges = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setSubmitData({ ...submitData, [key]: value }); //not including location and date in crio's sol but have given value to these tags too

    //that's why it is neccesary to give name to each input box similar
    // to the key name in appointment_initial object, after that give values too
    console.log("submitData: ");
    console.log(submitData);
  };
  //html structure for the page

  return (
    // wrapper div of conditions...its imp to wrap
    <div>
      {isBooked ? (
        <div className="loading_banner">
          <h1>appointment booked successfully</h1>
          <button onClick={handleCancel}>Cancel appointment</button>
        </div>
      ) : (
        <div>
          <div className="headers">
            <h1>Book a Session</h1>
            <p>
              Fill in the form below to book a virtual session with your doctor
            </p>
          </div>
          {isLoading ? (
            <div>
              <h3>Scheduling the appointment</h3>
            </div>
          ) : (
            <form className="Basic_info" onSubmit={(e) => handleSubmit(e)}>
              <h3>Basic Info</h3>
              <div>
                <label htmlFor="firstName">First Name </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={submitData.firstName}
                  onChange={(e) => handleChanges(e)}
                />
              </div>
              <div>
                <label htmlFor="lastName">Second Name </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={submitData.lastName}
                  onChange={(e) => handleChanges(e)}
                />
              </div>
              <div>
                <label htmlFor="Email">Email </label>
                <input
                  id="Email"
                  type="mail"
                  name="Email"
                  value={submitData.Email}
                  onChange={(e) => handleChanges(e)}
                />
              </div>

              <div className="Doctor">
                <h3>Doctor</h3>
                <select
                  name="selectedDoctor"
                  id="selectedDoctor"
                  value={submitData.selectedDoctor}
                  onChange={(e) => handleChanges(e)}
                >
                  <option value="default">Select your doctor</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              {/* show where and when options only when doctor is selected */}
              {submitData.selectedDoctor && (
                <div>
                  <div className="where">
                    <h3>Where</h3>
                    <input
                      type="radio"
                      id="Gmeet"
                      name="conatctMode"
                      value="Gmeet"
                      onChange={(e) => handleChanges(e)}
                    />
                      <label htmlFor="Gmeet">Google Meet</label>
                    <br />
                    <input
                      type="radio"
                      id="Phone"
                      name="conatctMode"
                      value="Phone"
                      onChange={(e) => handleChanges(e)}
                    />
                      <label htmlFor="Phone">Phone</label>
                  </div>

                  <div className="when">
                    <h3>When</h3>
                    <label htmlFor="daytime"></label>
                    <input
                      type="datetime-local"
                      id="daytime"
                      name="dayDate"
                      value={submitData.dayDate}
                      onChange={(e) => handleChanges(e)}
                    />
                  </div>
                </div> // just a wrapper div
              )}

              <div>
                <button type="submit">Confirm Booking</button>
              </div>
            </form>
          )}
        </div> //2nd wrapper
      )}
    </div> //1st wrappers
  ); //return ended
}; //functional component ended

export default BookSession;
