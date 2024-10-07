import React from 'react';
import './LoginDialog.css';

const LoginDialog = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // 如果对话框没有打开，则不渲染
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2>登录</h2>
        <form>
          <label>
            用户名:
            <input type="text" name="username" required />
          </label>
          <label>
            密码:
            <input type="password" name="password" required />
          </label>
          <div className="dialog-actions">
            <button type="submit">登录</button>
            <button type="button" onClick={onClose}>取消</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDialog;
