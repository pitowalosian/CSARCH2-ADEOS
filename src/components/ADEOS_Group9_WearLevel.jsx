import background from "../assets/ADEOS_Group9_WearLevelBG.svg";

const blocks = [
    { id: "a", label: "A", text: "Block A" },
    { id: "b", label: "B", text: "Block B" },
    { id: "c", label: "C", text: "Block C" },
    { id: "d", label: "D", text: "Block D" },
];

function assetSrc(asset) {
    return asset.src ?? asset;
}

export default function WearLevel() {
    return (
        <>
            <section className="adeos-g9-component wearlevel" aria-labelledby="wear-leveling-title">
                <img
                    className="adeos-g9-component__bg"
                    src={assetSrc(background)}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    loading="lazy"
                />

                <header className="wearlevel__header">
                    <h4 id="wear-leveling-title">Wear Leveling</h4>
                </header>

                <div className="wearlevel__layout">
                    <div className="wearlevel__blocks" aria-label="Wear leveling blocks">
                        {blocks.map((block) => (
                            <div
                                key={block.id}
                                className={`wearlevel__block wearlevel__block--${block.id}`}
                            >
                                <span>{block.label}</span>
                                <strong>{block.text}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style suppressHydrationWarning>{`
                .wearlevel {
                    position: relative;
                    min-height: 64vh;
                    overflow: hidden;
                }

                .wearlevel__header {
                    position: absolute;
                    inset: 4% auto auto 50%;
                    transform: translateX(-50%);
                    z-index: 2;
                    width: min(92%, 860px);
                    text-align: center;
                }

                .wearlevel__header h4 {
                    margin: 0;
                    font-family: "Tomorrow", "Noto Sans Variable", sans-serif;
                    font-size: clamp(2rem, 4vw, 3.4rem);
                    letter-spacing: 0.05em;
                    line-height: 1.02;
                    text-shadow: 0 0 24px rgba(101, 251, 255, 0.24);
                }

                .wearlevel__header p {
                    margin: 1rem auto 0;
                    max-width: 720px;
                    color: rgba(255, 255, 255, 0.88);
                    font-size: clamp(0.95rem, 1.2vw, 1.2rem);
                    line-height: 1.7;
                }

                .wearlevel__layout {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    place-items: end center;
                    padding: 15% 1rem 2rem;
                    gap: 1rem;
                    z-index: 2;
                }

                .wearlevel__blocks {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 1.4rem;
                    width: min(88%, 760px);
                    justify-items: center;
                    align-items: end;
                }

                .wearlevel__block {
                    min-height: 4rem;
                    width: 100%;
                    max-width: none;
                    padding: 0.9rem 0.75rem;
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    background: rgba(5, 11, 30, 0.62);
                    color: rgba(255, 255, 255, 0.95);
                    display: grid;
                    place-items: center;
                    gap: 0.35rem;
                    text-align: center;
                    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.06);
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                }

                .wearlevel__block span {
                    font-size: clamp(1.4rem, 2vw, 1.8rem);
                    font-weight: 800;
                    color: #65fbff;
                }

                .wearlevel__block strong {
                    display: block;
                    margin-top: 0.2rem;
                    font-size: 0.82rem;
                    color: rgba(255, 255, 255, 0.75);
                    letter-spacing: 0.04em;
                }

                .wearlevel__block--a {
                    animation: wearlevel-block-pulse 4s ease-in-out infinite;
                    animation-delay: 0s;
                }

                .wearlevel__block--b {
                    animation: wearlevel-block-pulse 4s ease-in-out infinite;
                    animation-delay: 0.9s;
                }

                .wearlevel__block--c {
                    animation: wearlevel-block-pulse 4s ease-in-out infinite;
                    animation-delay: 1.8s;
                }

                .wearlevel__block--d {
                    animation: wearlevel-block-pulse 4s ease-in-out infinite;
                    animation-delay: 2.7s;
                }

                @keyframes wearlevel-block-pulse {
                    0%, 18%, 100% {
                        transform: translateY(0);
                        border-color: rgba(255, 255, 255, 0.16);
                        background: rgba(5, 11, 30, 0.68);
                        box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.06);
                    }

                    9% {
                        transform: translateY(-4px);
                        border-color: rgba(101, 251, 255, 0.96);
                        background: rgba(101, 251, 255, 0.16);
                        box-shadow: 0 0 22px rgba(101, 251, 255, 0.55), inset 0 0 12px rgba(0, 255, 200, 0.18);
                    }
                }

                @media (max-width: 860px) {
                    .wearlevel__layout {
                        padding: 30% 1rem 3rem;
                    }

                    .wearlevel__blocks {
                        grid-template-columns: repeat(2, minmax(120px, 1fr));
                        gap: 1rem;
                        width: min(92%, 640px);
                    }
                }

                @media (max-width: 520px) {
                    .wearlevel__header h4 {
                        font-size: 2.4rem;
                    }

                    .wearlevel__header p {
                        font-size: 1rem;
                    }

                    .wearlevel__blocks {
                        grid-template-columns: repeat(2, minmax(92px, 1fr));
                        gap: 0.9rem;
                        width: 100%;
                    }

                    .wearlevel__status-card {
                        min-height: 176px;
                        padding: 1rem;
                    }
                }
            `}</style>
        </>
    );
}
