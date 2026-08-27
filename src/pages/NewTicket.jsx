import TicketTicket from "../components/tickets/TicketForm.jsx";

export default function NewTicket() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-16 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
            Create a Lotto 6 of 49 ticket
          </h2>
        </div>
      </div>
      <div>
        <TicketTicket />
      </div>
    </div>
  );
}
