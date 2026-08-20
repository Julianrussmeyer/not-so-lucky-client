import TicketCard from "../components/TicketCard.jsx";
import api from "../lib/api";
import { useState, useEffect } from "react";

export default function Lotto6of49Page() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await api.get("/games/lotto-6of49/tickets");
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const allUserTickets = tickets.map((ticket) => (
    <div className="">
      <TicketCard key={ticket._id} ticket={ticket} />
    </div>
  ));

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mt-16 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
            Your Lotto 6 of 49 Tickets{" "}
            <span className="ml-8 font-mono text-sm text-gray-900 align-middle bg-white rounded-full px-2 py-1">
              {tickets.length}
            </span>
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400"
          >
            New Ticket
          </button>
        </div>
      </div>
      <div className="my-16 flex flex-col gap-8">{allUserTickets}</div>
    </div>
  );
}
