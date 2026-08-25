'use client';

import { useState, useEffect } from 'react';
import { Server, Database, RefreshCw, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ApiStatus() {
  const [status, setStatus] = useState({ loading: true, online: false, data: null, error: null });

  const fetchStatus = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));
    try {
      // Try direct express URL first, fallback to next proxy
      let res;
      try {
        res = await fetch('http://localhost:5000/api/health');
      } catch (err) {
        res = await fetch('/api/express/health');
      }

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setStatus({ loading: false, online: true, data, error: null });
    } catch (err) {
      setStatus({
        loading: false,
        online: false,
        data: null,
        error: 'Express Server Offline (Run: npm run dev:server)',
      });
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <section id="api-status" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="glass-card" style={{ borderLeft: '4px solid #00f0ff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(0,240,255,0.1)', padding: '0.8rem', borderRadius: '12px', color: '#00f0ff' }}>
                <Server size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Express & Node.js API Health Status</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Real-time verification of backend service availability</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {status.loading ? (
                <span className="status-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                  Checking...
                </span>
              ) : status.online ? (
                <span className="status-badge online">
                  <span className="dot-indicator"></span> Express API Online
                </span>
              ) : (
                <span className="status-badge offline">
                  <AlertTriangle size={14} /> Server Standby
                </span>
              )}

              <button
                onClick={fetchStatus}
                className="btn-secondary"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
                disabled={status.loading}
              >
                <RefreshCw size={14} className={status.loading ? 'spin' : ''} /> Ping API
              </button>
            </div>
          </div>

          {status.data && (
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Status</span>
                <p style={{ fontWeight: 600, color: 'var(--accent-emerald)' }}>{status.data.status}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Message</span>
                <p style={{ fontWeight: 500, fontSize: '0.9rem' }}>{status.data.message}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Environment</span>
                <p style={{ fontWeight: 500, textTransform: 'capitalize' }}>{status.data.environment}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Last Checked</span>
                <p style={{ fontWeight: 500, fontSize: '0.85rem' }}>{new Date(status.data.timestamp).toLocaleTimeString()}</p>
              </div>
            </div>
          )}

          {status.error && (
            <div style={{ marginTop: '1rem', padding: '0.8rem 1rem', background: 'rgba(255, 75, 75, 0.1)', border: '1px solid rgba(255, 75, 75, 0.3)', borderRadius: '8px', color: '#ff8888', fontSize: '0.85rem' }}>
              {status.error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
