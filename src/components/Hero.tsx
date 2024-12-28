import Illustration from "../assets/illustration-intro.svg"
import "../App.css";
export function Hero() {
    return (
        <section className="hero | text-center-sm-only padding-block-900">
            <div className="container">
                <div className="even-columns">
                    <div className="flow">
                        <h1 className="fs-primary-heading fw-bold">Bring everyone together to build better products.</h1>
                        <p>Manage makes it simple for software teams to plan day-to-day
                            tasks while keeping the larger team goals in view.
                        </p>
                        <button className="button">
                        Get Started
                    </button>
                    </div>
                    
                    <div className="hero__image">
                        <img src={Illustration} alt="illustration" className="mx-auto" />

                    </div>
                </div>

            </div>
        </section>
    )
}