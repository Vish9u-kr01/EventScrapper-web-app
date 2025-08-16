'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      router.push('/dashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="signup-form">
      <h2>Login !</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email',
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  'Password must be at least 8 characters long, contain at least one letter and one number',
              },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Login</button>
        </div>

        {/* Link to Signup */}
        <div>
          <p style={{ marginTop: '20px', marginLeft: '20px', color: 'black' }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" style={{ color: '#2563eb', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </p>
        </div>
      </form>


      {/* Embedded CSS */}
      <style jsx>{`
        .signup-form {
          margin-top:200px;  
          width: 300px;
          margin-left: auto;
          margin-right: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          color: #2563eb;
          background-color: #fff;
          box-sizing: border-box;
        }

        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          padding: 10px;
          background-color: #f9f9f9;
        }

        .signup-form h2 {
          text-align: center;
        }

        .signup-form div {
          margin-bottom: 15px;
          margin-top: 20px;
        }

        .signup-form label {
          display: block;
          margin-bottom: 5px;
        }

        .signup-form input {
          width: 100%;
          padding: 3px;
          border-radius: 4px;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        .error {
          color: red;
          font-size: 12px;
        }

        .signup-form button {
          width: 100%;
          padding: 10px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .signup-form button:hover {
          background-color: #121cea;
        }
      `}</style>
    </div>
  );
};

export default SignupForm;


