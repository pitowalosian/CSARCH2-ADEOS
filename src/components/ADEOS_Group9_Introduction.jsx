import background from "../assets/ADEOS_Group9_IntroductionBackground.svg";
import leftBorder from "../assets/ADEOS_Group9_IntroductionLeftBorder.svg";
import rightBorder from "../assets/ADEOS_Group9_IntroductionRightBorder.svg";

const parts = [
    {
        id: "left",
        text: "Solid-State Drives, or SSDs, are storage devices used in computers, laptops, consoles, and other digital systems. Unlike hard disk drives, SSDs do not use spinning magnetic platters or moving read/write heads. Instead, they store data electronically using NAND flash memory.",
        border: leftBorder,
    },
    {
        id: "right",
        text: "The main idea of this exhibit is simple: files are encoded as binary data, and an SSD controller maps that data across NAND flash memory cells. Stored charge changes each cell's threshold voltage, allowing sensing circuitry to recover the represented bit values.",
        border: rightBorder,
    }
]

function assetSrc(asset) {
  return asset.src ?? asset;
}

export default function Introduction() {
    return (
        <>
            <section className="adeos-g9-component adeos-g9-introduction" aria-labelledby="adeos-g9-introduction-title">
                <img 
                    className="adeos-g9-component__bg"
                    src={assetSrc(background)}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    loading="lazy"
                />
                <header className="adeos-g9-introduction__header">
                    <h4 id="adeos-g9-introduction-title">
                        Flash Memory: <br /> How SSDs Store Data
                    </h4>
                </header>
                <div className="adeos-g9-introduction__text">
                    {parts.map((part) => (
                        <div key={part.id} className="adeos-g9-introduction__panel">
                            <img
                                src={assetSrc(part.border)}
                                className={`adeos-g9-introduction__text-bg--${part.id}`}
                                alt=""
                                aria-hidden="true"
                                decoding="async"
                                width="40%"
                            />
                            <span className={`adeos-g9-introduction__text--${part.id}`}>{part.text}</span>
                        </div>
                    ))}
                </div>
            </section>
            <style suppressHydrationWarning> {`
                .adeos-g9-introduction__header {
                    position: absolute;
                    inset: 20% 24px auto;
                    text-align: center;
                    pointer-events: none;
                }

                .adeos-g9-introduction__header h4 {
                    margin: 0;
                    color: #ffffff;
                    font-family: "Tomorrow", "Noto Sans Variable", sans-serif;
                    font-size: clamp(1.5rem, 5cqw, 4rem);
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 1.08;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.88), 0 0 22px rgba(255, 255, 255, 0.62);
                }

                .adeos-g9-introduction__text {
                    position: absolute;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    justify-content: center;
                    font-family: "Space Mono", "Noto Sans Variable", sans-serif;
                    font-size: clamp(0.4rem, 1.4cqw, 1rem);
                    line-height: 1.25;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                
                .adeos-g9-introduction__panel {
                    margin-top: 60%;
                }

                .adeos-g9-introduction__text-bg--left {
                    position: absolute;
                    z-index: 1;
                    transform: translateX(26.5%);
                    object-fit: cover;
                }
                
                .adeos-g9-introduction__text-bg--right {
                    position: absolute;
                    z-index: 1;
                    transform: translateX(1%);
                    object-fit: cover;
                }

                .adeos-g9-introduction__text--left,
                .adeos-g9-introduction__text--right {
                    position: absolute;
                    z-index: 3;
                    top: 48%;
                    transform: translateY(47%);
                    max-width: 34.5%;
                    color: #ffffff;
                    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                    text-align: center;
                    padding: 1rem;
                }

                .adeos-g9-introduction__text--left {
                    left: 10.5%;
                }

                .adeos-g9-introduction__text--right {
                    right: 10%;
                }

                @media (max-width: 650px) {
                    body .adeos-g9-component.adeos-g9-introduction {
                        display: grid;
                        gap: 1rem;
                        min-height: 0;
                        padding: 1.5rem 0.75rem 1rem;
                        aspect-ratio: auto;
                    }

                    body .adeos-g9-component.adeos-g9-introduction .adeos-g9-component__bg {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .adeos-g9-introduction__header {
                        position: relative;
                        inset: auto;
                        z-index: 2;
                        padding: 0.5rem;
                    }

                    .adeos-g9-introduction__header h4 {
                        font-size: 2rem;
                    }

                    .adeos-g9-introduction__text {
                        position: relative;
                        display: grid;
                        grid-template-columns: 1fr;
                        width: 100%;
                        height: auto;
                        padding: 0;
                        gap: 0.75rem;
                    }

                    .adeos-g9-introduction__panel {
                        position: relative;
                        display: grid;
                        place-items: center;
                        min-height: 240px;
                        margin: 0;
                        width: 100%;
                    }

                    .adeos-g9-introduction__text-bg--left,
                    .adeos-g9-introduction__text-bg--right {
                        position: absolute;
                        inset: 0;
                        display: block;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        transform: none;
                        object-fit: fill;
                    }

                    .adeos-g9-introduction__text--left,
                    .adeos-g9-introduction__text--right {
                        position: relative;
                        inset: auto;
                        transform: none;
                        max-width: none;
                        margin: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.75rem;
                        line-height: 1.4;
                        padding: 2.5rem 2rem;
                    }
                }
            `}
            </style>
        </>
    )
}