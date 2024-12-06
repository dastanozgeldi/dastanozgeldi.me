import { neon } from "@neondatabase/serverless";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page() {
  const sql = neon(process.env.DATABASE_URL!);
  const stats = await sql`
    SELECT player_name, score, created_at
    FROM sharik_jargysh_stats
    ORDER BY score DESC
    LIMIT 10;
  `;

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold">ISJO leaderboard</h1>
        <p className="text-gray-600">
          ISJO stands for International Sharik Jargysh Olympiad held everyday in
          Nazarbayev Intellectual Schools.
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Place</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="w-[50px]">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats.map(({ player_name, score }, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{player_name}</TableCell>
              <TableCell className="text-right">{score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
