import PropTypes from 'prop-types';
import './MyBargraph.css';

// MyBargraph Komponente - Modul 324 (Alessio Fano)
function MyBargraph({
  value = 0,
  maxvalue = 100,
  barwidthpx = 350,
  label = '',
  color = '#2563eb',
  showValue = true
}) {
  const max = maxvalue > 0 ? maxvalue : 100;
  const current = Math.min(Math.max(0, value), max);
  const percent = Math.round((current / max) * 100);

  return (
    <div className="bar-wrapper" style={{ width: `${barwidthpx}px` }}>
      {label && <span className="bar-title">{label}</span>}
      
      <div className="bar-background">
        <div
          className="bar-progress"
          style={{
            width: `${percent}%`,
            backgroundColor: color
          }}
        />
      </div>

      {showValue && (
        <div className="bar-details">
          <span className="bar-count">{current} / {max}</span>
          <span className="bar-percent">{percent}%</span>
        </div>
      )}
    </div>
  );
}

MyBargraph.propTypes = {
  value: PropTypes.number.isRequired,
  maxvalue: PropTypes.number,
  barwidthpx: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  showValue: PropTypes.bool
};

export default MyBargraph;
