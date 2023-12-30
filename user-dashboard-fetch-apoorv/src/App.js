import React from "react";
import "./styles.css";

//values used to fill
// let fullname = "11";
// let Email = "22";
// let img1 = "33";

class App extends React.Component {
  //constructor to make states, ie. make above globle variables as state to use them
  constructor(props) {
    super(props);
    this.state = {
      fullname: " Full Name",
      Email: " example@gmail.com",
      avatar_my:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
    };
  }

  //  Bind the get_data function to the current instance of the component
  //  this.get_data = this.get_data.bind(this);
  // OR use arrow function with event in onclick fcuntion, inside button

  //------------------api get req with axios---------------------
  // call: <button onClick={() => this.getData(1)} id="1">
  // function: getData = (prop) => {
  //   axios
  //     .get(`https://reqres.in/api/users/${prop}`)
  //     .then((response) => {
  //       // Update the state with the received data
  //       this.setState({
  //         img: response.data.data.avatar,
  //         email: response.data.data.email,
  //         name: `${response.data.data.first_name} ${response.data.data.last_name}`
  //       });
  //     })
  //     .catch((error) => {
  //       alert(error + "\n" + "failed to fetch");
  //     });
  // };

  //-------------------fetch get req function-------------------
  async get_data(e) {
    let button_id = e.target.id;

    // console.log(button_id);
    let res = await fetch(`https://reqres.in/api/users/${button_id}`);

    //when data for given id is found
    if (res.status === 200) {
      let data_json = await res.json();

      console.log("data_json", data_json);

      let fullname_api =
        " " + data_json.data.first_name + " " + data_json.data.last_name;
      let Email_api = " " + data_json.data.email;
      let avatar_api = data_json.data.avatar;
      // console.log(fullname_api + " " + Email_api + " " + avatar_api);

      this.setState({
        fullname: fullname_api,
        Email: Email_api,
        avatar_my: avatar_api,
      });

      //  this.setState((currstate)=>{
      //     fullname:fullname_api,
      //     Email:Email_api,
      //     avatar_my:avatar_api

      //   });
    }
    //when no data found for id=100
    else {
      alert("no data found for this person");
    }
  }

  render() {
    return (
      <div>
        <div>
          <button id="1" onClick={(e) => this.get_data(e)}>
            1
          </button>
          <button id="2" onClick={(e) => this.get_data(e)}>
            2
          </button>
          <button id="3" onClick={(e) => this.get_data(e)}>
            3
          </button>
          <button id="100" onClick={(e) => this.get_data(e)}>
            100
          </button>
        </div>
        <div>
          <ul>
            <li>
              <h3>Name:{this.state.fullname}</h3>
            </li>
            <li>
              <h3>Email:{this.state.Email}</h3>
            </li>
          </ul>
          <img src={this.state.avatar_my} alt="img_my" />
        </div>
      </div>
    );
  }
}

export default App;
