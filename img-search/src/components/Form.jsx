
const Form = ({ setWord, getPhotoData }) => {
  const handleInputChange = (e) => {
    //入力を受け取りsetWordを呼び出す
    setWord(e.target.value)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="ここに入力してください"
          name="keyword"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={getPhotoData}>検索</button>
      </form>
    </div>
  )
}

export default Form