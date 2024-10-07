import React, { useState } from 'react';
import './App.css';
import News from './components/News';
import EntertainmentNews from './components/Newslist/EntertainmentNews';
import SportsNews from './components/Newslist/SportsNews';
import FinanceNews from './components/Newslist/FinanceNews';
import TechnologyNews from './components/Newslist/TechnologyNews';
import InternationalNews from './components/Newslist/InternationalNews';
import HistoryNews from './components/Newslist/HistoryNews';
import MilitaryNews from './components/Newslist/MilitaryNews';
import Video from './components/Video'; // 引入视频组件
import LoginDialog from './components/LoginDialog'; // 引入登录对话框组件
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false); // 状态控制“更多”菜单显示
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false); // 控制登录对话框显示
  const navigate = useNavigate();

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
    navigate(newCategory === 'all' ? '/' : `/${newCategory}`);
  };

  const toggleLoginDialog = () => {
    setIsLoginDialogOpen(!isLoginDialogOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="category-buttons">
          <button
            onClick={() => handleCategoryChange('all')}
            className={category === 'all' ? 'active' : ''}
          >
            首页
          </button>
          <button
            onClick={() => handleCategoryChange('video')}
            className={category === 'video' ? 'active' : ''}
          >
            视频精选
          </button>
          <button
            onClick={() => handleCategoryChange('entertainment')}
            className={category === 'entertainment' ? 'active' : ''}
          >
            娱乐新闻
          </button>
          <button
            onClick={() => handleCategoryChange('sports')}
            className={category === 'sports' ? 'active' : ''}
          >
            体育新闻
          </button>
          <button
            onClick={() => handleCategoryChange('finance')}
            className={category === 'finance' ? 'active' : ''}
          >
            财经新闻
          </button>
          <div
            className="more-button"
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
          >
            <button>更多分类&gt;</button>
            {showMore && (
              <div className="dropdown">
                <button onClick={() => handleCategoryChange('technology')}
                className={category === 'technology' ? 'active' : ''}
                >科技新闻</button>
                <button onClick={() => handleCategoryChange('history')}
                className={category === 'history' ? 'active' : ''}  
                >历史新闻</button>
                <button onClick={() => handleCategoryChange('international')}
                className={category === 'international' ? 'active' : ''}
                >国际新闻</button>
                <button onClick={() => handleCategoryChange('military')}
                className={category === 'military' ? 'active' : ''}
                >军事新闻</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="news-container">
        <Routes>
          <Route path="/" element={<News category={category} page={page} setPage={setPage} />} />
          <Route path="/video" element={<Video />} /> {/* 添加视频路由 */}
          <Route path="/entertainment" element={<News category="entertainment" page={page} setPage={setPage} />} />
          <Route path="/entertainment/:id" element={<EntertainmentNews />} />
          <Route path="/sports" element={<News category="sports" page={page} setPage={setPage} />} />
          <Route path="/sports/:id" element={<SportsNews />} />
          <Route path="/finance" element={<News category="finance" page={page} setPage={setPage} />} />
          <Route path="/finance/:id" element={<FinanceNews />} />
          <Route path="/technology" element={<News category="technology" page={page} setPage={setPage} />} />
          <Route path="/technology/:id" element={<TechnologyNews />} />
          <Route path="/history" element={<News category="history" page={page} setPage={setPage} />} />
          <Route path="/history/:id" element={<HistoryNews />} />
          <Route path="/international" element={<News category="international" page={page} setPage={setPage} />} />
          <Route path="/international/:id" element={<InternationalNews />} />
          <Route path="/military" element={<News category="military" page={page} setPage={setPage} />} />
          <Route path="/military/:id" element={<MilitaryNews />} />
        </Routes>
      </div>

      {/* 登录按钮，固定在右下角 */}
      <button className="login-button" onClick={toggleLoginDialog}>登录</button>

      {/* 登录对话框 */}
      <LoginDialog isOpen={isLoginDialogOpen} onClose={toggleLoginDialog} />
    </div>
  );
}

export default App;
