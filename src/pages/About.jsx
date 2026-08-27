import {
  HashtagIcon,
  EyeIcon,
  BanknotesIcon, 
} from "@heroicons/react/20/solid";

export default function About() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
        <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          About the project
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          How lucky are you really?
        </h1>
        <p className="mt-6 text-xl/8">
          NotSoLucky is an educational German Lotto simulator that shows what
          repeatedly chasing a jackpot could cost over time—without risking any
          real money.
        </p>
        <div className="mt-10 max-w-2xl text-gray-600 dark:text-gray-400">
          <p>
            Create and save your own Lotto 6aus49 tickets, choose how often and
            how long you want to play, and simulate the results. NotSoLucky
            compares your total spending with your simulated winnings, helping
            make the lottery’s unlikely rewards and long-term financial cost
            easier to understand.
          </p>
          <ul
            role="list"
            className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-400"
          >
            <li className="flex gap-x-3">
              <HashtagIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  Choose your lucky numbers.
                </strong>{" "}
                Create personalised tickets with multiple game lines and a
                Superzahl.
              </span>
            </li>
            <li className="flex gap-x-3">
              <EyeIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  Simulate the future.
                </strong>{" "}
                See what might happen after playing for weeks, years, or even a
                lifetime.
              </span>
            </li>
            <li className="flex gap-x-3">
              <BanknotesIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  See the real cost.
                </strong>{" "}
                Compare how much you spent, won, and ultimately gained or lost.
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
            Built as an Ironhack final project
          </h2>
          <p className="mt-6">
            NotSoLucky was created for the WD-PT-MARCH2026 Web Development
            Part-Time course at Ironhack. It is a full-stack web application
            built with React, Express, Node.js, and MongoDB, bringing together
            the concepts and technologies learned throughout the course.
          </p>
          <p className="mt-6">
            No real money. No gambling. Just probability and hopefully a little
            less regret.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
