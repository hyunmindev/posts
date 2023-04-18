import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
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
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <svg
            fill="black"
            height={80}
            style={{ margin: '0 75px' }}
            viewBox="0 0 75 65"
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z" />
          </svg>
        </div>
        <div
          style={{
            color: 'black',
            display: 'flex',
            fontSize: 40,
            fontStyle: 'normal',
            lineHeight: 1.8,
            marginTop: 30,
            whiteSpace: 'pre-wrap',
          }}
        >
          <b>Hyunmin Jung</b>
        </div>
      </div>
    ),
    {
      height: 600,
      width: 1200,
    }
  );
}
