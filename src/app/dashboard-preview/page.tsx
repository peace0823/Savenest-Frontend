// src/app/dashboard-preview/page.tsx
import Dashboard from '../dashboard/page'; // adjust path if needed

export default function DashboardPreview() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">🔍 Dashboard Preview</h1>
      <Dashboard />
    </main>
  );
}
