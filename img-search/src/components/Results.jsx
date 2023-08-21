
const Results = ({ photo }) => {
  return (
    <div className="photo-list">
      {photo.map((singleData, index) =>
        // console.log(singleData)
        <a href={singleData.links.html} key={index}>
          <img src={singleData.urls.regular} alt={singleData.alt_description} />
        </a>
      )}
    </div>
  )
}

export default Results