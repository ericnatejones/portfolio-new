import ReactPlayer from 'react-player';

export default function Projects() {
  return (
    <div className='text-gray-600'>
      <header className="bg-ff5722 py-6 mb-8">
        <h1 className="text-center text-4xl text-gray-400 font-bold">My Projects</h1>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Fun Projects Panel */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-ff5722">Fun Projects</h2>
            <div className="space-y-4">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <div className="space-y-4">
                  <a href="https://react-arcade.netlify.app/" className="block bg-purple-100 p-4 rounded-lg shadow-md hover:bg-purple-200 transform hover:scale-105 transition">
                    <ReactPlayer
                      url="/arcade_converted.mp4"
                      className="rounded-lg overflow-hidden"
                      width="100%"
                      height="200px"
                      playing={true}
                      loop={true}
                      muted={true}
                      playsinline={true}
                      config={{
                        file: {
                          attributes: {
                            style: {
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            },
                          },
                        },
                      }}
                      onError={(e) => console.error('ReactPlayer error:', e)}
                    />
                    <h3 className="text-xl font-bold mb-2">React Arcade</h3>
                    <p>These projects are where I solve some of my biggest code challenges in React.</p>
                  </a>
                </div>
                <div className="space-y-4">
                  <a href="https://terrain-builder.netlify.app/" className="block bg-yellow-100 p-4 rounded-lg shadow-md hover:bg-yellow-200 transform hover:scale-105 transition">
                    <ReactPlayer
                      url="/terrainbuilder_converted.mp4"
                      className="rounded-lg overflow-hidden"
                      width="100%"
                      height="200px"
                      playing={true}
                      loop={true}
                      muted={true}
                      playsinline={true}
                      config={{
                        file: {
                          attributes: {
                            style: {
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            },
                          },
                        },
                      }}
                      onError={(e) => console.error('ReactPlayer error:', e)}
                    />
                    <h3 className="text-xl font-bold mb-2">Terrain Builder</h3>
                    <p>I'm stoked on what I was able to do here. Take some time to figure out how it works!</p>
                  </a>
                </div>

                <div className="space-y-4">
                  <a href="https://exciting-dots.surge.sh/" className="block bg-green-100 p-4 rounded-lg shadow-md hover:bg-green-200 transform hover:scale-105 transition">
                    <ReactPlayer
                        url="/dots_converted.mp4"
                        className="rounded-lg overflow-hidden"
                        width="100%"
                        height="200px"
                        playing={true}
                        loop={true}
                        muted={true}
                        playsinline={true}
                        config={{
                          file: {
                            attributes: {
                              style: {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              },
                            },
                          },
                        }}
                        onError={(e) => console.error('ReactPlayer error:', e)}
                      />
                    <h3 className="text-xl font-bold mb-2">Exciting Dots</h3>
                    <p>Explore the fun and interactive world of Exciting Dots.</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Business Projects Panel */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-ff5722">Business Projects</h2>
            <div className="space-y-4">
              <a href="https://dentists-six.vercel.app/" className="block bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transform hover:scale-105 transition">
               <ReactPlayer
                  url="/dente_converted.mp4"
                  className="rounded-lg overflow-hidden"
                  width="100%"
                  height="200px"
                  playing={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        },
                      },
                    },
                  }}
                  onError={(e) => console.error('ReactPlayer error:', e)}
                />
                <h3 className="text-xl font-bold mb-2">Dentist Registry</h3>
                <p>I'm working on a comprehensive dentist registry, similar to Zillow or Rentals.com, but specifically for dentists. This platform will help users find and connect with dental professionals in their area, complete with reviews, ratings, and detailed profiles.</p>
                <p>Stay tuned for more updates as I build out features and refine the user experience.</p>
              </a>
            </div>
          </section>

          {/* Unfinished Projects Panel */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">Unfinished, but Ask Me About Them</h2>
            <div className="space-y-4">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Form Filler for Lawyers</h3>
                <p>I've developed a form filler application designed specifically for my brother, who is a lawyer. This tool will streamline the process of filling out legal forms, reducing repetitive tasks and improving efficiency.</p>
                <p>This project is tailored to meet the specific needs of legal professionals, ensuring accuracy and ease of use.</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Code Pals Portfolio</h3>
                <p>Students can use this framework to demonstrate how we can funnel employers to Code Pals through our portfolios.</p>
                <p>The theme is “Polished in the front, party in the back.” Users can toggle a button to reveal the Code Ony stuff. Default elements will turn over to show how you can work with a developer for free to improve the site as practice. Useful users can hang out for free, while less useful ones will be encouraged to contribute financially.</p>
                <p>If the Slack link is expired, please <a href="/contact" className="text-ff5722 hover:underline">contact me</a>.</p>
                <p>Slack invite: <a className="text-ff5722 hover:underline" href="https://join.slack.com/t/codepals-group/shared_invite/zt-2q4okgj7l-3C~Rz6kh4NyQxIbMuuB_fw">Join Code Pals Slack</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
