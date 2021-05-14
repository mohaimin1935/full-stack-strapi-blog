
import InputBox from '../../components/contact/inputBox';
import ButtonS from '../../components/common/buttonS'
import SectionTitle from "../../components/common/sectionTitle"

const Contact = () => {


  return (
    <section id="contact" className="mt-16 sm:mt-24 md-mt-32 bg-green-50 bg-opacity-75 radius-top py-16">
      <div className="container">
        <SectionTitle>
          Get in Touch
        </SectionTitle>

        <div className='px-2'>
          <form
            action="https://formspree.io/f/mrgreepa"
            method="POST"
          >

            <div className='flex flex-col space-y-4 w-full'>
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
                <InputBox
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <InputBox
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div>
                <InputBox 
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div>
                <textarea 
                  cols="30" rows="10"
                  className='bg-white px-4 py-2 w-full sm:px-6 sm:py-4 shadow-sm
                  rounded-md focus:ring-2 focus:ring-green-400 outline-none'
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
            </div>

            <button target="_blank" className='my-16 block mx-auto' type="submit"><ButtonS>Submit</ButtonS></button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;