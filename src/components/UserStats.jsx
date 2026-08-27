export default function UserStats({ userStats }) {
  const spent = userStats.totalSpentCents / 100;
  const won = userStats.totalWonCents / 100;
  const profit = won - spent;

  const formattedDraws = userStats.totalDraws.toLocaleString("en-US");
  const formattedSpent = spent.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
  const formattedWins = won.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
  const formattedProfit = profit.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
  return (
    <section className="mt-8 rounded-xl bg-gray-800/70 p-5 text-white ring-1 ring-white/10">
      <h3 className="font-semibold">Gambling summary</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-gray-900/60 p-4">
          <p className="text-sm text-gray-400">Draws</p>
          <p className="mt-1 text-lg font-semibold">{formattedDraws}</p>
        </div>
        <div className="rounded-lg bg-gray-900/60 p-4">
          <p className="text-sm text-gray-400">Cost</p>
          <p className="mt-1 text-lg font-semibold">-{formattedSpent}</p>
        </div>
        <div className="rounded-lg bg-gray-900/60 p-4">
          <p className="text-sm text-gray-400">Winnings</p>
          <p className="mt-1 text-lg font-semibold">{formattedWins}</p>
        </div>
        <div className="rounded-lg bg-gray-900/60 p-4">
          <p className="text-sm text-gray-400">Profit / loss</p>
          <p
            className={
              formattedProfit >= 0
                ? "text-green-200 mt-1 text-lg font-semibold"
                : "text-red-400 mt-1 text-lg font-semibold"
            }
          >
            {formattedProfit}
          </p>
        </div>
      </div>
    </section>
  );
}
