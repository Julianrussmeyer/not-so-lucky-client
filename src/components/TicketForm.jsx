import Boxes49 from "./LottoNumberGrid";
import Boxes10 from "./SuperNumberGrid";

import { useState } from "react";

export default function CreateTicket() {
  const [ticket, setTicket] = useState({
    name: "",
    selections: Array.from({ length: 12 }, () => ({ numbers: [] })),
    superNumber: "",
    drawsPerWeek: 1,
    durationWeeks: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 overflow-hidden rounded-2xl bg-gray-800/70 p-5 ring-1 ring-white/10 sm:p-8"
    >
      <div>
        <h3 className="text-lg font-semibold text-white">Create a ticket</h3>
        <p className="mt-1 text-sm text-gray-400">
          Choose your numbers and how long you want to simulate playing.
        </p>
      </div>

      <div className="mt-6">
        <label htmlFor="name" className="text-sm font-medium text-gray-200">
          Ticket name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="name"
            name="name"
            value={ticket.name}
            onChange={(event) =>
              setTicket((previous) => ({
                ...previous,
                name: event.target.value,
              }))
            }
            className="w-full rounded-lg bg-white px-3 py-2 text-gray-900 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
            placeholder="Name your ticket"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-gray-900/60 p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="font-semibold text-white">Game numbers</h3>
          <span className="text-xs text-gray-400">
            Select 6 numbers per game
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ticket.selections.map((_, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-700 bg-gray-800/70 p-2"
            >
              <h4 className="mb-2 text-xs font-thin text-gray-300">
                Game {index + 1}
              </h4>
              <Boxes49 selection={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-gray-900/60 p-4">
          <h3 className="font-semibold text-white">Super Number</h3>
          <div className="mt-4">
            <Boxes10 selection={0} />
          </div>
        </div>

        <div className="rounded-xl bg-gray-900/60 p-4">
          <h3 className="font-semibold text-white">Draws per week</h3>
          <div className="mt-4 flex gap-4">
            <div className="flex flex-col items-center gap-1">
              <label htmlFor="once-per-week" className="text-xs text-gray-200">
                x1
              </label>
              <input
                type="checkbox"
                id="once-per-week"
                name="once-per-week"
                value="1"
                defaultChecked={ticket.drawsPerWeek === 1}
                className="size-4 accent-indigo-600"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <label htmlFor="twice-per-week" className="text-xs text-gray-200">
                x2
              </label>
              <input
                type="checkbox"
                id="twice-per-week"
                name="twice-per-week"
                value="2"
                defaultChecked={ticket.drawsPerWeek === 2}
                className="size-4 accent-indigo-600"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gray-900/60 p-4">
          <label htmlFor="durationWeeks" className="font-semibold text-white">
            Weeks
          </label>
          <input
            type="number"
            id="durationWeeks"
            name="durationWeeks"
            min="1"
            max="5200"
            defaultValue={ticket.durationWeeks}
            className="mt-4 w-full rounded-lg bg-white px-3 py-2 text-gray-900 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end border-t border-white/10 pt-6">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save ticket
        </button>
      </div>
    </form>
  );
}
