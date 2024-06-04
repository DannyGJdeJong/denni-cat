import { Box, ThemeProvider, Typography, createTheme, keyframes } from "@mui/material";
import React from "react";

const createNumberArray = (startValue: number, endValue: number) => {
  if (startValue > endValue) {
    return [...Array(startValue + 1).keys()].slice(endValue);
  }

  return [...Array(endValue + 1).keys()].slice(startValue);
};

export const NumberTicker = ({
  startValue,
  endValue,
  duration = 1,
  textSize = "12rem",
}: {
  startValue: number;
  endValue: number;
  duration?: number;
  textSize?: string;
}) => {
  const [animationDone, setAnimationDone] = React.useState(false);

  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: '"Sono", monospace',
        fontOpticalSizing: "auto",
        fontWeight: 800,
        fontStyle: "normal",
        fontVariationSettings: '"MONO" 1',
        fontSize: textSize,
        fontFeatureSettings: "'ss05'",
        color: "white",
        lineHeight: 1,
      },
    },
  });

  React.useEffect(() => {
    setAnimationDone(false);

    const timeout = setTimeout(() => {
      setAnimationDone(true);
    }, (duration + 0.5) * 1000);

    return () => clearTimeout(timeout);
  }, [startValue, endValue, duration]);

  const increaseAnimation = keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc(-100% + ${textSize}));
    }
  `;

  const decreaseAnimation = keyframes`
    0% {
      transform: translateY(calc(-100% + ${textSize}));
    }
    100% {
      transform: translateY(0);
    }
  `;

  const startValueArray = Array.from(String(startValue));
  const endValueArray = Array.from(String(endValue));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          lineHeight: 1,
          overflow: "hidden",
          position: "relative",
          height: `${textSize}`,
        }}
      >
        {endValueArray.map((value, index) => {
          const numFrom = parseInt(startValueArray[index]) || 0;
          const numTo = parseInt(value) || 0;

          return (
            <Box key={index}>
              {animationDone ? (
                <Box>
                  <Box>
                    <Typography variant="h1">{numTo}</Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    transform: numFrom > numTo ? `translateY(calc(-100% + ${textSize}))` : "",
                    animation: `${numFrom > numTo ? decreaseAnimation : increaseAnimation} ${duration}s ease-in-out forwards`,
                  }}
                >
                  {createNumberArray(numFrom, numTo).map((number, index) => {
                    return (
                      <Box key={index}>
                        <Typography variant="h1">{number}</Typography>
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </ThemeProvider>
  );
};
