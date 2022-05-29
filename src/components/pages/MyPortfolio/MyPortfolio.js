import React from "react";

const MyPortfolio = () => {
  return (
    <section className='flex'>
      <div className="banner-container mx-auto">
        <div className="banner-row sm:flex mx-auto mt-20">
          <div className="banner-right w-10/12 sm:w-5/12 flex justify-center mx-auto sm:order-2 order-1 lg:order-2 md:order-2 ">
            <div className="block mx-auto">
              <img className='sm:w-4/5  w-full' src="https://i.ibb.co/GVKV0jM/profile.png" alt="banner1" />
            </div>
          </div>

          <div className="banner-left mx-auto sm:px-6 md:px-24 text-left sm:w-7/12 w-10/12 order-1 sm:order-1 md:order-1 lg:order-1  ">
            <div className="content w-10/12 mx-auto">
              <div className="font-bold text-yellow-400 text-md sm:text-md md:text-lg text-center sm:text-left">Hi.! <span className='text-[#f5d4b7]'>I'm Nahid Hasan And</span> </div>
              <div className="title font-bold capitalize text-2xl sm:text-3xl md:text-5xl leading-8 sm:leading-[40px] md:leading-[60px] mt-4 text-[#18243F] text-center sm:text-left">Trying To Be A Full Stack MERN Developer</div>
              <div className="desc my-4 font-lite text-gray-500 text-center sm:text-left">One of my life's dreams is to become a skilled MERN developer. I want to work as a developer of a reputed organization for the next 6 months. This is my goal, this is my purpose. And one day I will win my dream InshaAllah.
                And in the future I want to be a Jhangkar Mahbub</div>
            </div>
            <div className="buttons flex justify-center sm:justify-start sm:pl-6 md:px-12">
              <table class="table w-full mb-40">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Topic</th>
                    <th>Details</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- row 1 --> */}
                  <tr>
                    <th>1</th>
                    <td>Name:</td>
                    <td colSpan={2}>MD. Nahid Hasan</td>
                  </tr>
                  {/* <!-- row 2 --> */}
                  <tr>
                    <th>2</th>
                    <td>Institution</td>
                    <td colSpan={2}>University Of Barishal</td>

                  </tr>
                  {/* <!-- row 3 --> */}
                  <tr>
                    <th>3</th>
                    <td>Class</td>
                    <td>Honours Final Year</td>
                    <td>{`(8th Semester)`}</td>
                  </tr>
                  <tr>
                    <th colSpan={4}>List of technology that i have skill</th>
                  </tr>
                  <tr>
                    <th></th>
                    <td colSpan={3}>
                      <tr >
                        <th>1</th>
                        <td>HTML</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>CSS</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>bOOTSTRAP</td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>tAILWIND</td>
                      </tr>
                      <tr>
                        <th>5</th>
                        <td>JAVASCRIPT</td>
                      </tr>
                      <tr>
                        <th>6</th>
                        <td>PHP {`(basic)`}</td>
                      </tr>
                      <tr>
                        <th>7</th>
                        <td>WORDPRESS {`(theme development)`}</td>
                      </tr>
                      <tr>
                        <th>8</th>
                        <td>REACT JS</td>
                      </tr>
                      <tr>
                        <th>9</th>
                        <td>EXPRESS JS</td>
                      </tr>
                      <tr>
                        <th>10</th>
                        <td>NODE JS</td>
                      </tr>
                      <tr>
                        <th>11</th>
                        <td>mongoDB</td>
                      </tr>
                      <tr>
                        <th>12</th>
                        <td>MYsql {`(basic)`}</td>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4}>Project That I Have Done</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://rayz-4f91e.web.app/">rayz</a></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://genius-car-service-954ef.web.app/" target="_blank">genius-car-service</a></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://tourest-b1b53.web.app" target="_blank">tourest</a></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://ema-john-e.netlify.app/" target="_blank">ema john</a></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://nakon-agency.netlify.app" target="_blank">nakon-agency</a></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://nahidplanet-3.netlify.app/" target="_blank">CTVS Convention Center</a></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://nahidplanet.github.io/mission-2022/" target="_blank">Portfolio (HTML)</a></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://nahidplanet.github.io/influencer-gear/" target="_blank">influencer-gear (HTML)</a></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://nahidplanet.github.io/penguin-ecommerce/" target="_blank">Penguin-ecommerce (HTML)</a></td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://nahidplanet.github.io/multikart/" target="_blank">MultiKart (API)</a></td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td colSpan={3}><a className='text-blue-600' href="https://nahidplanet.github.io/weather-test/" target="_blank">Weather-test (API)</a></td>
                  </tr>







                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>

    </section>
  );
};

export default MyPortfolio;
