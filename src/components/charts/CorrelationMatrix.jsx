import React, { useMemo, useState } from 'react';
import { processCorrelationData } from '../../utils/dataProcessing';

const CorrelationMatrix = ({ data }) => {
  const { labels, matrix } = useMemo(() => processCorrelationData(data), [data]);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  // Helper to get color based on correlation value
  const getColor = (value) => {
    // -1 (Red) -> 0 (Gray) -> 1 (Blue)
    if (value >= 0) {
      // Blue scale for positive correlation
      const intensity = Math.round(value * 255);
      return `rgba(59, 130, 246, ${Math.abs(value)})`; // Blue-500
    } else {
      // Red scale for negative correlation
      const intensity = Math.round(Math.abs(value) * 255);
      return `rgba(239, 68, 68, ${Math.abs(value)})`; // Red-500
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 relative">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        <button
          onClick={handleZoomOut}
          disabled={zoom <= 0.5}
          className="px-3 py-2 bg-slate-800 text-slate-200 rounded-lg border border-slate-600 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-semibold"
          title="Zoom Out"
        >
          −
        </button>
        <button
          onClick={handleResetZoom}
          className="px-3 py-2 bg-slate-800 text-slate-200 rounded-lg border border-slate-600 hover:bg-slate-700 transition-all text-xs font-medium"
          title="Reset Zoom"
        >
          {(zoom * 100).toFixed(0)}%
        </button>
        <button
          onClick={handleZoomIn}
          disabled={zoom >= 2}
          className="px-3 py-2 bg-slate-800 text-slate-200 rounded-lg border border-slate-600 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-semibold"
          title="Zoom In"
        >
          +
        </button>
      </div>

      <div className="w-full h-[90%] flex items-center justify-center overflow-auto">
        <div className="inline-block" style={{ transform: `scale(${zoom})`, transformOrigin: 'center', transition: 'transform 0.2s ease-out' }}>
          <div className="grid" style={{ 
            gridTemplateColumns: `auto repeat(${labels.length}, 52px)`,
            gap: '1px'
          }}>
            {/* Header Row */}
            <div className="h-20"></div> {/* Empty corner */}
            {labels.map((label, i) => (
              <div key={`col-${i}`} className="h-20 flex items-end justify-center pb-1">
                <span className="transform -rotate-45 text-[10px] text-slate-300 whitespace-nowrap origin-bottom-left translate-x-2 w-4 font-medium">
                  {label}
                </span>
              </div>
            ))}

            {/* Data Rows */}
            {matrix.map((row, i) => (
              <React.Fragment key={`row-${i}`}>
                {/* Row Label */}
                <div className="flex items-center justify-end pr-2 h-9">
                  <span className="text-[10px] text-slate-300 font-medium whitespace-nowrap">{labels[i]}</span>
                </div>
                
                {/* Cells */}
                {row.map((value, j) => {
                  // Only show lower triangle (before diagonal: j < i)
                  const isLowerTriangle = j < i;
                  
                  return (
                    <div
                      key={`cell-${i}-${j}`}
                      className={`h-8 w-full flex items-center justify-center rounded-sm transition-all relative group border border-slate-900/20 ${
                        isLowerTriangle ? 'hover:scale-125 hover:z-20 cursor-pointer' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{ backgroundColor: isLowerTriangle ? getColor(value) : 'transparent' }}
                    >
                      {isLowerTriangle && (
                        <>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[10px] p-2 rounded shadow-xl z-30 whitespace-nowrap border border-slate-700 pointer-events-none">
                            <div className="font-bold mb-1">{labels[i]} vs {labels[j]}</div>
                            <div>Correlation: <span className={value > 0 ? 'text-blue-400' : 'text-red-400'}>{value.toFixed(3)}</span></div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}

            {/* Bottom X-axis Row */}
            <div className="h-20"></div> {/* Empty corner */}
            {labels.map((label, i) => (
              <div key={`x-axis-${i}`} className="h-20 flex items-start justify-center pt-1">
                <span className="transform rotate-45 text-[10px] text-slate-300 whitespace-nowrap origin-top-left -translate-x-2 w-4 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-2 flex items-center gap-4 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-16 h-3 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
          <span>Negative (-1)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-3 bg-gradient-to-r from-transparent to-blue-500 rounded"></div>
          <span>Positive (+1)</span>
        </div>
      </div>
    </div>
  );
};

export default CorrelationMatrix;
