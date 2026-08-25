const stats = [
  { id: 1, name: "Global gambling revenue in 2024.", value: "$712 billion" },
  { id: 2, name: "Adults affected by problem gambling", value: "80 million" },
  { id: 3, name: "Of gambling losses come from harmful gambling", value: "60%" },
];

export default function Homepage() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl text-center">
        <p className="w-fit mx-auto relative rounded-full px-3 py-1 text-sm/6 text-gray-100 ring-1 ring-gray-900/10 dark:text-gray-400 dark:ring-white/20">
          How lucky are you, really?
        </p>
        <h2 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          Welcome Gambler
        </h2>
        <p className="mt-8 text-xs text-pretty text-center text-gray-500 sm:text-base/7 dark:text-gray-400">
          {" "}
          Winning the lottery can change your life. The problem is:{" "}
          <strong> you probably won't.</strong>
        </p>
        <p className="mt-0 text-sm text-pretty text-center text-gray-500 sm:text-base/7 dark:text-gray-400">
          {" "}
          Test your luck without spending real money. Pick your numbers,
          simulate weeks, years or even a lifetime of playing and see what
          chasing the jackpot could actually cost you. No real money. No
          gambling. Just probability and less regret.
        </p>
      </div>
      <div className="mt-16 sm:mt-32 mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-600 dark:text-gray-400">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
