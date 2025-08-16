'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EventsPage from '../components/Eventspage';

const Dashboard = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    } else {
      router.push('/'); // Redirect to login if no user found
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    router.push('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1>Welcome, {currentUser?.username || "User"}</h1>
        <p>Username: {currentUser?.username}</p>
        <p>Email: {currentUser?.email}</p>
        <p>Password: {currentUser?.password}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* Render EventsPage below the dashboard */}
      {currentUser && <EventsPage />}

      <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
         background: linear-gradient(to bottom right,rgba(6, 78, 59, 0.5),rgba(88, 28, 135, 0.5));
          padding: 10px;
          box-sizing: border-box;
        }

        .dashboard-box {
          margin-bottom: 20px;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 8px;
         background: linear-gradient(to bottom right,rgba(6, 78, 59, 0.5),rgba(88, 28, 135, 0.5));
          box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 100%;
          max-width: 100%;
        }

        .dashboard-box h1 {
          margin-bottom: 0.2rem;
          font-size: 1rem;
          color: #2563eb;
        }

        .dashboard-box p {
          font-size: 0.8rem;
          color:white;
          margin-bottom: 0.2rem;
        }

        .dashboard-box button {
          padding: 4px 8px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .dashboard-box button:hover {
          background-color: #121cea;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
