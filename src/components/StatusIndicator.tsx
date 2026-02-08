import { useEffect, useState } from 'react';

interface Status {
  status: string;
  message: string;
  power_level: number;
}

export default function StatusIndicator() {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/status');
        const data = await response.json() as Status;
        setStatus(data);
      } catch (error) {
        console.error('Failed to fetch status:', error);
        setStatus({
          status: 'offline',
          message: 'The Force is... disturbed',
          power_level: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    
    // Update status every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-sith-blue">
        <div className="w-3 h-3 bg-sith-blue rounded-full animate-pulse"></div>
        <span className="text-sm">Connecting to the Force...</span>
      </div>
    );
  }

  const isOnline = status?.status === 'online';
  const powerColor = status?.power_level && status.power_level > 75 ? 'text-sith-red' : 
                   status?.power_level && status.power_level > 50 ? 'text-sith-orange' : 'text-sith-blue';

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-3">
        <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500 animate-pulse-glow' : 'bg-red-500'}`}></div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">
            Status: <span className={isOnline ? 'text-green-400' : 'text-red-400'}>{status?.status || 'unknown'}</span>
          </span>
          {status?.power_level && (
            <span className={`text-xs ${powerColor}`}>
              Force Power: {status.power_level}%
            </span>
          )}
        </div>
      </div>
      {status?.message && (
        <div className="text-xs text-gray-400 italic max-w-xs">
          "{status.message}"
        </div>
      )}
    </div>
  );
}