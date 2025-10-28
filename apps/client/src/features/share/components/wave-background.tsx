import { useMantineColorScheme } from "@mantine/core";
import classes from "./wave-background.module.css";

export default function WaveBackground() {
  const { colorScheme } = useMantineColorScheme();
  const isLight = colorScheme === 'light';

  const waveColors = isLight
    ? {
        wave1: '#e5e5e5',
        wave2: '#d4d4d4',
        wave3: '#c5c5c5',
      }
    : {
        wave1: '#1a1a1a',
        wave2: '#161616',
        wave3: '#111111',
      };

  return (
    <svg
      className={classes.editorial}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0
             58-18 88-18s
             58 18 88 18
             58-18 88-18
             58 18 88 18
             v44h-352z"
        />
      </defs>
      <g className={classes.parallax}>
        <use xlinkHref="#gentle-wave" x="50" y="0" fill={waveColors.wave1} />
        <use xlinkHref="#gentle-wave" x="50" y="3" fill={waveColors.wave2} />
        <use xlinkHref="#gentle-wave" x="50" y="6" fill={waveColors.wave3} />
      </g>
    </svg>
  );
}
