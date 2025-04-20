

export default function LandingPage() {
    return(
        <main className="mx-auto max-w-[1248px] py-6">
            <section>
                <div className="w-full flex flex-col justify-center items-center gap-8 pt-24 px-6">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="text-sm md:text-lg font-medium text-center">Hi! I am Riry 🇲🇬 <span className="text-accent-gold font-bold">Software Developer | Mobile & Web App Specialist </span></h2>
                        <h1 className="text-text-black text-3xl font-bold md:text-6xl text-center">Welcome to my personal website</h1>
                        <p className="text-text-gray text-sm text-center">Currently under development. Stay tuned for exciting updates!</p>
                    </div>
                    <button className="btn">
                        Schedule a CALL
                    </button>
                </div>
            </section>
        </main>
    )
}
