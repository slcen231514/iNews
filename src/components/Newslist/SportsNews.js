import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './NewsDetail.css';

const SportsNews = () => {
  const { id } = useParams();
  const [newsArticle, setNewsArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 管理评论列表
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/data/sportsNews/sportsNews${parseInt(id) + 1}.json`);
        setNewsArticle(response.data);
      } catch (err) {
        setError('读取新闻详情时出错');
      } finally {
        setLoading(false);
      }
    };
  
    fetchArticle();
  }, [id]);

  // 处理提交评论
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(''); // 清空输入框
    }
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="news-container1">
      <h1 className="news-title1">{newsArticle.title}</h1>
      <p className="news-meta1">作者: {newsArticle.author} | 日期: {newsArticle.date}</p>
      <img src={newsArticle.urlToImage} alt="新闻图片" className="news-image1" />

      <div className="news-content1">
        {newsArticle.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <h3>参考资料:</h3>
      <ul className="news-references1">
        {newsArticle.references.map((reference, index) => (
          <li key={index}>{reference}</li>
        ))}
      </ul>

      {/* 评论区域 */}
      <div className="comments-section">
        <h3>评论</h3>
        {/* 显示已有评论 */}
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>

        {/* 评论表单 */}
        <form onSubmit={handleSubmitComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="请输入您的评论"
            required
          ></textarea>
          <button type="submit">提交评论</button>
        </form>
      </div>
    </div>
  );
};


export default SportsNews;
