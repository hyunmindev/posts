import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  const res = await request.json();
  return NextResponse.json(res);
}
