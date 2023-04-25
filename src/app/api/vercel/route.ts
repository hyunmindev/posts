import { NextResponse } from 'next/server';

export async function GET() {
  const result = await fetch(' https://api.vercel.com/v6/deployments', {
    body: JSON.stringify({
      cleanUrls: true,
      files: [
        {
          file: 'api/vercel/route.ts',
        },
      ],
      name: 'blog-hyunmin-dev',
    }),
    headers: {
      Authorization: 'Bearer Tmqec4prkz76FeudyBkT3NPA',
    },
    method: 'post',
  });
  const data = await result.json();
  return NextResponse.json(data);
}
