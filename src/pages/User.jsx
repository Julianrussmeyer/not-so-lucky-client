import { useAuthContext } from "../lib/useAuthContext.js";
import { NavLink } from "react-router-dom";

export default function Userpage() {
  const { user } = useAuthContext();
  if (!user) return <p className="text-white">...loading</p>;
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          Hey {user.username}
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          Your Stats <span className="text-xs">(coming soon)</span>
        </p>
        <section className="mt-8 rounded-xl bg-gray-800/70 p-5 text-white ring-1 ring-white/10">
          <h3 className="font-semibold">Gambling summary</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-900/60 p-4">
              <p className="text-sm text-gray-400">Draws</p>
              <p className="mt-1 text-lg font-semibold">—</p>
            </div>
            <div className="rounded-lg bg-gray-900/60 p-4">
              <p className="text-sm text-gray-400">Cost</p>
              <p className="mt-1 text-lg font-semibold">—</p>
            </div>
            <div className="rounded-lg bg-gray-900/60 p-4">
              <p className="text-sm text-gray-400">Winnings</p>
              <p className="mt-1 text-lg font-semibold">—</p>
            </div>
            <div className="rounded-lg bg-gray-900/60 p-4">
              <p className="text-sm text-gray-400">Profit / loss</p>
              <p className="mt-1 text-lg font-semibold">—</p>
            </div>
          </div>
        </section>
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
