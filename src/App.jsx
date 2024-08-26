import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchjobs = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsLoading(false)
        setIsError(true)
        return
      }
      const newJobs = await response.json()
      setJobs(newJobs)
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchjobs()
  }, [])

  if (isError) {
    return <h1>There was an error.</h1>
  }

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* job info*/}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
