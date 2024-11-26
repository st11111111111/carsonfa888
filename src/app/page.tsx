'use client'

import { useEffect, useState } from 'react'
import './styles.css'

export default function Home() {
  // 使用 useState 来管理状态，但初始值设为 null
  const [stats, setStats] = useState<{
    online: number;
    register: number;
    payout: number;
  } | null>(null)
  
  const [time, setTime] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null)

  // 初始化状态
  useEffect(() => {
    setStats({
      online: 8549,
      register: 152387,
      payout: 1309843
    })
    
    setTime({
      hours: 2,
      minutes: 45,
      seconds: 27
    })
  }, [])

  // 处理倒计时
  useEffect(() => {
    if (!time) return

    const timer = setInterval(() => {
      setTime(prev => {
        if (!prev) return prev
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 2
            }
          }
        }
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [time])

  // 处理实时数据更新
  useEffect(() => {
    if (!stats) return

    const statsTimer = setInterval(() => {
      setStats(prev => {
        if (!prev) return prev
        return {
          online: prev.online + Math.floor(Math.random() * 3) + 1,
          register: prev.register + Math.floor(Math.random() * 2) + 1,
          payout: prev.payout + Math.floor(Math.random() * 10000)
        }
      })
    }, 3000)

    return () => clearInterval(statsTimer)
  }, [stats])

  // 如果状态还没有初始化，显示加载状态
  if (!stats || !time) {
    return <div className="loading">載入中...</div>
  }

  return (
    <main className="container">
      {/* 品牌标题 */}
      <div className="brand-header">
        <h1 className="brand-name">FA888</h1>
        <p className="brand-slogan">亞洲最具規模的線上娛樂平台</p>
      </div>

      {/* 优惠卡片 */}
      <div className="offer-card">
        <div className="timer-label">限時優惠倒計時</div>
        <div className="timer-grid">
          <div className="time-box">
            <div className="time-number">
              {String(time.hours).padStart(2, '0')}
            </div>
            <div className="time-unit">時</div>
          </div>
          <div className="time-box">
            <div className="time-number">
              {String(time.minutes).padStart(2, '0')}
            </div>
            <div className="time-unit">分</div>
          </div>
          <div className="time-box">
            <div className="time-number">
              {String(time.seconds).padStart(2, '0')}
            </div>
            <div className="time-unit">秒</div>
          </div>
        </div>
        <div className="bonus-text">首存贈送888</div>
        <a href="https://f568h.com/register?inviteCode=BUm7goCj" className="bonus-subtitle link-style">
          立即註冊享受更多優惠
        </a>
      </div>

      {/* 实时数据显示 */}
      <div className="stats-card">
        <div className="stat-row">
          <span>當前在線</span>
          <span className="stat-value">
            {stats.online.toLocaleString()}
          </span>
        </div>
        <div className="stat-row">
          <span>註冊人數</span>
          <span className="stat-value">
            {stats.register.toLocaleString()}
          </span>
        </div>
        <div className="stat-row">
          <span>今日派彩</span>
          <span className="stat-value">
            HK$ {stats.payout.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 注册步骤 */}
      <div className="steps-grid">
        <div className="step-item">
          <div className="step-number">1</div>
          <div>30秒快速註冊</div>
        </div>
        <div className="step-item">
          <div className="step-number">2</div>
          <div>一鍵快速存款</div>
        </div>
        <div className="step-item">
          <div className="step-number">3</div>
          <div>立即開始投注</div>
        </div>
      </div>

      {/* VIP特权 */}
      <div className="vip-section">
        <div className="vip-title">VIP專屬特權</div>
        <div className="vip-grid">
          <div className="vip-item">24小時專屬客服</div>
          <div className="vip-item">無限次免費取款</div>
          <div className="vip-item">每日更高回水</div>
          <div className="vip-item">生日禮金派送</div>
        </div>
      </div>

      {/* 按钮组 */}
      <div className="button-group">
        <a href="https://f568h.com/register?inviteCode=BUm7goCj" className="register-button">
          立即註冊
        </a>
        <a href="https://f568h.com/register?inviteCode=BUm7goCj" className="register-button login-button">
          立即登入
        </a>
      </div>
    </main>
  )
}
