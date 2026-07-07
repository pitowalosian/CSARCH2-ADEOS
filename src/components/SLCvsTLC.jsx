import background from "../assets/SLCvsTLCbackground.svg";
import slcCell from "../assets/SLCcell.svg";
import tlcCell from "../assets/TLCcell.svg";
import slcBorder from "../assets/SLCborder.svg";
import tlcBorder from "../assets/TLCborder.svg";
import tlcArrow from "../assets/TLCarrow.svg";

function assetSrc(asset) {
  return asset.src ?? asset;
}

export default function SLCvsTLC() {
  const slcCellOffsets = [-2.2, 2.2];
  const tlcCellOffsets = [-8.4, -6, -3.6, -1.2, 1.2, 3.6, 6, 8.4];

  return (
    <>
      <section className="component slc-tlc" aria-labelledby="slc-tlc-title">
        <img
          className="slc-tlc__layer slc-tlc__background"
          src={assetSrc(background)}
          alt=""
        />

        <img
          className="slc-tlc__layer slc-tlc__border slc-tlc__border--slc"
          src={assetSrc(slcBorder)}
          alt=""
        />
        <img
          className="slc-tlc__layer slc-tlc__border slc-tlc__border--tlc"
          src={assetSrc(tlcBorder)}
          alt=""
        />

        {slcCellOffsets.map((offset, index) => (
          <img
            key={`slc-cell-${index}`}
            className="slc-tlc__layer slc-tlc__cell slc-tlc__cell--slc"
            src={assetSrc(slcCell)}
            alt=""
            style={{ "--offset": `${offset}%` }}
          />
        ))}

        {tlcCellOffsets.map((offset, index) => (
          <img
            key={`tlc-cell-${index}`}
            className="slc-tlc__layer slc-tlc__cell slc-tlc__cell--tlc"
            src={assetSrc(tlcCell)}
            alt=""
            style={{ "--offset": `${offset}%` }}
          />
        ))}

        <img
          className="slc-tlc__layer slc-tlc__arrow-layer"
          src={assetSrc(tlcArrow)}
          alt=""
        />

        <h2 id="slc-tlc-title" className="slc-tlc__title">
          SLC vs TLC
        </h2>

        <h3 className="slc-tlc__heading slc-tlc__heading--slc">
          Single-Level Cell
        </h3>

        <h3 className="slc-tlc__heading slc-tlc__heading--tlc">
          Triple-Level Cell
        </h3>

        <div className="slc-tlc__binary slc-tlc__binary--slc">
          <span>1</span>
          <span>0</span>
        </div>

        <div className="slc-tlc__binary slc-tlc__binary--tlc">
          <span>111</span>
          <span>000</span>
        </div>

        <div className="slc-tlc__details slc-tlc__details--slc">
          <strong>States: 2</strong>
          <p>
            1 bit per cell<br />
            Fast read / write<br />
            High endurance<br />
            Lower capacity<br />
            Higher cost
          </p>
        </div>

        <div className="slc-tlc__details slc-tlc__details--tlc">
          <strong>States: 8</strong>
          <p>
            3 bits per cell<br />
            Slower read / write<br />
            Lower endurance<br />
            Higher capacity<br />
            Lower cost per GB
          </p>
        </div>
      </section>

      <style>{`
        .slc-tlc {
          position: relative;
          border: 1px solid #8a4dff;
          box-shadow:
            0 0 24px rgba(138, 77, 255, 0.35),
            inset 0 0 38px rgba(101, 251, 255, 0.08);
        }

        .slc-tlc__layer {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slc-tlc__background {
          z-index: 1;
        }

        .slc-tlc__border {
          z-index: 2;
        }

        .slc-tlc__cell {
          z-index: 3;
        }

        .slc-tlc__arrow-layer {
          z-index: 4;
          transform: translateY(-0.3%);
        }

        .slc-tlc__border--slc {
          transform: translateY(10%);
        }

        .slc-tlc__border--tlc {
          transform: translateY(0);
        }

        .slc-tlc__title,
        .slc-tlc__heading,
        .slc-tlc__binary,
        .slc-tlc__details {
          position: absolute;
          z-index: 5;
          color: #ffffff;
          font-family: "Space Mono", "Noto Sans Variable", monospace;
          font-size: 46px;
        }

        .slc-tlc__title {
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          font-family: "Space Mono", monospace;
          font-size: 46px;
          text-align: center;
          text-shadow:
            0 0 6px rgba(255, 255, 255, 0.95),
            0 0 18px rgba(101, 251, 255, 0.45);
        }

        .slc-tlc__heading,
        .slc-tlc__binary,
        .slc-tlc__details,
        .slc-tlc__details p,

        .slc-tlc__heading {
          margin: 0;
          font-size: 1.55rem;
          letter-spacing: 0.03em;
          text-align: center;
        }

        .slc-tlc__heading--slc {
          top: 15%;
          left: -7%;
          width: 50%;
        }

        .slc-tlc__heading--tlc {
          top: 15%;
          right: -7%;
          width: 50%;
        }

        .slc-tlc__binary {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4.8rem;
          font-size: 1.65rem;
          line-height: 1;
          text-align: center;
        }

        .slc-tlc__binary--slc {
          top: 43%;
          left: 35%;
          gap: 0.85rem;
        }

        .slc-tlc__binary--tlc {
          top: 33%;
          right: 16%;
          gap: 5.5rem;
        }

        .slc-tlc__details {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .slc-tlc__details p {
          margin: 0;
          color: #ffffff;
          font-family: "Space Mono", monospace;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.18;
          text-align: center;
        }

        .slc-tlc__details--slc {
          left: 9%;
          bottom: 14%;
          width: 38%;
        }

        .slc-tlc__details--tlc {
          right: 9%;
          bottom: 14%;
          width: 39%;
        }

        @media (max-width: 760px) {
          .slc-tlc {
            min-height: 420px;
          }

          .slc-tlc__title {
            top: 8%;
            font-size: clamp(2rem, 6vw, 3rem);
          }

          .slc-tlc__heading {
            font-size: clamp(0.7rem, 3vw, 1rem);
          }

          .slc-tlc__binary {
            font-size: clamp(0.7rem, 3vw, 1rem);
          }

          .slc-tlc__details p {
            font-size: clamp(0.48rem, 2.1vw, 0.75rem);
          }
        }
      `}</style>
    </>
  );
}