import React from 'react';
import SignUpForm from './SignUpForm'; 

const SignUpPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <SignUpForm />
      </div>
      <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </footer>
    </div>
  );
};

export default SignUpPage;
