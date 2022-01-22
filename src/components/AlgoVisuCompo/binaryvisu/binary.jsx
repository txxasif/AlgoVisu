import React from "react";
import "./binary.scss";
import Binary_Search from "../../../algo/binarySearch";
import Searchbar from "../../../components/searchbar/search";
const MID_POINT = "#FF851B";
const FOURTH_COLOR = "#967a95";
const OLD_COLOR = "#2e2033";
const BINARYANI = 1000;
class Binary extends React.Component {
  state = { array1: [], x: null, n: 47 };
  componentDidMount() {
    this.resetArray();
  }

  search1 = event => {
    const s = parseInt(event.target.value);
    this.setState({ x: s });
  };
  resetArray = () => {
    const array = [];
    for (let i = 1; i <= this.state.n; i++) {
      array.push(i);
    }
    this.setState({
      array1: array
    });
  };
  genA = () => {
    setTimeout(() => {
      const { n } = this.state;
      const x1 = n + 1;
      console.log(x1);

      this.setState({ n: x1 });
      this.resetArray();
    }, 0);
  };
  binarySearch = () => {
    const { array1, x } = this.state;
    const ani = Binary_Search(array1, x);
    console.log("s1");

    console.log(ani);

    const bar = document.getElementsByClassName("content");
    const msg = document.getElementsByClassName("msg");
    const n = ani.length - 1;
    const searchN = x;
    console.log(searchN);

    for (let i = 0; i <= n; i++) {
      if (i + 3 === n) {
        const [z] = ani[i + 3];
        if (z === -1) {
          setTimeout(() => {
            msg[0].innerHTML = `${searchN} NOT FOUND!`;
          }, i * BINARYANI);
          break;
        }
      }

      const check = i % 2 === 0;
      if (check) {
        if (ani[i].length === 1) {
          const [x] = ani[i];
          const midColor = bar[x].style;
          setTimeout(() => {
            midColor.backgroundColor = MID_POINT;
            msg[0].innerHTML = `MID POINT IS ${array1[x]}`;
            if (i === n) {
              const [x] = ani[i];
              msg[0].innerHTML = `FOUND! ${searchN} found at position ${x}`;
            }
          }, i * BINARYANI);
        } else {
          const [x, y, z] = ani[i];
          setTimeout(() => {
            for (let j = x; j <= y; j++) {
              const others = bar[j].style;
              others.backgroundColor = FOURTH_COLOR;
              if (z === "left") {
                msg[0].innerHTML = `${searchN} is less than mid. So, Going left...`;
              } else {
                msg[0].innerHTML = `${searchN} is greater than mid. So, Going Right...`;
              }
            }
          }, i * BINARYANI);
        }
      } else {
        if (ani[i].length === 1) {
          const [x] = ani[i];
          const midColor = bar[x].style;
          setTimeout(() => {
            midColor.backgroundColor = OLD_COLOR;
          }, i * BINARYANI);
        } else {
          const [x, y] = ani[i];
          setTimeout(() => {
            for (let j = x; j <= y; j++) {
              const others = bar[j].style;
              others.backgroundColor = OLD_COLOR;
            }
          }, i * BINARYANI);
        }
      }
    }
  };
  render() {
    const { array1 } = this.state;
    return (
      <div className="mcon">
        <div className="searchC">
          <Searchbar search={this.search1} />
          <button onClick={this.binarySearch}>Search</button>
        </div>
        <div className="main-containerr">
          <ul>
            {array1.map((value, index) => (
              <li key={2 * index}>
                <div className="content" key={index}>
                  {value}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="msg1">
          <div className="msg"></div>
        </div>
      </div>
    );
  }
}
export default Binary;
