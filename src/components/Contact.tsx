import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
      <section className="bg-black body-font relative shadow-lg shadow-white/10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-medium title-font md:mb-4 mb-2 font-serif text-pink-500" data-aos="fade-up">
              Contact Me
            </h1>
            <p className='text-xl text-white md:mt-4 mt-2' data-aos="fade-up">{"Let's"} connect and explore exciting opportunities together.</p>
          </div>
          <form action="https://formspree.io/f/xldebpwn"
            method="POST"
          >
            <div className="lg:w-1/2 md:w-2/3 mx-auto md:mt-12">
              <div className="flex flex-col -m-2">
                <div className="p-2 w-ful">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-lg text-gray-300" data-aos="fade-up">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded-lg border-2 border-pink-500 text-base outline-none text-gray-500 py-1 px-3 leading-8"
                      required data-aos="fade-up" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-lg text-gray-300" data-aos="fade-up">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded-lg border-2 border-pink-500 text-base outline-none text-gray-500 py-1 px-3 leading-8"
                      required data-aos="fade-up" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="subject" className="leading-7 text-lg text-gray-300" data-aos="fade-up">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full bg-white rounded-lg border-2 border-pink-500 text-base outline-none text-gray-500 py-1 px-3 leading-8"
                      required data-aos="fade-up" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-lg text-gray-300"
                      data-aos="fade-up" >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded-lg border-2 border-pink-500 h-32 text-base outline-none text-gray-500 py-1 px-3 leading-6"
                      defaultValue={""}
                      required data-aos="fade-up" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-20 md:px-48 focus:outline-none hover:bg-pink-700 rounded text-lg md:text-xl" data-aos="fade-up">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact

