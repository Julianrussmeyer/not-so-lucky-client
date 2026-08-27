import TicketCard from "../components/tickets/TicketCard.jsx";
import api from "../lib/api";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Lotto6of49Page() {
  const [tickets, setTickets] = useState([]);
  const [deleteError, setDeleteError] = useState("");
  const [simulation, setSimulation] = useState(null);
  const [simulatedTicketName, setSimulatedTicketName] = useState(null);

  useEffect(() => {
    api
      .get("/games/lotto-6of49/tickets")
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (ticket) => {
    const shouldDelete = window.confirm(
      `Delete "${ticket.name || "this ticket"}"?`,
    );
    if (!shouldDelete) return;

    try {
      setDeleteError("");
      await api.delete(`/games/lotto-6of49/tickets/${ticket._id}`);
      setTickets((previous) =>
        previous.filter((savedTicket) => savedTicket._id !== ticket._id),
      );
    } catch (error) {
      setDeleteError(
        error.response?.data?.message ?? "Could not delete the ticket.",
      );
    }
  };

  const handleSimulate = async (ticketId, ticketName) => {
    try {
      const response = await api.post(
        `/games/lotto-6of49/tickets/${ticketId}/simulate`,
      );
      setSimulation(response.data.simulation);
      setSimulatedTicketName(ticketName);
    } catch (error) {
      console.log(error);
    }
  };

  const allUserTickets = tickets.map((ticket) => (
    <div key={ticket._id}>
      <TicketCard
        ticket={ticket}
        onSimulate={() => handleSimulate(ticket._id, ticket.name)}
        onDelete={() => handleDelete(ticket)}
      />
    </div>
  ));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-16 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
            Your Lotto 6 of 49 Tickets{" "}
            <span className="ml-8 font-mono text-sm text-gray-900 align-middle bg-white rounded-full px-2 py-1">
              {tickets.length} / 6
            </span>
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4 gap-4">
          {tickets.length < 6 ? (
            <NavLink
              className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400"
              to="/games/lotto-6of49/new-ticket"
            >
              New Ticket
            </NavLink>
          ) : (
            <span className="text-sm text-gray-400">Ticket limit reached</span>
          )}
          <NavLink
            className="inline-flex items-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-200/40 dark:shadow-none dark:hover:bg-gray-200/60 dark:focus-visible:outline-indigo-400"
            to="/user"
          >
            View Stats
          </NavLink>
        </div>
      </div>
      {deleteError && (
        <p className="mt-6 text-sm text-red-300">{deleteError}</p>
      )}
      <section className="mt-8 rounded-xl bg-gray-800/70 p-5 text-white ring-1 ring-white/10">
        <h3 className="font-semibold">
          Last Ticket:{" "}
          <span className="font-italic text-orange-300">
            {simulation ? `${simulatedTicketName}` : ""}
          </span>
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-900/60 p-4">
            <p className="text-sm text-gray-400">Draws</p>
            <p className="mt-1 text-lg font-semibold">
              {simulation ? simulation.numberOfDraws : "—"}
            </p>
          </div>
          <div className="rounded-lg bg-gray-900/60 p-4">
            <p className="text-sm text-gray-400">Cost</p>
            <p className="mt-1 text-lg font-semibold">
              {simulation ? `${simulation.ticketCost / 100} €` : "—"}
            </p>
          </div>
          <div className="rounded-lg bg-gray-900/60 p-4">
            <p className="text-sm text-gray-400">Winnings</p>
            <p className="mt-1 text-lg font-semibold">
              {simulation ? `${simulation.ticketWin / 100} €` : "—"}
            </p>
          </div>
          <div className="rounded-lg bg-gray-900/60 p-4">
            <p className="text-sm text-gray-400">Profit / loss</p>
            <p className="mt-1 text-lg font-semibold">
              {simulation ? (
                <span
                  className={
                    simulation.ticketProfit >= 0
                      ? "text-green-200"
                      : "text-red-400"
                  }
                >
                  {`${simulation.ticketProfit / 100} €`}
                </span>
              ) : (
                "—"
              )}
            </p>
          </div>
        </div>
      </section>
      <div className="my-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {allUserTickets}
      </div>
    </div>
  );
}
