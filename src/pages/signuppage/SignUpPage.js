import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import '../../style/style.css';
import './SignUpPage.css';
import SpaceRobot from '../../components/SpaceRobot/SpaceRobot';

const SignUpPage = () => {
  return (
    <PageLayout>
      <div className="upper-right-vector"></div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">SLACK</Link>
        </div>
        <div className="signin-nav-func">
          <div className='question'>Already have an account?</div>
          <div className='links_signup'>
          <Link to="/signin">Login to your account</Link>
          </div>
        </div>
      </nav>
      <div className="centered-container">
        <h1>Sign up</h1>
        <p className="sign-in-sugg">We suggest using the email address that you use at work</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" name="firstName" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" name="lastName" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="E-mail" name="email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <button type="submit"><p className='reg-p'>Register</p></button>
        </form>
        <p className='askbro'>Already a member? <Link to="/signin" className="login-link">Log in</Link></p>
      </div>
      <SpaceRobot/>
    </PageLayout>
  );
};

export default SignUpPage;
