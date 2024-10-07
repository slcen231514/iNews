import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import Slider from 'react-slick';

// 自定义箭头组件
const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'blue',
        borderRadius: '50%',
        color: 'white',
        padding: '10px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {direction === 'prev' ? 'Prev' : 'Next'}
    </div>
  );
};

const News = ({ category, page, setPage }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [headlineArticles, setHeadlineArticles] = useState([]);
  const [swiperArticles, setSwiperArticles] = useState([]);
  const pageSize = 5;

  const shuffledArticlesRef = useRef([]);
  const prevCategoryRef = useRef(category);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/data/NewsData.json');
      const data = response.data;

      const filteredArticles =
        category === 'all'
          ? [
              ...data.entertainment,
              ...data.sports,
              ...data.finance,
              ...data.technology,
              ...data.history,
              ...data.international,
              ...data.military,
            ]
          : data[category] || [];

      if (category !== prevCategoryRef.current || shuffledArticlesRef.current.length === 0) {
        shuffledArticlesRef.current = filteredArticles.sort(() => Math.random() - 0.5);
        prevCategoryRef.current = category;
      }

      const filteredAndSearchedArticles = shuffledArticlesRef.current.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const startIndex = (page - 1) * pageSize;
      const paginatedArticles = filteredAndSearchedArticles.slice(startIndex, startIndex + pageSize);

      setArticles(paginatedArticles);
      setTotalResults(filteredAndSearchedArticles.length);
    } catch (err) {
      setError(err.response?.data?.message || '读取新闻数据时出错');
    } finally {
      setLoading(false);
    }
  }, [category, page, searchTerm]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('/data/NewsData.json');
        const data = response.data;
        const allArticles = [
          ...data.entertainment,
          ...data.sports,
          ...data.finance,
          ...data.technology,
          ...data.history,
          ...data.international,
          ...data.military,
        ];

        const shuffledArticles = allArticles.sort(() => Math.random() - 0.5);
        const selectedHeadlines = shuffledArticles.slice(0, 5);
        const selectedSwiperArticles = shuffledArticles.slice(0, 5);

        setHeadlineArticles(selectedHeadlines);
        setSwiperArticles(selectedSwiperArticles);
      } catch (err) {
        setError('读取头条新闻时出错');
      }
    };

    fetchHeadlines();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue);
      setPage(1);
      fetchNews();
    }
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const totalPages = Math.ceil(totalResults / pageSize);

  // 设置 Swiper 组件的配置
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <div>
      <div className="video-container">
        <video width="100%" autoPlay loop muted>
          <source src="https://lf3-static.bytednsdoc.com/obj/eden-cn/111eh7nupehpqps/%E6%97%97%E5%AD%90%E8%BE%93%E5%87%BA.mp4" />
          您的浏览器不支持视频标签。
        </video>
        <div className="overlay">
          <h1>热点之家</h1>
          <input
            type="text"
            placeholder="搜索新闻..."
            value={inputValue}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
      </div>

      <div className="swiper-container">
        <Slider {...settings}>
          {swiperArticles.map((article, index) => (
            <div key={index} className="swiper-slide">
              <Link to={`/${article.category}/${article.id}`}>
                <img src={article.urlToImage} alt={article.title} />
                <h3>{article.title}</h3>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className="news-container">
        {articles.length > 0 ? (
          articles.map((article, index) => {
            const detailLink = `/${article.category}/${article.id}`;

            return (
              <div key={index} className="news-item">
                <div className="news-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <Link to={detailLink}>阅读更多</Link>
                </div>
                {article.urlToImage && (
                  <img src={article.urlToImage} alt={article.title} className="news-image" />
                )}
              </div>
            );
          })
        ) : (
          <p>没有找到符合条件的新闻。</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination-container">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            上一页
          </button>
          <span>{` 第 ${page} 页，共 ${totalPages} 页 `}</span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            下一页
          </button>
        </div>
      )}

      <div className="headline-container">
        <h3>头条热点</h3>
        <ul>
          {headlineArticles.map((article, index) => (
            <li key={index}>
              <Link to={`/${article.category}/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
