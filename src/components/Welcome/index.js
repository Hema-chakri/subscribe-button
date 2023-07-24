// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getSubscription = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const subscribeCondition = this.getSubscription()
    return (
      <div className="container">
        <h1 className="title">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" onClick={this.onSubscribe}>
          {subscribeCondition}
        </button>
      </div>
    )
  }
}

export default Welcome
