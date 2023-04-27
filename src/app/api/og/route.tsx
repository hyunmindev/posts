import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'experimental-edge';

const fontURL = new URL('../../../assets/fonts/fira.ttf', import.meta.url);

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title');

  const res = await fetch(fontURL);
  const fontData = await res.arrayBuffer();

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          backgroundColor: '#262729',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #555 2%, transparent 0%), radial-gradient(circle at 75px 75px, #555 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {!!title && (
          <p
            style={{
              color: '#e6e7ec',
              fontSize: 36,
              fontWeight: 500,
              position: 'absolute',
              right: 36,
              textShadow: '0 3px #6598d2, 3px 0 #e06d3d, 0 -3px #c5ab48',
              top: 24,
              wordBreak: 'break-word',
            }}
          >
            Hyunmin
          </p>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              color: '#e6e7ec',
              fontSize: title ? 92 : 136,
              fontWeight: 500,
              marginBottom: title ? 0 : -60,
              padding: 48,
              textShadow: '0 6px #6598d2, 6px 0 #e06d3d, 0 -6px #c5ab48',
              wordBreak: 'break-word',
            }}
          >
            {title || 'Hyunmin Jung'}
          </h1>
          {!title && (
            <p
              style={{
                color: '#87959d',
                fontSize: 28,
                fontWeight: 400,
                padding: '0 60px',
              }}
            >
              front-end developer
            </p>
          )}
        </div>
      </div>
    ),
    {
      fonts: [
        {
          data: fontData,
          name: 'fira',
          style: 'normal',
        },
      ],
      height: 630,
      width: 1200,
    }
  );
}
