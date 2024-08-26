const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const { id, company } = job
        return (
          <button
            className="job-btn"
            key={id}
            onClick={() => {
              currentItem = index
              setCurrentItem(currentItem)
            }}
          >
            {company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
