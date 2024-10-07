// Video.js
import React, { useState } from 'react';
import './Video.css';

function Video() {
  const videos = [
    {
      id: 1,
      thumbnail: "https://p3-sign.toutiaoimg.com/tos-cn-i-0004/oUAuzJrfjNEbDEBZE9D3eBFeAEm7AAnEsk4AIA~tplv-pk90l89vgd-crop-center-v4:576:324.jpeg?_iz=31127&from=ttvideo.headline&lk3s=06827d14&x-expires=1728381194&x-signature=hvZt2nACCmerhoEgvFatfKjDVfw%3D",
      url: "https://v3-web.toutiaovod.com/69fc8741e7e66284f06e339068639f4f/66fbd721/video/tos/cn/tos-cn-ve-4/okviM8IWIz1ADJeBV3zBvAcRgGAiQtfg4cXmE2/?a=24&ch=0&cr=0&dr=0&er=0&lr=unwatermarked&net=5&cd=0%7C0%7C0%7C0&cv=1&br=884&bt=884&cs=0&ds=3&eid=21760&ft=hGkwBy6LRR0syrC3-Dv2Nc0iPMgzbLh4x0sU_44yx~wSNv7TGW&mime_type=video_mp4&qs=0&rc=aDg6ZmRkaWg0PDxoODw0NEBpM29qd285cjl4dTMzNDczM0BhXjZeNDIvXzUxYjNfYzU1YSNiZGVtMmRrLW9gLS1kLTBzcw%3D%3D&btag=c0000e00030000&dy_q=1727776516&feature_id=1229c61d4e863560fb994c11be849377&l=20241001175515A158D32503374A195C83",
    },
    {
      id: 2,
      thumbnail: "https://p3-sign.toutiaoimg.com/tos-cn-i-dy/8f655de0232b4e7596c88def96ca3a06~tplv-pk90l89vgd-crop-center-v4:576:324.jpeg?_iz=31127&from=ttvideo.headline&lk3s=06827d14&x-expires=1728382196&x-signature=iM8oEzU6tMkB5vP7PQunyx3Zxd0%3D",
      url: "//v6-web.toutiaovod.com/ca094f7fee743a1b1b79c521ed22b790/66fbdfe2/video/tos/cn/tos-cn-ve-15/oAvajiuEAQA4iR1i1RPcLZIsC1SvI43TsBTiZ/?a=24&ch=0&cr=0&dr=0&er=0&lr=unwatermarked&net=5&cd=0%7C0%7C0%7C0&cv=1&br=1864&bt=1864&cs=0&ds=3&ft=hGkwBy6LRR0syrC3-Dv2Nc0iPMgzbL9Ux0sU_44yx~wSNv7TGW&mime_type=video_mp4&qs=0&rc=PDxlPDs5OzdmZzRoNGRpOEBpankzcms5cnVndTczNGU0M0BgMGM2XzJfNjIxYy0tYjY1YSNwNTFzMmRrMnBgLS1kMGFzcw%3D%3D&btag=c0000e00038000&dy_q=1727778602&feature_id=2e1813f3872a2105acee44623dff2864&l=202410011830027B2B7C107557E58583E1",
    },
    {
      id: 3,
      thumbnail: "https://p3-sign.toutiaoimg.com/tos-cn-i-0004/ogH9CIzQDl5m3CejgEfbANAA3FBEAmAAz2ERau~tplv-pk90l89vgd-crop-center-v4:576:324.jpeg?_iz=31127&from=ttvideo.headline&lk3s=06827d14&x-expires=1728379382&x-signature=FQ%2Fji4VTCQ9%2BzI%2F1Sscuybj6c6I%3D",
      url: "//v3-web.toutiaovod.com/980d18b8a4c1a567fdfe336e5d91df60/66fbe6de/video/tos/cn/tos-cn-ve-4/oAAVSm3BWymEAZFR0AIgYxANHegfUB9umn9QnD/?a=24&ch=0&cr=0&dr=0&er=0&lr=unwatermarked&net=5&cd=0%7C0%7C0%7C0&cv=1&br=439&bt=439&cs=0&ds=3&eid=21760&ft=WbaUMqBrffPdqK~-I1jNvAq-antLjrKNmpD.Rka0KYu9UjVhWL6&mime_type=video_mp4&qs=0&rc=NGU6ZGc1ZTM8OWc2ODs4N0BpMzNpbHg5cjNxdTMzNDczM0AtYjZhNjA1XzExLi1iNWNhYSMyZmhpMmRjZ29gLS1kLWFzcw%3D%3D&btag=c0000e00028000&dy_q=1727780897&feature_id=1229c61d4e863560fb994c11be849377&l=20241001190817886B34BA3646E3217E83",
    },
    {
      id: 4,
      thumbnail: "https://p3-sign.toutiaoimg.com/tos-cn-i-0004/oMEjKm4gEgJxDi6BAI7ExAviAWZvBxIFSSPAA~tplv-pk90l89vgd-crop-center-v4:576:324.jpeg?_iz=31127&from=ttvideo.headline&lk3s=06827d14&x-expires=1728379382&x-signature=oDQPDZYWz96F6E3tpaILL6LQ%2Fa4%3D",
      url: "//v6-web.toutiaovod.com/92feea1f75cbd0f78c6268ddc80c2adb/66fbe81d/video/tos/cn/tos-cn-ve-4/o4v9JrhQZE1ixIuAAyAdi3PEiQBiPv64dAwjI/?a=24&ch=0&cr=0&dr=0&er=0&lr=unwatermarked&net=5&cd=0%7C0%7C0%7C0&cv=1&br=914&bt=914&cs=0&ds=3&eid=21760&ft=WbaUMqBrffPdqK~-I1jNvAq-antLjrK0-pD.Rka0KYu9UjVhWL6&mime_type=video_mp4&qs=0&rc=O2k2ZTU1NDU3Nmg7Ozc8ZEBpM3d5O3c5cmxmdTMzNDczM0BeX18wLTAwNTYxYi5jMTY0YSNxXmlrMmQ0LnBgLS1kLTBzcw%3D%3D&btag=c0000e00030000&dy_q=1727781000&feature_id=1229c61d4e863560fb994c11be849377&l=20241001191000CC2F552F0E03BE130FE0",
    },
    {
      id: 5,
      thumbnail: "https://p3-sign.toutiaoimg.com/tos-cn-i-0004/oUDA4MZ8IEEpUPXroIZiADBjZziQQAsanADAN~tplv-tt-cs0-jzss2:640:360.jpg?_iz=31127&from=ttvideo.headline&lk3s=06827d14&x-expires=1728645621&x-signature=0Z93WAnbBnIa0OYKqoFMVhF5O7E%3D",
      url: "https://v3-web.toutiaovod.com/ec1f655d8b12564fd5431caa92de2665/66ffdf6a/video/tos/cn/tos-cn-ve-4/ow3wDf4XAEkDIQHhkgmgFBzGQfRvAXE8mAo5oF/?a=24&ch=0&cr=0&dr=0&er=0&lr=unwatermarked&net=5&cd=0%7C0%7C0%7C0&cv=1&br=570&bt=570&cs=0&ds=3&eid=21760&ft=hGkwBy6LRR0syrC3-Dj2Nc0iPMgzbLZmxysU_4i0itwSNv7TGW&mime_type=video_mp4&qs=0&rc=Zjo1ZDVnZWY1ODQ3NTVoNkBpM2pqOXY5cm9pdTMzNDczM0AuLi0yYzY1XzExLmNjYDNjYSNzMWI2MmRzby5gLS1kLTBzcw%3D%3D&btag=c0000e00030000&dy_q=1728040894&feature_id=1229c61d4e863560fb994c11be849377&l=202410041921341B8721412B8EBB9DBAA8",
    },
    {
      id: 6,
      thumbnail: "https://p3-sign.toutiaoimg.com/tos-cn-i-0004/ooAtot8DBIDJVN1BA2iAGyIPqBfczAgEioQFAZ~tplv-tt-cs0-jzss2:640:360.jpg?_iz=31127&from=ttvideo.headline&lk3s=06827d14&x-expires=1728645831&x-signature=WEq6%2Bj8PJ83KEr5jdL4LoxKpL0k%3D",
      url: "https://v26-web.toutiaovod.com/f1bd1a905eced524d41cb43412fe20a4/66ffdf3d/video/tos/cn/tos-cn-ve-4/osIjNmKArBaWtgRXgVEAHFEACoDnIzQGffWacC/?a=24&ch=0&cr=0&dr=0&er=0&lr=unwatermarked&net=5&cd=0%7C0%7C0%7C0&cv=1&br=866&bt=866&cs=0&ds=3&eid=21760&ft=hGkwBy6LRR0syrC3-Dj2Nc0iPMgzbLeVcysU_4i0itwSNv7TGW&mime_type=video_mp4&qs=0&rc=NTg5ZjtlZ2U5NWdmOTg7ZkBpMztub2o5cjl0dTMzNDczM0AxNS1hX2AwX2IxNTVhXy4xYSNfaG5jMmRrLjNgLS1kLS9zcw%3D%3D&btag=c0000e00028000&dy_q=1728041048&feature_id=1229c61d4e863560fb994c11be849377&l=20241004192408B23DC4C9CD370AA019DB",
    },
  ];

  const [playingVideo, setPlayingVideo] = useState(null); // 当前播放的视频

  return (
    <div>
      <div className="video-container">
        <video width="100%" autoPlay loop muted>
          <source src="https://lf3-static.bytednsdoc.com/obj/eden-cn/111eh7nupehpqps/%E6%97%97%E5%AD%90%E8%BE%93%E5%87%BA.mp4" />
          您的浏览器不支持视频标签。
        </video>
        <div className="overlay">
          <h1>视频精选</h1>
        </div>
      </div>
      <div className="video-container1">
        <div className="thumbnails">
          {videos.map(video => (
            <div key={video.id} className="thumbnail" style={{ position: 'relative', cursor: 'pointer' }}>
              <img 
                src={video.thumbnail} 
                alt={`视频 ${video.id}`} 
                style={{ width: '100%', maxWidth: '600px' }} 
                onClick={() => setPlayingVideo(video.url)}
              />
              {playingVideo === video.url && (
                <div className="video-overlay1">
                  <video width="100%" height="auto" controls autoPlay style={{ maxWidth: '600px' }}>
                    <source src={video.url} type="video/mp4" />
                    你的浏览器不支持 HTML5 视频标签。
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;
