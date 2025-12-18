// "use client";

// import { useFormik } from "formik";
// import { useState } from "react";
// import { toFormikValidationSchema } from "zod-formik-adapter";
// import { BeatLoader } from "react-spinners";
// import { toast } from "react-hot-toast";
// import { initialContact, contactValidationSchema } from "@/validation/Index";

// export default function ContactPage() {
//   const [loading, setLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: initialContact,
//     validationSchema: toFormikValidationSchema(contactValidationSchema),
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         setLoading(true);

//         const res = await fetch("/api/contactUs", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         });

//         if (!res.ok) {
//           toast.error("Failed to send message");
//           setLoading(false);
//           return;
//         }

//         toast.success("Message sent successfully!");
//         resetForm();
//         setLoading(false);
//       } catch (err) {
//         toast.error("Something went wrong");
//         setLoading(false);
//       }
//     },
//   });

//   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
//     formik;

//   return (
//     <section className="pt-24 pb-16 md:py-24 px-4 sm:px-6">
//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="mb-12 md:mb-16 text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-slate-100">
//             Contact <span className="text-blue-400">Us</span>
//           </h1>
//           <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
//             Let’s discuss how Vimarsha Invotech can help you build scalable,
//             intelligent digital solutions.
//           </p>
//         </div>

//         {/* Contact Card */}
//         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl mb-12 md:mb-16" >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

//             {/* Left: Info */}
//             <div>
//               <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-100">
//                 Get in Touch
//               </h2>
//               <p className="text-slate-300 mb-6 text-sm sm:text-base">
//                 Whether you’re a startup, MSME, or growing business, we’d love
//                 to explore how research-driven engineering and AI can unlock
//                 your next phase of growth.
//               </p>

//               <div className="space-y-3 text-slate-300 text-sm sm:text-base">
//                 <p>
//                   <span className="text-blue-400 font-medium">Email:</span>{" "}
//                   contact@vimarshainvotech.com
//                 </p>
//                 <p>
//                   <span className="text-blue-400 font-medium">Location:</span>{" "}
//                   India (Serving Global Clients)
//                 </p>
//               </div>
//             </div>

            

//             {/* Right: Contact Form */}

//              <div className="flex items-center justify-center">
//               <div className="w-full bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-100">
//                   Start a Conversation
//                 </h3>
//                 <p className="text-slate-300 mb-6 text-sm sm:text-base">
//                   Share your idea or challenge, and we’ll get back with
//                   thoughtful insights and next steps.
//                 </p>
//                 <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-sm sm:text-base">
//                   Email Us
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//         <div className=" ">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   name="fullName"
//                   placeholder="Full Name"
//                   value={values.fullName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
//                     errors.fullName && touched.fullName
//                       ? "border-red-500"
//                       : "border-white/10"
//                   }`}
//                 />
//               </div>

//               <div>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
//                     errors.email && touched.email
//                       ? "border-red-500"
//                       : "border-white/10"
//                   }`}
//                 />
//                 </div>
//                 <div>

//                  <input type="text" name="phone"  placeholder="Phone Number"   className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
//                     errors.phone && touched.phone
//                       ? "border-red-500"
//                       : "border-white/10"
//                   }`}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.phone}/>
//                     </div>
//                     <div>
//                     <input type="text" name="emailSubject" placeholder="Email Subject"   className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
//                     errors.emailSubject && touched.emailSubject
//                       ? "border-red-500"
//                       : "border-white/10"
//                   }`}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.emailSubject}/>
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   rows={4}
//                   placeholder="Tell us about your idea"
//                   value={values.message}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
//                     errors.message && touched.message
//                       ? "border-red-500"
//                       : "border-white/10"
//                   }`}
//                 />

//               </div>

//               <button type="submit" className="w-[200px] text-xl text-bg-color bg-blue-500  px-4 py-2 rounded-[25px] transition duration-300 hover:shadow-none mx-auto mt-4 hover:bg-blue-600">
//                         {loading ? <BeatLoader size={10} color="white"/> : 
//                          "Send Meassage"}
//                           </button>

//               {/* <button
//                 type="submit"
//                 // disabled={loading}
//                 className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium disabled:opacity-60"
//               >
//                 {loading ? <BeatLoader size={10} color="white" /> : "Send Message"}
//               </button> */}
//             </form>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useFormik } from "formik";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { BeatLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { initialContact, contactValidationSchema } from "@/validation/Index";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialContact,
    validationSchema: toFormikValidationSchema(contactValidationSchema),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);

        const res = await fetch("/api/contactUs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          toast.error("Failed to send message");
          setLoading(false);
          return;
        }

        toast.success("Message sent successfully!");
        resetForm();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(false);
      } catch (err) {
        toast.error("Something went wrong");
        setLoading(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Let’s discuss how Vimarsha Invotech can help you build scalable,
            intelligent digital solutions.
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT INFO */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-100 mb-3">
                Get in Touch
              </h2>

              <p className="text-slate-300 mb-6">
                Whether you’re a startup, MSME, or growing business, we’d love
                to explore how research-driven engineering and AI can unlock
                your next phase of growth.
              </p>

              <div className="space-y-3 text-slate-300">
                <p>
                  <span className="text-blue-400 font-medium">Email:</span>{" "}
                  contact@vimarshainvotech.com
                </p>
                <p>
                  <span className="text-blue-400 font-medium">Location:</span>{" "}
                  India (Serving Global Clients)
                </p>
                <p className="text-sm text-slate-400 pt-4">
                  ⏱ We usually respond within 24 hours.
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  {/* <input
                    name="fullName"
                    placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input ${
                      errors.fullName && touched.fullName
                        ? "border-red-500"
                        : ""
                    }`}
                  /> */}
                  <input
                  name="fullName"
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
                    errors.fullName && touched.fullName
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                />
                  
                </div>

                <div>
                  <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                  />
                 
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                 <input type="text" name="phone"  placeholder="Phone Number"   className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
                    errors.phone && touched.phone
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}/>
                 
                </div>

                <div>
                 <input type="text" name="emailSubject" placeholder="Email Subject"   className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
                    errors.emailSubject && touched.emailSubject
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emailSubject}
                  />
                  
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your idea"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-slate-100 placeholder-slate-400 focus:outline-none ${
                    errors.message && touched.message
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold
                           hover:bg-blue-600 transition
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? <BeatLoader size={10} color="white" /> : "Send Message"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
