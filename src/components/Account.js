import React from 'react';
import './Account.css';
import {Link} from 'react-router-dom';
class Account extends React.Component {
  render() {
    return(
      <div className="account">
        <ul>
          <div className="edit_account">
          <h1>Account</h1>
          <h2>Profile,Email,Password</h2>
          <Link>
              <li>History</li>
          </Link>
          </div>
          <Link>
              <li>Help</li>
          </Link>
          <Link>
              <li>Sign Out</li>
          </Link>
        </ul>
      </div>
    );
  }
}
export default Account;
