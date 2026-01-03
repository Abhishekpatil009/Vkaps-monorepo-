"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTaskForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setLoading(true);
    setError("");

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      setError("Failed to add task");
      setLoading(false);
      return;
    }

    setTitle("");
    setLoading(false);

    // 🔥 Refresh server component data
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="border p-2 flex-1"
        placeholder="Enter task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
