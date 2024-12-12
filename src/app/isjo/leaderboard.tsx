import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function Leaderboard() {
  const stats = await sql`
    SELECT player_name, score, created_at
    FROM sharik_jargysh_stats
    ORDER BY score DESC
    LIMIT 5;
  `;

  return (
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
  );
}
