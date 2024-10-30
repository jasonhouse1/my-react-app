import mePhoto from './images/my_image.png'

function App() {
  return (
    <div id="app">
      <div id="left-column">
        <div id="intro">
          <img src={ mePhoto } alt="head" />
          <h1>邱振營 CHIU,CHEN-YIN</h1>
          <h2>淡江大學</h2>
          <h3>資訊管理學系Information Management</h3>
        </div>
        <div id="expe">
          <h2>學歷</h2>
          <ul>
            <li>新北市碧華國小</li>
            <li>新北市私立格致中學</li>
            <li>新北市立南港高工 綜合高中(自然組)</li>
            <li>淡江大學 資訊管理學系(在讀)</li>
          </ul>
        </div>
      </div>

      <div id="right-column">
        <div id="interest">
          <h1>我的興趣</h1>
          <ol>
            <li>打球</li>
            <li>唱歌</li>
            <li>嘗試新事物</li>
          </ol>
          <a href="https://youtu.be/iW6Emb7lyqA" target="_blank">推薦一首 R&B 專場</a>
          <br />
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5b/92/08/5b920835-0ebf-d680-346c-c9e4c32e09b3/4710149686336.jpg/1200x1200bf-60.jpg" alt="Earthbound 專輯封面" width="300" />
        </div>
        <div id="likes">
          <h3>我喜歡吃</h3>
          <ul>
            <li>海鮮</li>
            <li>雞肉</li>
            <li>蔬果</li>
          </ul>
        </div>
        <form>
          <label form="question">Are you happy today?</label>
          <div id="input-container">
            <input type="text" placeholder="必須開心" />
            <input type="submit" value="提交" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
