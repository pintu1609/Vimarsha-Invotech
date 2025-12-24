export default function HowWeWork() {
    return (
        <section className="py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-slate-100">
                    How We Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {[
                        "Understand the problem",
                        "Define scope & timeline",
                        "Build in milestones",
                        "Review & iterate",
                        "Deliver & support",
                    ].map((step, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow-md text-sm  sm:text-md font-medium text-gray-700"
                        >
                            <span className="block text-blue-600 font-bold mb-2 text-lg">
                                Step {i + 1}
                            </span>
                            {step}
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}