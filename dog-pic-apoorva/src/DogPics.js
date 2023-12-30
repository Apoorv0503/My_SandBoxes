import React, { Component } from "react";
import axios from "axios";
class Dog_pic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //initially by default breed random kr di
      breed: "random",
      img: "",
    };
  }

  //handle next button in GetDogImg also

  //to make axios get req for random and specific breeds
  GetDogImg = async (selected_breed) => {
    console.log("currently selected_breed: ");
    // console.log(selected_breed);

    let url = "";
    //use first letter as small in each breed name bcz 0f API endpoint wesa hi h
    if (selected_breed !== "random") {
      url = `https://dog.ceo/api/breed/${selected_breed}/images/random`;
    } else {
      url = "https://dog.ceo/api/breeds/image/random";
    }
    // console.log(url);
    const res = await axios.get(url);
    const img_link = res.data.message;

    // console.log(img_link);

    this.setState({
      breed: selected_breed,
      img: img_link,
    });
  };

  //since GetDogImg is only triggered when we change the select element,
  // hence we need somthing that can trigger GetDogImg without chnging select,
  // we can use componentDidMount
  componentDidMount() {
    this.GetDogImg(this.state.breed);
  }

  //re-render when there is an state(breed updation from select tag) update:
  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this.GetDogImg(this.state.breed);
    }
  }

  //render function
  render() {
    return (
      <div>
        <div>
          <label>select a breed: </label>

          <select name="dogs" onChange={(e) => this.GetDogImg(e.target.value)}>
            <option value="random">Random</option>
            <option value="beagle">Beagle</option>
            <option value="boxer">Boxer</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="husky">Husky</option>
          </select>
        </div>
        <div>
          <img
            src={this.state.img}
            alt="dog_img"
            width="200px"
            style={{ margin: "20px" }}
          />
        </div>
        <div>
          <button
            value={this.state.breed}
            onClick={(e) => this.GetDogImg(e.target.value)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Dog_pic;
