import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import MyBargraph from '../../src/components/MyBargraph.jsx';

const DemoApp = () => {
  const [val, setVal] = useState(45);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
      <h1 style={{ margin: '0 0 8px 0', fontSize: '1.8rem', color: '#0f172a' }}>MyBargraph Demo</h1>
      <p style={{ color: '#64748b', marginBottom: '24px' }}>Modul 324 DevOps – Autor: Alessio Fano</p>

      <MyBargraph label="Speicherauslastung (Standard)" value={val} maxvalue={100} barwidthpx={500} color="#2563eb" />
      <MyBargraph label="CPU-Last (Orange/Warnung)" value={78} maxvalue={100} barwidthpx={500} color="#f97316" />
      <MyBargraph label="Netzwerkkapazität (Erfolg/Grün)" value={92} maxvalue={100} barwidthpx={500} color="#10b981" />

      <div style={{ marginTop: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          onClick={() => setVal(prev => Math.max(0, prev - 10))}
          style={{ padding: '8px 16px', background: '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          - 10
        </button>
        <button
          onClick={() => setVal(prev => Math.min(100, prev + 10))}
          style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          + 10
        </button>
        <span style={{ color: '#475569' }}>Aktueller interaktiver Wert: <strong>{val}%</strong></span>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<DemoApp />);
