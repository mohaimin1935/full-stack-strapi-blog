import {useEffect} from 'react'

import CommonHero from '../../components/common/commonHero'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
      return (
        <>
          <section>
            <CommonHero title="About Me" />

            <div className="container">
                <h1>This page is under contruction.</h1>
            </div>
            
          </section>
        </>
      );
}
 
export default About;