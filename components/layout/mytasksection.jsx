"use client";

export default function MyTasksSection() {
  // Sample tasks data
  const tasks = [
    { id: 1, title: "Follow up with client A", due: "Feb 25, 2026", completed: false },
    { id: 2, title: "Update CRM records", due: "Feb 26, 2026", completed: true },
    { id: 3, title: "Prepare proposal for client B", due: "Feb 28, 2026", completed: false },
    { id: 4, title: "Schedule team meeting", due: "Mar 1, 2026", completed: false },
  ];

  return (
    <div className="bg-white p-4 border border-gray-300 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">My Tasks</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Task list */}
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-3 border rounded hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                className="w-4 h-4 text-blue-600 rounded border-gray-300"
                readOnly
              />
              <span className={task.completed ? "line-through text-gray-400" : ""}>
                {task.title}
              </span>
            </div>
            <span className="text-xs text-gray-500">{task.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}