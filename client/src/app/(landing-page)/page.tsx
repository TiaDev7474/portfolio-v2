

export default function LandingPage() {
    return(
        <main className="mx-auto max-w-[1248px] py-6">
            <section>
                <div className="w-full flex flex-col justify-center items-center gap-8 pt-24">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="text-lg font-medium">Hi! I am Riry 🇲🇬 <span className="text-accent-gold font-bold">Software Developer | Mobile & Web App Specialist </span></h2>
                        <h1 className="text-text-black font-bold text-6xl">Welcome to my personal website</h1>
                        <p className="text-text-gray">Currently under development. Stay tuned for exciting updates!</p>
                    </div>
                    <button className="btn">
                        Schedule a CALL
                    </button>
                </div>
            </section>
        </main>
    )
}
