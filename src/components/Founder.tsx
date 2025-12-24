// import { Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Founder() {
    return (

        //        <section className="my-16">
        //   {/* <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> */}

        //     {/* LEFT */}
        //     {/* <div className="text-center md:text-left">
        //       <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-2">
        //         Pintu Kumar
        //       </h2>
        //       <p className="text-blue-400 mb-4">Founder & Full-Stack Engineer</p>

        //       <p className="text-slate-300 text-sm sm:text-base text-left" >
        //         Vimarsha Invotech is a founder-led engineering studio. I stay close to
        //         the code, the architecture, and the business problem — ensuring clarity,
        //         accountability, and high-quality execution on every engagement.
        //       </p>
        //     </div> */}

        //     {/* RIGHT */}
        //     {/* <div className="text-slate-300 text-sm sm:text-base">
        //       <ul className="space-y-3">
        //         <li>• Hands-on full-stack & system design ownership</li>
        //         <li>• Experience building production-grade applications</li>
        //         <li>• Strong focus on clarity, delivery, and long-term maintainability</li>
        //         <li>• Direct communication — no layers, no outsourcing</li>
        //       </ul>
        //     </div> */}

            <section className="relative py-20 px-8 md:px-16  bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden mb-32">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-transparent rounded-full opacity-20 blur-2xl" />
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-800 rounded-full overflow-hidden border-4 border-white/10 flex items-center justify-center relative grayscale hover:grayscale-0 transition-all duration-700">
                          <span className="text-slate-600 font-bold text-6xl uppercase tracking-tighter">PK</span>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-white">Behind the <span className="text-blue-500 font-light italic text-2xl">Vision</span></h2>
                      <h3 className="text-xl font-medium text-slate-300">Pintu Kumar — Founder & Lead Architect</h3>
                      <p className="text-lg text-slate-400 leading-relaxed">
                        As the architect behind Vimarsha Invotech, I integrate 2+ years of full-stack expertise with a commitment to research-driven development. My focus is on transforming complex business requirements into high-performance digital assets that emphasize **scalability, security, and SEO**.
                      </p>

                      {/* <div className="flex gap-4 pt-4">
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10">
                          <Linkedin className="w-5 h-5 text-blue-400" />
                        </a>
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10">
                          <Github className="w-5 h-5 text-slate-200" />
                        </a>
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-sm font-bold transition-all ml-2">
                          View Full Profile <ExternalLink className="w-4 h-4" />
                        </button>
                      </div> */}
                    </div>
                  </div>
                </section>

        //   {/* </div> */}
        // </section>
       
    )
}