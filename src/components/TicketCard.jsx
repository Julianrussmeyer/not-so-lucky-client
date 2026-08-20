export default function TicketCard({ ticket }) {
  const ticketNumbers = ticket.selections.map((selection) => {
    const line = selection.numbers;
    return (
      <div key={selection._id} className="flex gap-4">
        {line.map((num) => {
          return (
            <div
              key={num}
              className="bg-white w-10 p-2 rounded-full text-center"
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
      </div>
      <div className="flex gap-4 px-4 py-4 sm:px-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Edit
        </button>
                <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
