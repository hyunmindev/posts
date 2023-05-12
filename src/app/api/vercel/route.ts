import { execSync } from 'child_process';
import { NextResponse } from 'next/server';

export async function GET() {
  // const result = await fetch('https://api.vercel.com/v6/deployments', {
  //   body: JSON.stringify({
  //     cleanUrls: true,
  //     name: 'react-query-props-drilling',
  //   }),
  //   headers: {
  //     Authorization: 'Bearer Tmqec4prkz76FeudyBkT3NPA',
  //   },
  //   method: 'post',
  // });
  // const data = await result.json();
  const data = execSync('npx vercel --prod --token=Tmqec4prkz76FeudyBkT3NPA');
  return NextResponse.json(data);
}
