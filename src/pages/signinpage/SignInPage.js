import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import './SignInPage.css'
import '../../style/style.css';
import SpaceRobot from '../../components/SpaceRobot/SpaceRobot';


const SignInPage = () => {
  return (
    <PageLayout>
      <div className="upper-right-vector"></div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">SLACK</Link>
        </div>
        <div className="signin-nav-func">
          <div className='question'>New to slack?</div>
          <div className='links_signup'>
          <Link to="/signup">Create an account</Link>
          </div>
        </div>
      </nav>
      {/* Additional sign-in page content */}
       {/* Centered container with content */}
       <div className="centered-container">
        <h1 className='signin-msg'>Sign in to Slack</h1>
        <p className='signin-sugg'>We suggest using the email address that you use at work</p>
        
        {/* Your form or sign-in content can go here */}
          <button className='signin-ggl'><img src='./images/google_icon.png' alt='G' className='gimg'/><span>Sign in with google</span></button>
          <span className='or'>OR</span>
        <form>
        <input type="text" placeholder="name@workemail.com" className="signin-email"/>
        <button type="submit" className="sub-btn">Sign in with Email</button>
        </form>
        {/* Or, if you prefer buttons separately */}
      </div>
      <SpaceRobot/>
    </PageLayout>
  );
};

export default SignInPage;
