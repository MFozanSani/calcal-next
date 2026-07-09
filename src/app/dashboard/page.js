import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // 1. Protect the route - redirect to sign-in if not authenticated
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    redirect("/api/auth/signin");
  }

  // 2. Fetch all logs belonging to this specific user, newest first
  const userLogs = await prisma.macroLog.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session.user.name || "User"}</h1>
            <p className="text-gray-500">Here is your macro history tracking history.</p>
          </div>
          <a 
            href="/" 
            className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-700"
          >
            + Log New Macros
          </a>
        </div>

        {/* History Section */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Past Entries</h2>
          
          {userLogs.length === 0 ? (
            <p className="text-gray-500">You haven't logged any daily stats yet. Hit the button above to start!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Weight</th>
                    <th className="px-4 py-3">Protein</th>
                    <th className="px-4 py-3">Carbs</th>
                    <th className="px-4 py-3">Fats</th>
                    <th className="px-4 py-3">Goal</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {userLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {new Date(log.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">{log.weight} kg</td>
                      <td className="px-4 py-3 text-red-600 font-semibold">{log.protein}g</td>
                      <td className="px-4 py-3 text-amber-600 font-semibold">{log.carbs}g</td>
                      <td className="px-4 py-3 text-blue-600 font-semibold">{log.fats}g</td>
                      <td className="px-4 py-3 capitalize">{log.fitnessGoal.replace('_', ' ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}