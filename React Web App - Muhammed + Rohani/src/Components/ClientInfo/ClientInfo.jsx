import React from 'react';
import mockClientData from './mockdata';  // 导入模拟数据
import logo from '../Assets/logo.png';    // 导入 logo
import placeholder from '../Assets/placeholder.jpg';  // 导入用户头像

import './ClientInfo.css';  // 导入样式

export default function ClientInfoPage() {
  // 根据状态返回相应的 CSS 类名
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'status resolved';
      case 'in progress':
        return 'status in-progress';
      case 'received':
        return 'status received';
      default:
        return 'status';
    }
  };

  return (
    <div className="background-gradient">
      <div className="page-container">
        {/* 页面头部 */}
        <header className="header-toolbar">
          <img src={logo} alt="Logo" className="logo" />
          <div className="header-icons">
            <span className="material-icons-outlined">notifications</span>
            <span className="material-icons-outlined">menu</span>
            <div className="vertical-divider"></div>
            <img src={placeholder} alt="User Avatar" className="user-avatar" />
            <span className="username">John Doe</span>
          </div>
        </header>

        {/* 页面标题 */}
        <h2 className="page-title">Client Information</h2>

        {/* 搜索框区域 */}
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="search-buttons">
            <span className="material-icons-outlined search-icon">search</span>
            <span className="material-icons-outlined filter-icon">filter_list</span>
          </div>
        </div>

        {/* 客户信息列表 */}
        <div className="client-list-container">
          <div className="client-list">
            {mockClientData.map((client) => (
              <div key={client.uid} className="client-card">
                <div className="client-header">
                  <h3>{client.name}</h3>
                  <span className="client-uid">UID: {client.uid}</span>
                </div>
                <div className="client-body">
                  <div className="client-info-left">
                    <p>Phone Number: {client.phoneNumber}</p>
                    <p>Emergency Number: {client.emergencyNumber}</p>
                    <p>Email: {client.email}</p>
                    <p>Address: {client.address}</p>
                  </div>
                  <div className="client-info-right">
                    <p>Last Inquiry: <a href="#">{client.lastInquiry}</a></p>
                    <p>Status: <span className={getStatusClass(client.status)}>{client.status}</span></p>
                    <p>Date: {client.date}</p>
                    <div className="client-description">
                      <textarea readOnly value={client.description}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
