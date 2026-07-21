import SSD_Diagram from "../assets/ADEOS_Group9_SSDDiagram_v3.svg";

function assetSrc(asset) {
  return asset.src ?? asset;
}

export default function SSDDiagram() {
    return (
        <>
            <section className="adeos-g9-component" aria-labelledby="adeos-g9-ssd-diagram-title">
                <img 
                    className="adeos-g9-component__bg adeos-g9-ssd__bg"
                    src={assetSrc(SSD_Diagram)}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    loading="lazy"
                />
                <header className="adeos-g9-ssd__header">
                    <h4 id="adeos-g9-ssd-diagram-title">SSD Diagram</h4>
                </header>
            </section>
            <style>{`
                .adeos-g9-ssd__bg {
                    height: 101%;
                }

                .adeos-g9-ssd__header {
                    position: absolute;
                    inset: 10% 24px auto;
                    text-align: center;
                    pointer-events: none;
                }

                .adeos-g9-ssd__header h4 {
                    margin: 0;
                    border: 0;
                    color: #ffffff;
                    font-family: "Tomorrow", "Noto Sans Variable", sans-serif;
                    font-size: clamp(1.5rem, 7cqw, 3rem);
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 1.08;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.88), 0 0 22px rgba(255, 255, 255, 0.62);
                }
            `}
            </style>
        </>
    )
}