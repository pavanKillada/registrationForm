// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameFilled: false,
    lastNameFilled: false,
    registered: false,
  }

  componentDidMount() {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameFilled: true,
      lastNameFilled: true,
      registered: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({
        firstNameFilled: false,
        lastNameFilled: false,
      })
    } else if (firstName === '' && lastName !== '') {
      this.setState({
        firstNameFilled: false,
        lastNameFilled: true,
      })
    } else if (firstName !== '' && lastName === '') {
      this.setState({
        firstNameFilled: true,
        lastNameFilled: false,
      })
    } else {
      this.setState({
        firstNameFilled: true,
        lastNameFilled: true,
        registered: true,
      })
    }
  }

  firstNameChange = event => {
    this.setState({firstName: event.target.value, firstNameFilled: true})
  }

  lastNameChange = event => {
    this.setState({lastName: event.target.value, lastNameFilled: true})
  }

  firstNameFocus = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstNameFilled: false})
    } else {
      this.setState({firstNameFilled: true})
    }
  }

  lastNameFocus = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastNameFilled: false})
    } else {
      this.setState({lastNameFilled: true})
    }
  }

  submitAnotherResponse = () => {
    this.componentDidMount()
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameFilled,
      lastNameFilled,
      registered,
    } = this.state
    return (
      <div className="bg-container">
        <h1>Registration</h1>
        {!registered ? (
          <form onSubmit={this.onSubmitForm}>
            <label htmlFor="first-name">FIRST NAME</label>
            <input
              onChange={this.firstNameChange}
              value={firstName}
              type="text"
              id="first-name"
              placeholder="First name"
              onBlur={this.firstNameFocus}
            />
            {!firstNameFilled && <p>Required</p>}
            <label htmlFor="last-name">LAST NAME</label>
            <input
              onChange={this.lastNameChange}
              value={lastName}
              type="text"
              id="last-name"
              placeholder="Last name"
              onBlur={this.lastNameFocus}
            />
            {!lastNameFilled && <p>Required</p>}
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="success-container">
            <img
              className="tick-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="success-para">Submitted Successfully</p>
            <button
              onClick={this.submitAnotherResponse}
              className="submit-btn"
              type="button"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
