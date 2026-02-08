interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // API routes
    if (url.pathname.startsWith('/api/')) {
      return handleAPI(request, env, ctx);
    }

    // Fall back to static assets (SPA)
    return env.ASSETS.fetch(request);
  },
};

async function handleAPI(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url = new URL(request.url);

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // Status endpoint
  if (url.pathname === '/api/status') {
    return new Response(
      JSON.stringify({
        status: 'online',
        message: 'The Dark Side of the Force is a pathway to many abilities some consider to be... unnatural.',
        timestamp: new Date().toISOString(),
        power_level: Math.floor(Math.random() * 100) + 1
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  // Random Star Wars quote endpoint
  if (url.pathname === '/api/quote') {
    const quotes = [
      "I find your lack of faith disturbing.",
      "The Force is strong with this one.",
      "Do or do not, there is no try.",
      "Fear leads to anger, anger leads to hate, hate leads to suffering.",
      "Your powers are weak, old man.",
      "I am altering the deal. Pray I don't alter it any further.",
      "You underestimate the power of the Dark Side.",
      "The circle is now complete.",
      "I have brought peace, freedom, justice, and security to my new empire.",
      "From my point of view, the Jedi are evil!",
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    return new Response(
      JSON.stringify({ quote: randomQuote }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  return new Response('Not Found', { 
    status: 404,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}