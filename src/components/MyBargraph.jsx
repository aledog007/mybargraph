import React from 'react';
import PropTypes from 'prop-types';
import './MyBargraph.css';

/**
 * MyBargraph / HorizontalBarGraph
 * Eine wiederverwendbare Balkendiagramm-Komponente für React
 * @author Alessio Fano
 */
const MyBargraph = ({
  value = 0,
  maxvalue = 100,
  barwidthpx = 350,
  label = '',
  color = '#2563eb',
  showValue = true
}) => {
  const safeMax = maxvalue > 0 ? maxvalue : 100;
  const clampedValue = Math.min(Math.max(0, value), safeMax);
  const percentage = Math.round((clampedValue / safeMax) * 100);

  return (
    <div className="bargraph-container" style={{ width: `${barwidthpx}px` }}>
      {label && <div className="bargraph-label">{label}</div>}
      <div className="bargraph-track">
        <div
          className="bargraph-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
      {showValue && (
        <div className="bargraph-values">
          <span className="bargraph-val">{clampedValue} / {safeMax}</span>
          <span className="bargraph-percent">{percentage}%</span>
        </div>
      )}
    </div>
  );
};

MyBargraph.propTypes = {
  value: PropTypes.number.isRequired,
  maxvalue: PropTypes.number,
  barwidthpx: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  showValue: PropTypes.bool
};

export default MyBargraph;
