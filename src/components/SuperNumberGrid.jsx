export default function Boxes10({ selection }) {
  const numbers = [...Array(10).keys()];

  const checkboxes = numbers.map((num) => {
    const inputId = `selection-${selection}-supernumber-${num}`;
    return (
      <div key={inputId} className="flex flex-col items-center gap-1">
        <label htmlFor={inputId} className="text-xs text-gray-200">
          {num}
        </label>
        <input
          type="checkbox"
          id={inputId}
          name="superNumber"
          value={num}
          className="size-4 accent-indigo-600"
        />
      </div>
    );
  });

  return (
    <fieldset>
      <div className="grid grid-cols-5 gap-x-2 gap-y-3">{checkboxes}</div>
    </fieldset>
  );
}
