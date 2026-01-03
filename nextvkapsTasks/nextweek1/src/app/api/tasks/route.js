import { NextResponse } from "next/server";
import { tasks } from "@/lib/data";

// GET → fetch tasks
export async function GET() {
  return NextResponse.json(tasks);
}

// POST → add new task
export async function POST(request) {
  const body = await request.json();

  if (!body.title || body.title.trim() === "") {
    return NextResponse.json(
      { message: "Title is required" },
      { status: 400 }
    );
  }

  const newTask = {
    id: Date.now().toString(),
    title: body.title,
    status: "Pending",
  };

  tasks.push(newTask);

  return NextResponse.json(newTask, { status: 201 });
}
