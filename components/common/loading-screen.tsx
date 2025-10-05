import React from 'react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-800 rounded-full"
          style={{
            animation: 'fill 1.5s ease-in-out forwards',
          }}
        ></div>
      </div>
      <style>
        {`
          @keyframes fill {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
