
interface TypeProps {
  behindHigh?: string;
  centerHigh?: string;
  frontHigh?: string;
  color?: string;
}


const WavesUi = (props: TypeProps) => {
    const {
      behindHigh = "h-[200px]",
      centerHigh = "h-[150px]",
      frontHigh = "h-[100px]",
      color= "white"
    } = props;

    return (
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className={`relative block w-full ${behindHigh}`}
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
            fill={color}
            fillOpacity="0.3"
          />
        </svg>

        <svg
          className={`absolute bottom-0 left-0 block w-full ${centerHigh}`}
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C240,30 480,100 720,65 C960,30 1200,100 1440,55 L1440,100 L0,100 Z"
            fill={color}
            fillOpacity="0.7"
          />
        </svg>

        <svg
          className={`absolute bottom-0 left-0 block w-full ${frontHigh}`}
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,65 C240,100 480,45 720,70 C960,95 1200,35 1440,65 L1440,100 L0,100 Z"
            fill={color}
          />
        </svg>
      </div>
    )
}

export default WavesUi;