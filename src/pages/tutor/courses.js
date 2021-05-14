import {useEffect} from 'react'

import CommonHero from '../../components/common/commonHero'


const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <CommonHero title="Courses" />

        <div className="container">
          <h1>This page is under construction.</h1>
        </div>
      </section>
    </>
  )
}

export default Courses;