import './SignUp.css';

export default function SignUp() {
    return (
        <div className='signup-page'>
            <div className="signup-container">
                <div className="signup-header">
                    <h1>Sign Up</h1>
                    <p>Please fill in the form below to create an account.</p>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text" id="fullname" name="fullname" placeholder='Enter your full name' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder='Enter your email address' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder='Enter your password' required />
                    </div>
                    <button type="submit" className='smt-btn'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}
