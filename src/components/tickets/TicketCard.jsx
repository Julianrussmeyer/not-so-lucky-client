import { NavLink } from "react-router-dom";

export default function TicketCard({ ticket, onSimulate, onDelete }) {
  const ticketNumbers = ticket.selections.map((selection) => {
    const line = selection.numbers;
    return (
      <div key={selection._id} className="flex gap-4 justify-between">
        {line.map((num) => {
          return (
            <div
              key={num}
              className="bg-white w-10 p-2 rounded-full text-center text-gray-800"
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          {ticket.name}
        </h3>{" "}
      </div>
      <div className="flex flex-col gap-8  px-4 py-5 sm:p-6">
        {ticketNumbers}
        <div className="flex items-center justify-between text-gray-400">
          <div>
            Supernumber:{" "}
            <span className="bg-white w-10 py-2 px-3 rounded-full text-center text-gray-800">
              {ticket.superNumber}
            </span>
          </div>
          <div>
            x{ticket.drawsPerWeek} / {ticket.durationWeeks} weeks
          </div>
        </div>
      </div>
      <div className="flex gap-4 px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={onSimulate}
          className="inline-flex items-center rounded-md bg-green-700/40 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-700/60 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Simulate
        </button>
        <NavLink
          to={`/games/lotto-6of49/tickets/${ticket._id}/edit`}
          className="inline-flex items-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-200/40 dark:shadow-none dark:hover:bg-gray-200/60 dark:focus-visible:outline-indigo-400"
        >
          Edit
        </NavLink>
        <button
          type="button"
          onClick={onDelete}
          className="inline-flex items-center rounded-md bg-red-700/30 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-700/80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
