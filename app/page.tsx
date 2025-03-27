import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-yellow-400 bg-black py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="incremental (ad)ventures Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="relative">
              <span className="text-xs font-bold text-yellow-400 font-display absolute -top-2 -left-1">
                incremental
              </span>
              <span className="text-xl font-bold text-yellow-400 font-display">(ad)ventures</span>
            </div>
          </div>
          <nav className="flex gap-6">
            {["hold", "build", "nurture", "dig", "grow"].map((item, i) => (
              <Link key={i} href={`#${item}`} className="text-sm font-medium font-display hover:text-yellow-400">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                <span className="text-yellow-400">Your</span> Path Is
                <span className="block text-blue-400">Under</span>
                <span className="block text-green-400">Construction</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-md font-body">
                Navigating the winding path of entrepreneurship with passion, vision, and innovation.
              </p>
              <div className="mt-8">
                <div className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-full font-display">
                  Join the adventure
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/logo.png"
                alt="incremental (ad)ventures Logo"
                width={400}
                height={400}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="hold" className="py-16 bg-yellow-400 text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-black text-yellow-400 px-6 py-2 rounded-full mb-4">
                <h2 className="text-3xl font-bold font-display">Things We Hold</h2>
              </div>
              <p className="text-center text-black max-w-2xl mx-auto font-body">
                Our portfolio holding company showcases businesses we operate and nurture to success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "TechNova",
                  description: "Innovative software solutions for emerging markets",
                  icon: "💻",
                  color: "bg-blue-500",
                },
                {
                  title: "GreenPath",
                  description: "Sustainable living products and services",
                  icon: "🌱",
                  color: "bg-green-500",
                },
                {
                  title: "UrbanPulse",
                  description: "Smart city infrastructure and planning",
                  icon: "🏙️",
                  color: "bg-red-500",
                },
                {
                  title: "WaveDigital",
                  description: "Digital transformation consultancy",
                  icon: "🌊",
                  color: "bg-purple-500",
                },
              ].map((item, index) => (
                <Link href={`#company-${index}`} key={index} className="block">
                  <div
                    className={`${item.color} text-white rounded-lg p-6 h-full hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
                    <p className="font-body">{item.description}</p>
                    <div className="mt-4 text-sm font-bold inline-block border-b-2 border-white">explore →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Build Section */}
        <section id="build" className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-white text-blue-500 px-6 py-2 rounded-full mb-4">
                <h2 className="text-3xl font-bold font-display">Things We Build</h2>
              </div>
              <p className="text-center text-white max-w-2xl mx-auto font-body">
                Companies we've built with AI and no-code tools, transforming ideas into reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AICanvas",
                  description: "AI-powered design tools for creative professionals",
                  icon: "🎨",
                  color: "bg-yellow-400 text-black",
                },
                {
                  title: "NoCodeNexus",
                  description: "Platform for building applications without coding",
                  icon: "🧩",
                  color: "bg-black text-white",
                },
                {
                  title: "DataSculpt",
                  description: "Data visualization and analytics for businesses",
                  icon: "📊",
                  color: "bg-green-400 text-black",
                },
              ].map((item, index) => (
                <Link href={`#build-${index}`} key={index} className="block">
                  <div
                    className={`${item.color} rounded-lg p-6 h-full hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
                    <p className="font-body">{item.description}</p>
                    <div className="mt-4 text-sm font-bold inline-block border-b-2 border-current">discover →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nurture Section */}
        <section id="nurture" className="py-16 bg-green-400 text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-black text-green-400 px-6 py-2 rounded-full mb-4">
                <h2 className="text-3xl font-bold font-display">Things We Nurture</h2>
              </div>
              <p className="text-center text-black max-w-2xl mx-auto font-body">
                Companies we believe in and have invested in, supporting their growth journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "EcoSphere",
                  description: "Environmental monitoring and conservation technology",
                  icon: "🌍",
                  color: "bg-blue-500",
                },
                {
                  title: "MindfulTech",
                  description: "Mental wellness applications and services",
                  icon: "🧠",
                  color: "bg-purple-500",
                },
              ].map((item, index) => (
                <Link href={`#nurture-${index}`} key={index} className="block">
                  <div
                    className={`${item.color} text-white rounded-lg p-6 h-full hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
                    <p className="font-body">{item.description}</p>
                    <div className="mt-4 text-sm font-bold inline-block border-b-2 border-white">learn more →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Criteria Section */}
        <section id="dig" className="py-16 bg-pink-400 text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-black text-pink-400 px-6 py-2 rounded-full mb-4">
                <h2 className="text-3xl font-bold font-display">Things We Dig</h2>
              </div>
              <p className="text-center text-black max-w-2xl mx-auto font-body">
                Our criteria for selecting and investing in companies that align with our vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Industries",
                  description:
                    "We focus on tech, sustainability, health, and education sectors with potential for innovation and impact.",
                  icon: "🏭",
                  color: "bg-blue-500",
                },
                {
                  title: "Financials",
                  description: "Strong unit economics, clear path to profitability, and sustainable growth metrics.",
                  icon: "📊",
                  color: "bg-yellow-400 text-black",
                },
                {
                  title: "Tenure",
                  description:
                    "Companies with proven track records and experienced leadership teams committed to long-term vision.",
                  icon: "⏱️",
                  color: "bg-purple-500",
                },
                {
                  title: "Vision",
                  description:
                    "Bold, innovative ideas that challenge the status quo and have potential for significant positive impact.",
                  icon: "🔭",
                  color: "bg-green-500",
                },
              ].map((item, index) => (
                <div key={index} className="block">
                  <div
                    className={`${item.color} ${item.color.includes("yellow") || item.color.includes("green") ? "text-black" : "text-white"} rounded-lg p-6 h-full hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
                    <p className="font-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="grow" className="py-16 bg-purple-500 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-white text-purple-500 px-6 py-2 rounded-full mb-4">
                <h2 className="text-3xl font-bold font-display">Things We Grow</h2>
              </div>
              <p className="text-center text-white max-w-2xl mx-auto font-body">
                Our values, mission, and the people behind incremental (ad)ventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Founder",
                  description:
                    "Meet our visionary founder and learn about the journey that led to incremental (ad)ventures.",
                  icon: "👤",
                  color: "bg-blue-400",
                },
                {
                  title: "Blog",
                  description: "Insights, thoughts, and stories from our entrepreneurial journey.",
                  icon: "✍️",
                  color: "bg-yellow-400 text-black",
                },
                {
                  title: "Partners",
                  description: "The collaborators and tools that help us bring our vision to life.",
                  icon: "🤝",
                  color: "bg-green-400 text-black",
                },
                {
                  title: "Contact",
                  description: "Reach out to us with your ideas, questions, or partnership opportunities.",
                  icon: "📧",
                  color: "bg-pink-400 text-black",
                },
              ].map((item, index) => (
                <Link href={`#about-${index}`} key={index} className="block">
                  <div
                    className={`${item.color} rounded-lg p-6 h-full hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
                    <p className="font-body">{item.description}</p>
                    <div className="mt-4 text-sm font-bold inline-block border-b-2 border-current">connect →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-10 border-t border-yellow-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="incremental (ad)ventures Logo"
              width={30}
              height={30}
              className="h-8 w-auto"
              priority
            />
            <div className="relative">
              <span className="text-xs font-bold text-yellow-400 font-display absolute -top-2 -left-1">
                incremental
              </span>
              <span className="text-sm font-bold text-yellow-400 font-display">(ad)ventures</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="font-body">© 2025 incremental (ad)ventures. Made with passion in NYC.</p>
            <p className="mt-1 text-yellow-400 font-body">Good vibes and ideas energize us - reach out</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

