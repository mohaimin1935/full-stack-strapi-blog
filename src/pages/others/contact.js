import { useEffect } from 'react' 

import CommonHero from "../../components/common/commonHero"
import ContactForm from '../home/contact'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <CommonHero title="Get in Touch" />
          <ContactForm />
      </section>
    </>
  );
}

export default Contact;