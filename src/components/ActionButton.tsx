"use client";

import React from "react";

interface ActionButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  primary = false, 
  onClick,
  disabled = false
}) => {
  return (
    <div className="button-container">
      <button
        className={`action-button ${primary ? 'primary' : 'secondary'} ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="button-content">{children}</span>
      </button>
      
      <style jsx>{`
        .button-container {
          position: relative;
          width: 150px;
          height: 50px;
          display: inline-block;
        }
        
        .action-button {
          position: relative;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 100px;
          background: rgba(18, 0, 32, 0.9);
          backdrop-filter: blur(15px);
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          cursor: pointer;
          z-index: 2;
          overflow: hidden;
          padding: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .action-button::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            90deg,
            rgba(18, 0, 32, 1),
            rgba(32, 7, 46, 1),
            rgba(46, 14, 60, 1),
            rgba(74, 28, 88, 1),
            rgba(103, 42, 116, 1),
            rgba(131, 56, 144, 1),
            rgba(187, 83, 199, 1),
            rgba(243, 111, 255, 1),
            rgba(192, 118, 255, 1),
            rgba(141, 124, 255, 1),
            rgba(89, 131, 255, 1),
            rgba(64, 135, 255, 1),
            rgba(38, 138, 255, 1),
            rgba(60, 186, 245, 1),
            rgba(82, 234, 234, 1),
            rgba(66, 176, 184, 1),
            rgba(50, 117, 133, 1),
            rgba(42, 88, 108, 1),
            rgba(34, 59, 83, 1),
            rgba(26, 29, 57, 1),
            rgba(22, 15, 45, 1),
            rgba(18, 0, 32, 1)
          );
          background-size: 200% 100%;
          border-radius: 100px;
          animation: flow 2s linear infinite;
          z-index: -1;
          transition: opacity 0.3s ease;
        }
        
        .action-button::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background: rgba(18, 0, 32, 0.9);
          border-radius: 100px;
          z-index: -1;
          transition: background 0.3s ease;
        }
        
        /* Hover effects */
        .action-button:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .action-button:hover:not(.disabled)::before {
          animation-duration: 1s;
          opacity: 0.9;
        }
        
        .action-button:hover:not(.disabled)::after {
          background: rgba(30, 5, 50, 0.85);
        }
        
        /* Active state */
        .action-button:active:not(.disabled) {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .action-button.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .action-button.disabled::before {
          animation: none;
          opacity: 0.5;
        }
        
        .button-content {
          position: relative;
          z-index: 1;
          transition: transform 0.2s ease;
        }
        
        .action-button:hover:not(.disabled) .button-content {
          transform: scale(1.05);
        }
        
        @keyframes flow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default ActionButton;