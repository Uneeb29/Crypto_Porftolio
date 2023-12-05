import { Box, Container, Typography, Button } from "@mui/material";

export default function Appbar() {
    return (
        <Box sx={{height:"10vh", display:"flex", flexDirection:"column", width:"100vw", bgcolor:"#111111"}}>
            <Box sx={{
                width: "100vw",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            <Box sx={{display:"flex", flexDirection:"row"}}>
                <Typography sx={{ color: "#D09D4E", fontSize:"20px", ml:4 }}>Top</Typography>
                <Typography sx={{ color: "white", fontSize:"20px", ml:0.5, fontWeight:700 }}>Tech</Typography>
            </Box>
                <Box sx={{width:"15%", borderRadius:"25px", display:"flex", flexDirection:"row", justifyContent:"space-around", border:"1px solid grey", p:1}}>
                    <Typography sx={{ color: "white", fontSize:"14px" }}>Home</Typography>
                    <Typography sx={{ color: "white", fontSize:"14px" }}>About</Typography>
                    <Typography sx={{ color: "white", fontSize:"14px" }}>Projects</Typography>
                </Box>
                <Button sx={{width:"8%", height:"50%", borderRadius:"20px", mr:4, background:'linear-gradient(90deg, #D4993F,#D69673,#D38EA1)'}}><Typography sx={{color:"black", textTransform:"capitalize", fontSize:"16px", fontWeight:500}}>Get Started</Typography></Button>
            </Box>
            <Box sx={{width:"100%", height:"1px", background: 'linear-gradient(to right, #111111 0, #111111 8%, grey 15%, grey 85%, #111111 92%, #111111 100%)'}}></Box>
        </Box>
    )
}