import { sql } from "@/lib/db";

export async function GET() {
  const response = await sql`
      SELECT player_name, score, created_at
      FROM sharik_jargysh_stats
      ORDER BY score DESC
      LIMIT 10;
    `;

  return Response.json({ data: response });
}

export async function POST(request: Request) {
  const { player_name, score } = await request.json();

  try {
    await sql`CREATE TABLE IF NOT EXISTS sharik_jargysh_stats (
      id SERIAL PRIMARY KEY,
      player_name VARCHAR(255) NOT NULL,
      score INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
    await sql(
      "INSERT INTO sharik_jargysh_stats (player_name, score) VALUES ($1, $2)",
      [player_name, score]
    );
  } catch (error) {
    return new Response(
      `Error occurred while inserting into database: ${error}`,
      {
        status: 400,
      }
    );
  }

  return new Response("Successfully inserted into database", { status: 200 });
}
