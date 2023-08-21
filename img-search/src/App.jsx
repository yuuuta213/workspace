
import { useState } from "react"
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Results from "./components/Results"
import './reset.css'
import './App.css'


function App() {
  const [word, setWord] = useState('');
  const [photo, setPhoto] = useState([]);//データの種類が配列のため配列で

  const getPhotoData = (e) => {
    e.preventDefault();
    axios
      .get('https://api.unsplash.com/search/photos?query=cat&client_id=a1nhdDBJtoIziIhC7NIa6sbxAn-HlK2Hm0ckGTSkBv4')
      .then(res => {
        setPhoto(res.data.results)
      })
      .catch(error => {
        // console.error('Error:', error);
        alert('エラーが発生しました');
      });

  }
  //APIリクエストの非同期処理、エラーハンドリング
  // const getPhotoData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.get('https://api.unsplash.com/search/photos?query=cat&client_id=a1nhdDBJtoIziIhC7NIa6sbxAn-HlK2Hm0ckGTSkBv4');
  //     const data = response.data;
  //     setPhoto(data);
  //   } catch {
  //     console.error('Error:', error);
  //   }
  // }

  return (
    <>
      <div className='App'>
        <Title />
        {/* FormコンポーネントにsetWordを渡す */}
        {/* FormコンポーネントにgetPhotoDataを渡す */}
        <Form setWord={setWord} getPhotoData={getPhotoData} />
        <Results photo={photo} />
      </div>
    </>
  )
}

export default App
