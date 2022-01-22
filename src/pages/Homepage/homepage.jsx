import React from "react";
import "./homepagee.scss";
import Profile from './Profile';
class Homepage extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>WELCOME TO PROJECT AlGO_VISU</h1>
        <Profile />
        <div className="material">
          <h2 className="hh">What we used in this Project:</h2>
          <ul>
            <li>
              <h4>HTML</h4>
            </li>
            <li>
              <h4>CSS</h4>
            </li>
            <li>
              <h4>JAVASCRIPT</h4>
            </li>
            <li>
              <h4>ReactJS</h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Homepage;
/*
 <div className="member">
          <ul>
            <li>
              <div className="intro">
                <b>Name: Amzad Hosen</b> <br />
                <b>ID: 182-15-11589</b>
              </div>
            </li>
            <li>
              <div className="intro">
                <b>Name: Md. Imtiaz Hossain</b> <br />
                <b>ID: 182-15-11790</b>
              </div>
            </li>
            <li>
              <div className="intro">
                <b>Name: Md. Hasanul Bari</b> <br />
                <b>ID: 182-15-11788</b>
              </div>
            </li>
          </ul>
        </div>
*/