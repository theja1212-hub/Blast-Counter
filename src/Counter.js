import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  // Calculate level based on count
  const getLevel = () => {
    if (count < 10) return 1;
    if (count < 25) return 2;
    if (count < 50) return 3;
    if (count < 100) return 4;
    return 5;
  };

  // Get rank based on count
  const getRank = () => {
    if (count < 10) return 'ROOKIE';
    if (count < 25) return 'BRONZE';
    if (count < 50) return 'SILVER';
    if (count < 100) return 'GOLD';
    return 'LEGEND';
  };

  // Calculate progress to next level
  const getProgress = () => {
    if (count < 10) return (count / 10) * 100;
    if (count < 25) return ((count - 10) / 15) * 100;
    if (count < 50) return ((count - 25) / 25) * 100;
    if (count < 100) return ((count - 50) / 50) * 100;
    return 100;
  };

  return (
    <div className="gaming-container">
      {/* Animated Background */}
      <div className="grid-background"></div>
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="game-card">
        {/* Header with Neon Effect */}
        <div className="game-header">
          <div className="logo">
            <span className="logo-icon">🎮</span>
            <h1 className="game-title">
              <span className="neon-text">SCORE</span>
              <span className="neon-text-alt">TRACKER</span>
            </h1>
          </div>
          <div className="power-indicator">
            <span className="power-dot"></span>
            <span className="power-text">ONLINE</span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-label">LEVEL</span>
            <span className="stat-value level-badge">
              {getLevel()}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">RANK</span>
            <span className="stat-value rank-badge">
              {getRank()}
            </span>
          </div>
        </div>

        {/* Main Score Display */}
        <div className="score-display">
          <div className="score-frame">
            <div className="score-inner">
              <span className="score-label">SCORE</span>
              <span className="score-number">{count}</span>
              <div className="score-glow"></div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-label">
            <span>NEXT LEVEL</span>
            <span>{Math.round(getProgress())}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${getProgress()}%` }}
            >
              <div className="progress-shine"></div>
            </div>
          </div>
        </div>

        {/* Achievement Alert */}
        {count === 0 && (
          <div className="achievement-alert danger">
            <span className="achievement-icon">⚠️</span>
            <span className="achievement-text">SCORE AT ZERO - START PLAYING!</span>
          </div>
        )}
        {count === 10 && (
          <div className="achievement-alert success">
            <span className="achievement-icon">🏆</span>
            <span className="achievement-text">ACHIEVEMENT: REACHED LEVEL 2!</span>
          </div>
        )}
        {count === 25 && (
          <div className="achievement-alert success">
            <span className="achievement-icon">🏆</span>
            <span className="achievement-text">ACHIEVEMENT: SILVER RANK!</span>
          </div>
        )}
        {count === 50 && (
          <div className="achievement-alert success">
            <span className="achievement-icon">🏆</span>
            <span className="achievement-text">ACHIEVEMENT: GOLD RANK!</span>
          </div>
        )}
        {count === 100 && (
          <div className="achievement-alert legendary">
            <span className="achievement-icon">👑</span>
            <span className="achievement-text">LEGENDARY STATUS ACHIEVED!</span>
          </div>
        )}

        {/* Game Controls */}
        <div className="game-controls">
          <button 
            className="game-btn btn-add" 
            onClick={handleIncrement}
          >
            <span className="btn-border"></span>
            <span className="btn-content">
              <span className="btn-icon">▲</span>
              <span className="btn-label">GAIN POINT</span>
            </span>
            <span className="btn-glow"></span>
          </button>

          <button 
            className="game-btn btn-reset" 
            onClick={handleReset}
          >
            <span className="btn-border"></span>
            <span className="btn-content">
              <span className="btn-icon">↻</span>
              <span className="btn-label">RESTART</span>
            </span>
            <span className="btn-glow"></span>
          </button>

          <button 
            className="game-btn btn-subtract" 
            onClick={handleDecrement}
            disabled={count === 0}
          >
            <span className="btn-border"></span>
            <span className="btn-content">
              <span className="btn-icon">▼</span>
              <span className="btn-label">LOSE POINT</span>
            </span>
            <span className="btn-glow"></span>
          </button>
        </div>

        {/* Footer */}
        <div className="game-footer">
          <div className="footer-line"></div>
          <p className="footer-text">
            <span className="footer-highlight">Created By</span> THEJA • 
            <span className="footer-highlight"> useState</span> HOOK
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;