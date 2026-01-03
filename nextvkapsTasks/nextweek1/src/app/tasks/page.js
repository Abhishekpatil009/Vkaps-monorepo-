import AddTaskForm from "@/components/AddTaskForm";

async function getTasks() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
}

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <AddTaskForm />

      <div className="mt-6">
        {tasks.map(task => (
          <div key={task.id} className="border p-3 mb-2">
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}
