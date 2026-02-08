import { useEffect, useState } from 'react';

interface Quote {
  quote: string;
}

export default function RandomQuote() {
  const [quote, setQuote] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/quote');
      const data: Quote = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      setQuote('The Force will be with you... always.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-sith-gray border border-sith-darkgray rounded-lg p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sith-orange via-sith-blue to-sith-orange"></div>
      
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-sith-orange">Wisdom of the Force</h3>
        <button
          onClick={fetchQuote}
          disabled={loading}
          className="px-3 py-1 text-xs bg-sith-darkgray hover:bg-sith-orange text-white rounded transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? '...' : 'New Quote'}
        </button>
      </div>

      {loading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-sith-darkgray rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-sith-darkgray rounded w-1/2"></div>
        </div>
      ) : (
        <blockquote className="text-gray-300 italic text-lg leading-relaxed">
          "{quote}"
        </blockquote>
      )}
      
      <div className="mt-4 text-right">
        <cite className="text-sm text-sith-blue not-italic">— The Force</cite>
      </div>
    </div>
  );
}