import React from "react";
import Merge_Sort from "../../algo/merge";
import Bubble_Sort from "../../algo/bubble1";
import Insertion_Sort from "../../algo/insertio";
import Quick_Sort from "../../algo/quicksort";
import { notify } from "react-notify-toast";
import "./SortingVisualizer.scss";
import SelectionSort from "../../algo/selectionSort";
var ANIMATION_SPEED_MS = 2;
var ANIMATION_SPEED_MS1 = 0.8;
var NUMBER_OF_ARRAY_BARS = 300;
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";
const END_COLOR = "#181540";

class SortingVisualizer extends React.Component {
  state = {
    array: [],
    bars: "pointer"
  };

  componentDidMount(a = null) {
    if (a === null) {
      this.resetArray();
    }
  }

  resetArray = () => {
    const array = [];
    if (NUMBER_OF_ARRAY_BARS > 30) {
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(5, 500));
      }
    } else {
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(2, 40));
      }
    }
    this.setState({ array: array });
    const bar = document.getElementsByClassName("array-bar");
    for (let i = 0; i < bar.length; i++) {
      const color = bar[i].style;
      color.backgroundColor = PRIMARY_COLOR;
    }
  };
  mergeSort = () => {
    setTimeout(() => {
      this.setState({ bars: "auto" });
    }, 50);
    setTimeout(() => {
      const animations = Merge_Sort(this.state.array);
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            if (NUMBER_OF_ARRAY_BARS > 30) {
              barOneStyle.height = `${newHeight}px`;
            } else {
              const msg = document.getElementsByClassName("msgg");
              barOneStyle.height = `${15 * newHeight}px`;
              msg[barOneIdx].innerHTML = `${newHeight}`;
            }
            if (i === animations.length - 1) {
              this.setState({
                bars: "pointer"
              });
              notify.show(`Sorted by Merge Sort`, "success", 5000);
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  };
  quickSort = () => {
    setTimeout(() => {
      this.setState({ bars: "auto" });
    }, 50);
    setTimeout(() => {
      const ani = Quick_Sort(this.state.array);
      const bar = document.getElementsByClassName("array-bar");
      for (let i = 0; i < ani.length; i++) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOne, barTwo] = ani[i];
          const barOneStyle = bar[barOne].style;
          const barTwoStyle = bar[barTwo].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else if (ani[i].length === 5) {
          setTimeout(() => {
            const [barOne, barOneHeight, barTwo, barTwoHeight, string] = ani[i];
            const one = bar[barOne].style;
            const two = bar[barTwo].style;
            one.height = `${barOneHeight}px`;
            two.height = `${barTwoHeight}px`;
            if (NUMBER_OF_ARRAY_BARS <= 30) {
              const msg = document.getElementsByClassName("msgg");
              msg[barOne].innerHTML = `${barOneHeight}`;
              msg[barTwo].innerHTML = `${barTwoHeight}`;
              one.height = `${15 * barOneHeight}px`;
              two.height = `${15 * barTwoHeight}px`;
            }
            if (string === "pivot") {
              two.backgroundColor = END_COLOR;
            }
            if (i === ani.length - 1) {
              this.setState({
                bars: "pointer"
              });
              notify.show(`Sorted by Merge Sort`, "success", 5000);
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  };
  insertionSort = () => {
    setTimeout(() => {
      this.setState({ bars: "auto" });
    }, 50);
    setTimeout(() => {
      const ani = Insertion_Sort(this.state.array);
      const bar = document.getElementsByClassName("array-bar");
      for (let i = 0; i < ani.length; i++) {
        const isChange = i % 3 !== 2;
        if (isChange) {
          const [barOne, barTwo] = ani[i];
          const barOneColor = bar[barOne].style;
          const barTwoColor = bar[barTwo].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneColor.backgroundColor = color;
            barTwoColor.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barr, barHeight] = ani[i];
          const newHeight = bar[barr].style;
          setTimeout(() => {
            newHeight.height = `${barHeight}px`;
            if (NUMBER_OF_ARRAY_BARS <= 30) {
              newHeight.height = `${barHeight * 15}px`;
              const msg = document.getElementsByClassName("msgg");
              msg[barr].innerHTML = `${barHeight}`;
            }
            if (i === ani.length - 1) {
              this.setState({
                bars: "pointer"
              });
              notify.show(`Sorted by Inserttion Sort`, "success", 5000);
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  };

  bubbleSort = () => {
    setTimeout(() => {
      this.setState({ bars: "auto" });
    }, 50);

    setTimeout(() => {
      const bar = document.getElementsByClassName("array-bar");
      const animation = Bubble_Sort(this.state.array);
      for (let i = 0; i < animation.length; i++) {
        const isChanging = i % 3 !== 2;
        if (isChanging) {
          const [x, y] = animation[i];
          const barOne = bar[x].style;
          const barTwo = bar[y].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOne.backgroundColor = color;
            barTwo.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [w, x, y, z, m] = animation[i];
            const barOneHeight = bar[w].style;
            const barTwoHeight = bar[y].style;
            barOneHeight.height = `${x}px`;
            barTwoHeight.height = `${z}px`;
            if (NUMBER_OF_ARRAY_BARS <= 30) {
              const msg = document.getElementsByClassName("msgg");
              msg[w].innerHTML = `${x}`;
              msg[y].innerHTML = `${z}`;
              barOneHeight.height = `${15 * x}px`;
              barTwoHeight.height = `${15 * z}px`;
            }
            if (m === "last") {
              const s = bar[y].style;
              const color = END_COLOR;
              s.backgroundColor = color;
            }
            if (i === animation.length - 1) {
              const s = bar[0].style;
              s.backgroundColor = END_COLOR;
              this.setState({
                bars: "pointer"
              });
              notify.show(`Sorted by Merge Sort`, "success", 5000);
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  };
  selectionSort = () => {
    setTimeout(() => {
      this.setState({ bars: "auto" });
    }, 50);

    setTimeout(() => {
      const bar = document.getElementsByClassName("array-bar");
      const animation = SelectionSort(this.state.array);
      for (let i = 0; i < animation.length; i++) {
        const isChanging = i % 3 !== 2;
        if (isChanging) {
          const [x, y] = animation[i];
          const barOne = bar[x].style;
          const barTwo = bar[y].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOne.backgroundColor = color;
            barTwo.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else if (animation[i].length === 5) {
          setTimeout(() => {
            const [w, x, y, z, m] = animation[i];
            const barOneHeight = bar[w].style;
            const barTwoHeight = bar[y].style;
            barOneHeight.height = `${x}px`;
            barTwoHeight.height = `${z}px`;
            if (NUMBER_OF_ARRAY_BARS <= 30) {
              const msg = document.getElementsByClassName("msgg");
              msg[w].innerHTML = `${x}`;
              msg[y].innerHTML = `${z}`;
              barOneHeight.height = `${15 * x}px`;
              barTwoHeight.height = `${15 * z}px`;
              if (i === animation.length - 1) {
                this.setState({
                  bars: "pointer"
                });
              }
            }
            if (m === "last") {
              const s = bar[w].style;
              s.backgroundColor = END_COLOR;
            }

            if (i === animation.length - 1) {
              const s = bar[w - 1].style;
              s.backgroundColor = END_COLOR;
              this.setState({
                bars: "pointer"
              });
              notify.show(`Sorted by Merge Sort`, "success", 5000);
            }
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }, 60);
  };
  handleChange = e => {
    const x = Math.floor(e.target.value);
    NUMBER_OF_ARRAY_BARS = x;
    // this.resetArray();
    this.componentDidMount();
  };
  changems = e1 => {
    const x1 = Math.floor(e1.target.value);
    ANIMATION_SPEED_MS = x1;
    // this.resetArray();
    this.componentDidMount('aa');
  };

  render() {
    const { array } = this.state;
    return (
      <div className="main-container">
        <div className="sorts-div">

          <div>
            <b>Change array size: </b>
            <input
              id="changeSize"
              type="range"
              min="10"
              max="500"
              value={NUMBER_OF_ARRAY_BARS}
              style={{ cursor: `${this.state.bars}` }}
              disabled={this.state.bars === "auto" ? "disabled" : null}
              onChange={this.handleChange}
            />
            <b>{NUMBER_OF_ARRAY_BARS} </b>
          </div>
          <div>
            <b>Change Speed(ms): </b>
            <input
              className="input"
              id="changeSize1"
              type="range"
              min="1"
              max="400"
              value={ANIMATION_SPEED_MS}
              style={{ cursor: `${this.state.bars}` }}
              disabled={this.state.bars === "auto" ? "disabled" : null}
              onChange={this.changems}
            />
            <b>{ANIMATION_SPEED_MS} </b>
          </div>


          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.state.bars === "pointer" ? this.resetArray : null}
              style={{ cursor: `${this.state.bars}` }}
            >
              Generate New Array
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.state.bars === "pointer" ? this.mergeSort : null}
              style={{ cursor: `${this.state.bars}` }}
            >
              Merge Sort
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.state.bars === "pointer" ? this.quickSort : null}
              style={{ cursor: `${this.state.bars}` }}
            >
              Quick Sort
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={
                this.state.bars === "pointer" ? this.insertionSort : null
              }
              style={{ cursor: `${this.state.bars}` }}
            >
              Insertion_Sort
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.state.bars === "pointer" ? this.bubbleSort : null}
              style={{ cursor: `${this.state.bars}` }}
            >
              Bubble Sort
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={
                this.state.bars === "pointer" ? this.selectionSort : null
              }
              style={{ cursor: `${this.state.bars}` }}
            >
              Selection Sort
            </button>
          </div>
        </div>
        {this.state.bars === "auto" ? (
          <div class="typewriter">
            <b>Sorting..</b>
          </div>
        ) : (
            ""
          )}
        {this.state.array.length > 40 ? (
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`
                }}
              >
                <h5>{value}</h5>
              </div>
            ))}
          </div>
        ) : (
            //////////////////////////////////////
            <div className="array-container2">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${15 * value}px`
                  }}
                >
                  <h4 className="msgg">{value}</h4>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
