import {Component} from 'react'

import './index.css'

class GreetUser extends Component {
  state = {isDropDownClick: false}

  onClickDropDown = () => {
    this.setState(prevState => ({isDropDownClick: !prevState.isDropDownClick}))
  }

  render() {
    const {isDropDownClick} = this.state
    return (
      <ul className="main-container">
        <li>
          <button type="button" className="dropdown-button">
            Home
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-button">
            News
          </button>
        </li>
        <li className={isDropDownClick ? 'list-container2' : 'list-container1'}>
          <>
            <button
              type="button"
              className="dropdown-button"
              onClick={this.onClickDropDown}
            >
              Dropdown
            </button>
            <div>
              {isDropDownClick && (
                <div className="">
                  <button className="custom-button" type="button">
                    Link1
                  </button>
                  <button className="custom-button" type="button">
                    Link2
                  </button>
                  <button className="custom-button" type="button">
                    Link3
                  </button>
                </div>
              )}
            </div>
          </>
        </li>
      </ul>
    )
  }
}

export default GreetUser
