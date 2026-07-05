import SSD_Diagram from "../assets/SSD-Diagram v2.svg";

function assetSrc(asset) {
  return asset.src ?? asset;
}

export default function SSDDiagram() {
    return (
        <>
            <section className="component">
                <img 
                    className="ssd__bg"
                    src={assetSrc(SSD_Diagram)}
                    decoding="async"
                    loading="lazy"
                />
            </section>
            <style>{`
                .ssd__bg {
                    position: absolute;
                    z-index: 0;
                    width: auto;
                    height: 100%;
                    display: block;
                    object-fit: fill;
                    opacity: 0.96;
                    pointer-events: none;
                    user-select: none;
                }
            `}
            </style>
        </>
    )
}