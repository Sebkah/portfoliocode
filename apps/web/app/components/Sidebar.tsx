/**
 * Sidebar component for the portfolio
 * Displays the developer name and title in a fixed sidebar layout
 */
const Sidebar = () => {
  return (
    <aside className="flex h-full w-fit flex-col items-start gap-1 border-r-2 border-r-white p-8 tracking-tighter text-white">
      <h1 className="font-doto text-3xl font-bold">Sébastien K. </h1>
      <h2 className="font-doto text-1xl leading-0.5 font-semibold">
        Frontend Dev
      </h2>
    </aside>
  );
};

export default Sidebar;
