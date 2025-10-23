import React from 'react'

export default function About(){
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold">About Legacy Horizons</h1>
        <p className="text-slate-300/80 mt-2">Growing the workout community with better gear and stronger connections.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Our story</h2>
          <p className="text-slate-300/80">We started Legacy Horizons because we believe great workout gear helps people feel confident and perform better. Our mission is to grow the workout community by offering thoughtfully designed, durable, and stylish activewear that fits everyday life. We value building trust and creating real connections — with customers, trainers, and local gyms.</p>

          <h3 className="text-lg font-semibold">What we value</h3>
          <ul className="list-disc pl-5 text-slate-300/80">
            <li>Quality and durability</li>
            <li>Transparent practices</li>
            <li>Community and inclusivity</li>
            <li>Design that supports performance</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <img src="/Images/a_group_of_employees_standing_around_posing.jpg" alt="team wearing tees" className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg border border-slate-700" />
          <img src="/Images/crossfit_community_working_out_in_from_a (1).jpg" alt="training hoodie" className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md border border-slate-700" />
        </div>
      </section>

      <section className="card">
        <h3 className="text-xl font-bold">Join our community</h3>
        <p className="text-slate-300/80 mt-2">We'd love for you to try our pieces, share your journey, and help us build a supportive community around movement. Follow us on social channels (placeholders) and sign up for updates.</p>
      </section>
    </div>
  )
}
