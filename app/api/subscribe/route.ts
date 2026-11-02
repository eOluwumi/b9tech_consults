import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { error: "Newsletter registration is not available yet. Please contact B9TECH directly." },
    { status: 503 }
  )
}
