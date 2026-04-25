import DotGrid from "./components/DotGrid"
import Navbar from "./partials/Navbar"
import Footer from "./partials/Footer"

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <div className="relative min-h-screen w-full overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                <DotGrid
                    dotSize={6}
                    gap={35}
                    baseColor="#e0e0e0"
                    activeColor="#462C7D"
                    proximity={200}
                    shockRadius={300}
                    shockStrength={4}
                    resistance={600}
                    returnDuration={1.2}
                />
            </div>
            <main className="relative z-10 w-full h-full pt-24 min-h-[calc(100vh-200px)]">
                {children}
            </main>
            <Footer />
        </div>
            </>
    )
}

export default Layout