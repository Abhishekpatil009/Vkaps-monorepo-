export default function TaskDetails({ params }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Task ID : {params.id}</h2>
    </div>
  );
}
