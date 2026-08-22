export default function Boxes49({selection}) {
  const numbers = Array.from({ length: 49 }, (_, index) => index + 1);



  const checkboxes = numbers.map((num) => {
      const inputId = `selection-${selection}-number-${num}`;
    return (
      <div className="flex flex-col" key={inputId}>
        <label htmlFor={inputId} className="text-white text-justify text-xs">
          {num}
        </label>
        <div>
          <input type="checkbox" id={inputId} name={inputId} className="text-justify" />
        </div>
      </div>
    );
  });

  return (
    <fieldset>
      <div className="grid grid-cols-10 max-w-1/6">{checkboxes}</div>
    </fieldset>
  );
}
