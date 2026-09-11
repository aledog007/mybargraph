import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import MyBargraph from '../../src/components/MyBargraph.jsx';

function Demo() {
  const [value, setValue] = useState(50);

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h2>MyBargraph Demo (Alessio Fano)</h2>
      <p style={{ color: '#666' }}>Modul 324 DevOps – Test der Komponente</p>

      <MyBargraph label="Test 1 (Blau)" value={value} maxvalue={100} color="#2563eb" />
      <MyBargraph label="Test 2 (Grün)" value={80} maxvalue={100} color="#10b981" />
      <MyBargraph label="Test 3 (Orange)" value={30} maxvalue={100} color="#f97316" />

      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <button onClick={() => setValue(v => Math.max(0, v - 10))}>- 10%</button>
        <button onClick={() => setValue(v => Math.min(100, v + 10))}>+ 10%</button>
        <button onClick={() => setValue(50)}>Reset</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Demo />);
