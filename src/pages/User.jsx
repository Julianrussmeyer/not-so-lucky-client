import { useAuthContext } from "../lib/useAuthContext.js";
import { NavLink } from "react-router-dom";
import UserStats from "../components/UserStats.jsx";
import { useEffect, useState } from "react";
import api from "../lib/api";

export default function Userpage() {
  const [userStats, setUserStats] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchUserStats = async () => {
      const response = await api.get("/auth/stats");
      setUserStats(response.data.stats);
      console.log(response.data.stats);
    };

    fetchUserStats();
  }, []);

  if (!user) return <p className="text-white">...loading</p>;
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          Hey {user.username}
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          Your Stats
        </p>
        {userStats ? (
          <UserStats userStats={userStats} />
        ) : (
          <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
            <div className="mx-auto max-w-2xl text-center">
              <span className="loader"></span>
            </div>
          </div>
        )}
        <div className="mt-8">
          <NavLink
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400"
            to="/games/lotto-6of49/"
          >
            Play
          </NavLink>
        </div>
      </div>
    </div>
  );
}
