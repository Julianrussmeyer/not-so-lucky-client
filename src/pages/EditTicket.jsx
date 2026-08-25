import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CreateTicket from "../components/tickets/TicketForm.jsx";
import api from "../lib/api";

export default function EditTicket() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/games/lotto-6of49/tickets/${ticketId}`)
      .then((response) => setTicket(response.data.ticketDetails))
      .catch((requestError) => {
        setError(
          requestError.response?.data?.message || "Could not load the ticket.",
        );
      });
  }, [ticketId]);

  if (error) {
    return (
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-red-300">{error}</p>
        <NavLink
          to="/games/lotto-6of49"
          className="mt-4 inline-block text-sm font-semibold text-indigo-400"
        >
          Back to tickets
        </NavLink>
      </div>
    );
  }

  if (!ticket) {
    return <p className="mt-16 text-center text-gray-400">Loading ticket...</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mt-16 text-3xl font-bold text-white">Edit ticket</h2>
      <CreateTicket initialTicket={ticket} />
    </div>
  );
}
