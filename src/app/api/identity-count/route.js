/* Core */
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const body = await req.json();
  const { amount = 1 } = body;
  console.log('identity count:', amount);
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: amount });
}
