import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser ,clearAuthState} from '../actions/auth';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };

  handlesave=()=>{
      const {password,confirmPassword,name}=this.state;
      const {user}=this.props.auth;

      this.props.dispatch(editUser(name,password,confirmPassword,user._id))
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  render() {
    const { user,error } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
           src="http://cdn-icons-png.flaticon.com/512/3135/3135715.png"
           alt="user-dp"
          />
        </div>
       {error && <div className='alert error-dailog'>{error}</div>}
       {error===false && <div className='alert success-dailog'>UPDATED!</div>}
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="field-label">New password</div>

            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">Confirm password</div>

            <input
              type="password"
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn" onClick={this.handlesave}>Save</button>
          ) : (
            <button
              className="button edit-btn"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit profile
            </button>
          )}

          {editMode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editMode', false)}
            >
              Go back
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
