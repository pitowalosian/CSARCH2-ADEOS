import background from "../assets/Intro-bg v3.svg";
import leftBorder from "../assets/Left-Border.svg";
import rightBorder from "../assets/Right-Border.svg";
import introContent from "../assets/Intro-content.svg";

const parts = [
    {
        id: "left",
        text: "Solid-State Drives, or SSDs, are storage devices used in computers, laptops, consoles, and other digital systems. Unlike hard disk drives, SSDs do not use spinning magnetic platters or moving read/write heads. Instead, they store data electronically using NAND flash memory.",
        border: leftBorder,
    },
    {
        id: "right",
        text: "The main idea of this exhibit is simple: files are stored as binary data, and SSDs preserve that data by controlling electrical charge inside tiny memory cells. By exploring the components of NAND flash memory, visitors can see how large files are built from small cells that represent binary values.",
        border: rightBorder,
    }
]

function assetSrc(asset) {
  return asset.src ?? asset;
}

export default function Introduction() {
    return (
        <>
            <section className="component" aria-labelledby="introduction-title">
                <img 
                    className="component__bg"
                    src={assetSrc(background)}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    loading="lazy"
                />
                <header className="introduction__header">
                    <h4 id="introduction-title">
                        Flash Memory: <br /> How SSDs Store Data
                    </h4>
                </header>
                <div className="introduction__text">
                    {/* <img
                        src={assetSrc(introContent)}
                        alt=""
                        aria-hidden="true"
                        decoding="async"
                        width="100%"
                    /> */}
                    {parts.map((part) => (
                        <div key={part.id} className="text-container">
                            <img
                                src={assetSrc(part.border)}
                                className={`introduction__text-bg--${part.id}`}
                                alt=""
                                aria-hidden="true"
                                decoding="async"
                                width="40%"
                            />
                            <span className={`introduction__text--${part.id}`}>{part.text}</span>
                        </div>
                    ))}
                </div>
            </section>
            <style suppressHydrationWarning> {`
                .introduction__header {
                    position: absolute;
                    inset: 20% 24px auto;
                    text-align: center;
                    pointer-events: none;
                }

                .introduction__header h4 {
                    margin: 0;
                    color: #ffffff;
                    font-family: "Tomorrow", "Noto Sans Variable", sans-serif;
                    font-size: clamp(1.5rem, 5cqw, 4rem);
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 1.08;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.88), 0 0 22px rgba(255, 255, 255, 0.62);
                }

                .introduction__text {
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
                
                .text-container {
                    margin-top: 60%;
                }

                .introduction__text-bg--left {
                    position: absolute;
                    z-index: 1;
                    transform: translateX(26.5%);
                    object-fit: cover;
                }
                
                .introduction__text-bg--right {
                    position: absolute;
                    z-index: 1;
                    transform: translateX(1%);
                    object-fit: cover;
                }

                .introduction__text--left,
                .introduction__text--right {
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

                .introduction__text--left {
                    left: 10.5%;
                }

                .introduction__text--right {
                    right: 10%;
                }

                @media (max-width: 450px) {
                    .introduction__header {
                        inset: 15% 24px auto;
                    }

                    .introduction__header h4 {
                        font-size: 5rem;
                    }

                    .introduction__text {
                        position: static;
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        height: auto;
                        padding: 1rem 0;
                        font-size: 0.85rem;
                        gap: 1.5rem;
                    }

                    .text-container {
                        position: relative;
                        margin-top: 0%;
                        height: auto;
                        width: 100%;
                    }

                    .introduction__text-bg--left,
                    .introduction__text-bg--right {
                        position: relative;
                        display: block;
                        margin: 0 auto;
                        transform: none;
                        width: 80%;
                    }

                    .introduction__text-bg--left {
                        margin-top: 50%
                    }

                    .introduction__text--left,
                    .introduction__text--right {
                        position: absolute;
                        inset: 0;
                        top: 0;
                        left: 0;
                        right: 0;
                        transform: none;
                        max-width: 70%;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 2rem;
                        padding: 1rem 1.25rem;
                    }

                    .introduction__text--left {
                        top: 65%;
                        right: 5%;
                    }

                    .introduction__text--right {
                        top: 20%;
                        left: 5%;
                    }
                }
            `}
            </style>
        </>
    )
}