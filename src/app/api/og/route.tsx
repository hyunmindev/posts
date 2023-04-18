import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const fontURL = new URL('../../../assets/fonts/fira.ttf', import.meta.url);

export async function GET() {
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              color: '#e6e7ec',
              fontSize: 136,
              fontWeight: 500,
              marginBottom: -24,
              textShadow: '0 6px #6598d2, 6px 0 #e06d3d, 0 -6px #c5ab48',
            }}
          >
            Hyunmin Jung
          </h1>
          <p
            style={{
              color: '#87959d',
              fontSize: 28,
              fontWeight: 400,
            }}
          >
            front-end developer
          </p>
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
      height: 600,
      width: 1200,
    }
  );
}
