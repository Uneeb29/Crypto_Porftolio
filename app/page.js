"use client";
import { Box, CssBaseline } from "@mui/material"
import Appbar from "@/Components/Appbar";
import Homepage from "@/Components/Homepage";
import Timeline from "@/Components/Timeline";


export default function Page() {
  return(
    <CssBaseline>
          <Box sx={{width:"100%", height:"100vh", bgcolor:"#111111" }}> {/*position:"relative", , background:"url('bg1.jpg')", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"100%"*/}
          {/* <svg viewBox="0 0 800 400"
     style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "50%",
      }}>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad">
            <stop stopColor="hsl(37, 99%, 67%)" stopOpacity="1" offset="0%" />
            <stop stopColor="hsl(316, 73%, 52%)" stopOpacity="1" offset="100%" />
        </linearGradient>
        <filter id="nnneon-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="30 34" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur" />
        </filter>
        <filter id="nnneon-filter2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="14 17" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur" />
        </filter>
    </defs>
    <g strokeWidth="44" stroke="url(#nnneon-grad)" fill="none">
        <path d="M 141,400 A 259.5,259.5 0 0 1 659,400" filter="url(#nnneon-filter)" />
        <path d="M 153,400 A 259.5,259.5 0 0 1 647,400" filter="url(#nnneon-filter2)" opacity="0.25" />
        <path d="M 129,400 A 259.5,259.5 0 0 1 671,400" filter="url(#nnneon-filter2)" opacity="0.25" />
        <path d="M 141,400 A 259.5,259.5 0 0 1 659,400" />
    </g>
</svg> */}

            <Appbar/>
            <Homepage/>
            {/* <Timeline/> */}
          </Box>
    </CssBaseline>

  )
}