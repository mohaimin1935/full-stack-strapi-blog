import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import ButtonS from '../../components/common/buttonS'

import CommonHero from '../../components/common/commonHero'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <CommonHero title="Opps! Nothing found." />
        
        <div className="container">
          <Link to='/'>
            <ButtonS>Back to Home</ButtonS>
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;