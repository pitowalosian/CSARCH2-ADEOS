import { useState } from "react";

import backgroundElements from "../assets/Background Elements v2.svg";
import blockAsset from "../assets/Block.svg";
import blockBorder from "../assets/Block Border.svg";
import cellAsset from "../assets/Cell.svg";
import cellBorder from "../assets/Cell Border.svg";
import chipAsset from "../assets/Chip.svg";
import chipBorder from "../assets/Chip Border.svg";
import dieAsset from "../assets/Die.svg";
import dieBorder from "../assets/Die Border.svg";
import pageAsset from "../assets/Page.svg";
import pageBorder from "../assets/Page Border.svg";
import planeAsset from "../assets/Plane.svg";
import planeBorder from "../assets/Plane Border.svg";

const hierarchyParts = {
  chip: {
    title: "Chip",
    text: "The NAND flash chip is the memory package found inside a storage device such as an SSD or flash drive. It may contain one or more dies.",
    border: chipBorder,
    line: "M 492 246 L 418 246 L 371 226",
    dot: [492, 246],
    target: [371, 226],
  },
  die: {
    title: "Die",
    text: "A die is a separate piece of silicon inside the chip. Multiple dies can help the storage device perform operations in parallel.",
    border: dieBorder,
    line: "M 948 260 L 1020 199 L 1054 199",
    dot: [948, 260],
    target: [1054, 199],
  },
  planes: {
    title: "Planes",
    text: "Each die is divided into planes. Planes help organize memory and can support parallel operations within the NAND device.",
    border: planeBorder,
    line: "M 500 395 L 435 395 L 416 403",
    dot: [500, 395],
    target: [416, 403],
  },
  blocks: {
    title: "Blocks",
    text: "Inside each plane are blocks, and each block contains multiple pages. A block is important because it is the smallest unit that can be erased in NAND flash memory.",
    border: blockBorder,
    line: "M 898 474 L 976 474 L 1038 454",
    dot: [898, 474],
    target: [1038, 454],
  },
  pages: {
    title: "Pages",
    text: "A page is a smaller group of memory cells. Pages are commonly treated as the unit for reading and writing data.",
    border: pageBorder,
    line: "M 548 554 L 462 594 L 416 594",
    dot: [548, 554],
    target: [416, 594],
  },
  cell: {
    title: "Cell",
    text: "Cells are the lowest level in this simplified hierarchy. They are the actual storage elements where data is physically represented by electrical charge.",
    border: cellBorder,
    line: "M 856 606 L 920 606 L 944 607",
    dot: [856, 606],
    target: [944, 607],
  },
};

const stackLayers = [
  {
    id: "chip",
    asset: chipAsset,
    zIndex: 6,
    placement: { left: "32.2%", top: "20.0%", width: "36.6%" },
    hotspot: { left: "34.0%", top: "21.8%", width: "33.0%", height: "12.4%" },
  },
  {
    id: "die",
    asset: dieAsset,
    zIndex: 5,
    placement: { left: "34.4%", top: "32.2%", width: "32.4%" },
    hotspot: { left: "36.4%", top: "33.6%", width: "28.4%", height: "11.0%" },
  },
  {
    id: "planes",
    asset: planeAsset,
    zIndex: 4,
    placement: { left: "35.5%", top: "43.0%", width: "29.8%" },
    hotspot: { left: "37.6%", top: "44.3%", width: "25.6%", height: "10.2%" },
  },
  {
    id: "blocks",
    asset: blockAsset,
    zIndex: 3,
    placement: { left: "37.6%", top: "53.0%", width: "25.6%" },
    hotspot: { left: "39.4%", top: "54.1%", width: "22.0%", height: "9.4%" },
  },
  {
    id: "pages",
    asset: pageAsset,
    zIndex: 2,
    placement: { left: "39.2%", top: "62.5%", width: "22.6%" },
    hotspot: { left: "41.0%", top: "63.6%", width: "19.0%", height: "8.7%" },
  },
  {
    id: "cell",
    asset: cellAsset,
    zIndex: 1,
    placement: { left: "41.0%", top: "72.0%", width: "18.7%" },
    hotspot: { left: "42.5%", top: "72.9%", width: "15.8%", height: "7.9%" },
  },
];

function assetSrc(asset) {
  return asset.src ?? asset;
}

export default function NandHierarchy() {
  const [selected, setSelected] = useState(null);

  const activeKey = selected;
  const highlightedKey = selected;
  const activePart = activeKey ? hierarchyParts[activeKey] : null;

  function selectPart(key) {
    setSelected((current) => (current === key ? null : key));
  }

  return (
    <section className="component" aria-labelledby="nand-hierarchy-title">
      <img
        className="component__bg nand-hierarchy__background-elements"
        src={assetSrc(backgroundElements)}
        alt=""
        aria-hidden="true"
        decoding="async"
        loading="lazy"
        width="1440"
        height="810"
      />

      <header className="nand-hierarchy__header">
        <h2 id="nand-hierarchy-title">Inside NAND Flash: The Storage Hierarchy</h2>
      </header>

      <div className="nand-hierarchy__stage">
        <div className="nand-hierarchy__stack-art" aria-hidden="true">
          {stackLayers.map((layer) => (
            <img
              key={layer.id}
              className={`nand-hierarchy__asset-layer ${highlightedKey === layer.id ? "is-highlighted" : ""}`}
              src={assetSrc(layer.asset)}
              decoding="async"
              style={{
                left: layer.placement.left,
                top: layer.placement.top,
                width: layer.placement.width,
                zIndex: layer.zIndex,
              }}
              alt=""
            />
          ))}
        </div>

        <svg className="nand-hierarchy__connectors" viewBox="0 0 1440 810" preserveAspectRatio="none" aria-hidden="true">
          {activePart && (
            <g key={activeKey} className="is-active">
              <path d={activePart.line} />
              <circle cx={activePart.dot[0]} cy={activePart.dot[1]} r="7" />
              <circle cx={activePart.target[0]} cy={activePart.target[1]} r="6" />
            </g>
          )}
        </svg>

        <div className="nand-hierarchy__hotspots" aria-label="NAND flash hierarchy layer selectors">
          {stackLayers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              className="nand-hierarchy__hotspot"
              style={{
                left: layer.hotspot.left,
                top: layer.hotspot.top,
                width: layer.hotspot.width,
                height: layer.hotspot.height,
              }}
              onClick={() => selectPart(layer.id)}
              aria-label={`Toggle ${hierarchyParts[layer.id].title} description`}
              aria-pressed={selected === layer.id}
            />
          ))}
        </div>

        {activePart && (
            <button
              key={activeKey}
              type="button"
              className={`nand-hierarchy__tile nand-hierarchy__tile--${activeKey} is-active is-selected`}
              onClick={() => selectPart(activeKey)}
              aria-pressed="true"
            >
              <img className="nand-hierarchy__tile-border" src={assetSrc(activePart.border)} alt="" decoding="async" />
              <span className="nand-hierarchy__tile-title">{activePart.title}</span>
              <span className="nand-hierarchy__tile-body">{activePart.text}</span>
            </button>
        )}
      </div>

      {activePart && (
        <aside className="nand-hierarchy__readout" aria-live="polite">
          <span>Selected layer</span>
          <strong>{activePart.title}</strong>
          <p>{activePart.text}</p>
        </aside>
      )}

      <style suppressHydrationWarning>{`
        .nand-hierarchy__background-elements {
          left: -12%;
          top: -10%;
          width: 142%;
          height: 128%;
        }

        .nand-hierarchy__header {
          position: absolute;
          inset: 36px 24px auto;
          z-index: 6;
          text-align: center;
          pointer-events: none;
        }

        .nand-hierarchy__header h2 {
          margin: 0;
          border: 0;
          color: #ffffff;
          font-family: "Tomorrow", "Noto Sans Variable", sans-serif;
          font-size: clamp(1.5rem, 5cqw, 2.5rem);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1.08;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.88), 0 0 22px rgba(255, 255, 255, 0.62);
        }

        .nand-hierarchy__stage {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
        }

        .nand-hierarchy__stack-art,
        .nand-hierarchy__connectors,
        .nand-hierarchy__hotspots {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .nand-hierarchy__stack-art {
          z-index: 1;
          pointer-events: none;
        }

        .nand-hierarchy__asset-layer {
          position: absolute;
          height: auto;
          pointer-events: none;
          user-select: none;
          transition: opacity 0.12s ease, transform 0.12s ease;
        }

        .nand-hierarchy__asset-layer.is-highlighted {
          transform: translateY(-2px);
        }

        .nand-hierarchy__connectors {
          z-index: 4;
          pointer-events: none;
          overflow: visible;
        }

        .nand-hierarchy__connectors path {
          fill: none;
          stroke: var(--line);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .nand-hierarchy__connectors circle {
          fill: #0b0d22;
          stroke: var(--line);
          stroke-width: 3;
          opacity: 0;
        }

        .nand-hierarchy__connectors g:not(.is-active) {
          opacity: 0;
        }

        .nand-hierarchy__connectors g.is-active circle {
          opacity: 1;
        }

        .nand-hierarchy__hotspots {
          z-index: 7;
        }

        .nand-hierarchy__hotspot {
          position: absolute;
          border: 0;
          border-radius: 6px;
          background: transparent;
          cursor: pointer;
          transform: skewY(-10deg);
        }

        .nand-hierarchy__hotspot:focus-visible {
          outline: 2px solid var(--green);
          outline-offset: 4px;
        }

        .nand-hierarchy__tile {
          position: absolute;
          z-index: 3;
          border: 0;
          padding: 18px 18px 16px;
          color: var(--text);
          background: transparent;
          text-align: left;
          cursor: default;
          font-family: "Space Mono", "Noto Sans Variable", monospace;
          opacity: 0;
          pointer-events: none;
          transform: translateY(8px);
          transition: opacity 0.12s ease 0.18s, transform 0.12s ease 0.18s;
        }

        .nand-hierarchy__tile::before {
          content: "";
          position: absolute;
          inset: 10px 10px 14px;
          z-index: 0;
          background: rgba(7, 18, 38, 0.72);
          clip-path: polygon(4% 12%, 10% 4%, 89% 4%, 96% 14%, 96% 86%, 89% 96%, 12% 96%, 4% 84%);
          pointer-events: none;
        }

        .nand-hierarchy__tile.is-active {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
          filter: none;
        }

        .nand-hierarchy__tile-border {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          opacity: 0.98;
          filter: none;
          pointer-events: none;
          user-select: none;
        }

        .nand-hierarchy__tile-title,
        .nand-hierarchy__tile-body {
          position: relative;
          z-index: 2;
          display: block;
          margin-left: 4%;
        }

        .nand-hierarchy__tile-title {
          margin-bottom: 10px;
          color: #ffffff;
          font-family: "Space Mono", "Noto Sans Variable", monospace;
          font-size: clamp(0.4rem, 2.2cqw, 1.4rem);
          font-weight: 500;
          line-height: 1;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.45);
        }

        .nand-hierarchy__tile-body {
          color: var(--text);
          font-family: "Space Mono", "Noto Sans Variable", monospace;
          font-size: clamp(0.4rem, 1.2cqw, 1rem);
          letter-spacing: 0.5px;
          line-height: 1.12;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .nand-hierarchy__tile.is-active .nand-hierarchy__tile-body {
          opacity: 1;
          transition-delay: 0.22s;
        }

        .nand-hierarchy__tile--chip {
          left: 5.2%;
          top: 15.6%;
          width: 20%;
          min-height: 190px;
          padding: 20px 18px 18px;
        }

        .nand-hierarchy__tile--die {
          right: 5.1%;
          top: 16.0%;
          width: 20.2%;
          min-height: 190px;
          padding: 22px 19px 18px;
        }

        .nand-hierarchy__tile--planes {
          left: 3.0%;
          top: 43.5%;
          width: 25.4%;
          min-height: 155px;
          padding: 17px 20px 16px;
        }

        .nand-hierarchy__tile--blocks {
          right: 4.6%;
          top: 44.9%;
          width: 23.2%;
          min-height: 172px;
          padding: 18px 20px 16px;
        }

        .nand-hierarchy__tile--pages {
          left: 4.2%;
          top: 68.8%;
          width: 24.0%;
          min-height: 145px;
          padding: 17px 21px 30px;
        }

        .nand-hierarchy__tile--cell {
          right: 5.2%;
          top: 72.0%;
          width: 28.6%;
          min-height: 159px;
          padding: 17px 22px 40px;
        }

        .nand-hierarchy__readout {
          display: none;
          margin: 0 18px 18px;
          padding: 14px 16px;
          border: 1px solid rgba(101, 251, 255, 0.58);
          background: rgba(3, 10, 24, 0.78);
          box-shadow: 0 0 18px rgba(101, 251, 255, 0.16);
        }

        .nand-hierarchy__readout span {
          display: block;
          color: var(--muted);
          font-size: 0.72rem;
          text-transform: uppercase;
        }

        .nand-hierarchy__readout strong {
          display: block;
          margin-top: 2px;
          color: #ffffff;
          font-family: "Space Mono", "Noto Sans Variable", monospace;
          font-size: 18.6px;
        }

        .nand-hierarchy__readout p {
          margin: 8px 0 0;
          color: var(--text);
          font-family: "Space Mono", "Noto Sans Variable", monospace;
          font-size: 10.5px;
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .nand-hierarchy {
            aspect-ratio: auto;
            min-height: 720px;
          }

          .nand-hierarchy__header {
            inset: 28px 16px auto;
          }

          .nand-hierarchy__header h2 {
            font-size: 28px;
          }

          .nand-hierarchy__stack-art,
          .nand-hierarchy__hotspots {
            top: 82px;
            height: 360px;
          }

          .nand-hierarchy__connectors {
            display: none;
          }

          .nand-hierarchy__tile {
            width: calc(50% - 28px);
            min-height: 76px;
            padding: 14px 16px;
          }

          .nand-hierarchy__tile--chip,
          .nand-hierarchy__tile--planes,
          .nand-hierarchy__tile--pages {
            left: 18px;
          }

          .nand-hierarchy__tile--die,
          .nand-hierarchy__tile--blocks,
          .nand-hierarchy__tile--cell {
            right: 18px;
          }

          .nand-hierarchy__tile--chip,
          .nand-hierarchy__tile--die {
            top: 452px;
          }

          .nand-hierarchy__tile--planes,
          .nand-hierarchy__tile--blocks {
            top: 546px;
          }

          .nand-hierarchy__tile--pages,
          .nand-hierarchy__tile--cell {
            top: 640px;
          }

          .nand-hierarchy__tile-body {
            display: none;
          }

          .nand-hierarchy__readout {
            display: block;
          }
        }

        @media (max-width: 560px) {
          .nand-hierarchy {
            min-height: 840px;
          }

          .nand-hierarchy__header {
            inset: 26px 14px auto;
          }

          .nand-hierarchy__header h2 {
            font-size: 24px;
          }

          .nand-hierarchy__stack-art,
          .nand-hierarchy__hotspots {
            top: 88px;
            height: 295px;
          }

          .nand-hierarchy__tile {
            left: 18px !important;
            right: 18px !important;
            width: auto;
          }

          .nand-hierarchy__tile--chip {
            top: 410px;
          }

          .nand-hierarchy__tile--die {
            top: 482px;
          }

          .nand-hierarchy__tile--planes {
            top: 554px;
          }

          .nand-hierarchy__tile--blocks {
            top: 626px;
          }

          .nand-hierarchy__tile--pages {
            top: 698px;
          }

          .nand-hierarchy__tile--cell {
            top: 770px;
          }
        }
      `}</style>
    </section>
  );
}