import Boxes49 from "./LottoNumberGrid";
import Boxes10 from "./SuperNumberGrid";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../lib/api";

function getInitialTicket(initialTicket) {
  if (initialTicket) {
    return {
      name: initialTicket.name || "",
      selections: initialTicket.selections.map((selection) => ({
        numbers: selection.numbers,
      })),
      superNumber: initialTicket.superNumber,
      drawsPerWeek: initialTicket.drawsPerWeek,
      durationWeeks: initialTicket.durationWeeks,
    };
  }

  return {
    name: "",
    selections: [{ numbers: [] }],
    superNumber: "",
    drawsPerWeek: 1,
    durationWeeks: 1,
  };
}

export default function CreateTicket({ initialTicket = null }) {
  const navigate = useNavigate();
  const isEditing = Boolean(initialTicket);
  const [ticket, setTicket] = useState(getInitialTicket(initialTicket));
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  let submitButtonText = "Save ticket";
  if (isEditing) submitButtonText = "Save changes";
  if (isSubmitting) submitButtonText = "Saving...";

  const handleNumberToggle = (selectionIndex, number) => {
    setTicket((previous) => {
      const selections = previous.selections.map((selection, index) => {
        if (index !== selectionIndex) return selection;

        const isSelected = selection.numbers.includes(number);
        if (!isSelected && selection.numbers.length >= 6) return selection;

        const numbers = isSelected
          ? selection.numbers.filter((selected) => selected !== number)
          : [...selection.numbers, number].sort((a, b) => a - b);

        return { ...selection, numbers };
      });

      return { ...previous, selections };
    });
  };

  const addSelection = () => {
    setTicket((previous) => {
      if (previous.selections.length >= 12) return previous;
      return {
        ...previous,
        selections: [...previous.selections, { numbers: [] }],
      };
    });
  };

  const removeSelection = (selectionIndex) => {
    setTicket((previous) => {
      if (previous.selections.length === 1) return previous;
      return {
        ...previous,
        selections: previous.selections.filter(
          (_, index) => index !== selectionIndex,
        ),
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (ticket.selections.some((selection) => selection.numbers.length !== 6)) {
      setError("Select exactly 6 numbers in every game line.");
      return;
    }

    if (ticket.superNumber === "") {
      setError("Select a Super Number.");
      return;
    }

    try {
      setIsSubmitting(true);
      const ticketData = {
        ...ticket,
        name: ticket.name.trim(),
      };

      if (isEditing) {
        await api.patch(
          `/games/lotto-6of49/tickets/${initialTicket._id}`,
          ticketData,
        );
      } else {
        await api.post("/games/lotto-6of49/tickets", ticketData);
      }
      navigate("/games/lotto-6of49");
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ?? "Could not save the ticket.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 overflow-hidden rounded-2xl bg-gray-800/70 p-5 ring-1 ring-white/10 sm:p-8"
    >
      <div>
        <h3 className="text-lg font-semibold text-white">
          {isEditing ? "Edit ticket" : "Create a ticket"}
        </h3>
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
            required
            maxLength={16}
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
            {ticket.selections.length} / 12 game lines
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ticket.selections.map((selection, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-700 bg-gray-800/70 p-2"
            >
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-xs font-thin text-gray-300">
                  Game {index + 1} ({selection.numbers.length} / 6)
                </h4>
                {ticket.selections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSelection(index)}
                    className="text-xs text-gray-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                )}
              </div>
              <Boxes49
                selection={index}
                selectedNumbers={selection.numbers}
                onToggleNumber={(number) =>
                  handleNumberToggle(index, number)
                }
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addSelection}
          disabled={ticket.selections.length >= 12}
          className="mt-4 rounded-lg border border-gray-600 px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add game line
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-gray-900/60 p-4">
          <h3 className="font-semibold text-white">Super Number</h3>
          <div className="mt-4">
            <Boxes10
              selection={0}
              selectedNumber={ticket.superNumber}
              onChange={(superNumber) =>
                setTicket((previous) => ({ ...previous, superNumber }))
              }
            />
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
                type="radio"
                id="once-per-week"
                name="drawsPerWeek"
                value="1"
                checked={ticket.drawsPerWeek === 1}
                onChange={() =>
                  setTicket((previous) => ({ ...previous, drawsPerWeek: 1 }))
                }
                className="size-4 accent-indigo-600"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <label htmlFor="twice-per-week" className="text-xs text-gray-200">
                x2
              </label>
              <input
                type="radio"
                id="twice-per-week"
                name="drawsPerWeek"
                value="2"
                checked={ticket.drawsPerWeek === 2}
                onChange={() =>
                  setTicket((previous) => ({ ...previous, drawsPerWeek: 2 }))
                }
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
            value={ticket.durationWeeks}
            onChange={(event) =>
              setTicket((previous) => ({
                ...previous,
                durationWeeks: Number(event.target.value),
              }))
            }
            className="mt-4 w-full rounded-lg bg-white px-3 py-2 text-gray-900 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {error && <p className="mt-6 text-sm text-red-300">{error}</p>}

      <div className="mt-6 flex justify-end gap-3 border-t border-white/10 pt-6">
        <NavLink
          to="/games/lotto-6of49"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white"
        >
          Cancel
        </NavLink>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}
