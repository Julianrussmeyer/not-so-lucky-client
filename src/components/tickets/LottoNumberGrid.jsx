export default function Boxes49({
  selection,
  selectedNumbers,
  onToggleNumber,
}) {
  const numbers = Array.from({ length: 49 }, (_, index) => index + 1);

  const checkboxes = numbers.map((num) => {
    const inputId = `selection-${selection}-number-${num}`;
    return (
      <div key={inputId} className="flex flex-col items-center gap-1">
        <label
          htmlFor={inputId}
          className="text-[10px] leading-none text-gray-200"
        >
          {num}
        </label>
        <input
          type="checkbox"
          id={inputId}
          name={inputId}
          checked={selectedNumbers.includes(num)}
          disabled={selectedNumbers.length >= 6 && !selectedNumbers.includes(num)}
          onChange={() => onToggleNumber(num)}
          className="size-3 accent-indigo-600"
        />
      </div>
    );
  });

  return (
    <fieldset>
      <div className="mx-auto grid max-w-md grid-cols-7 gap-x-1 gap-y-2">
        {checkboxes}
      </div>
    </fieldset>
  );
}
