import Counter from "./features/counter/Counter";
import Filter from "./features/filter/Filter";
import Tasks from "./features/tasks/Tasks";

function App() {
  return (
    <main className="container min-h-screen min-w-96">
      <Filter />
      <Tasks />
      <Counter />
    </main>
  );
}

export default App;
