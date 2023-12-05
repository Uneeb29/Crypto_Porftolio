import { Box, Container, Typography } from "@mui/material";

export default function Homepage() {
    return (
        <Box sx={{ height:"100vh" ,width: "100%", display: "flex", flexDirection: "column", alignItems: "center", mt: 5}}>
            {/* <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ fontSize: "55px", color: "white", fontFamily: "Lato", fontWeight: "bold" }}>Name - The Leading</Typography>
                <Box sx={{ background: 'linear-gradient(90deg, #AF7AEF,#F9A09B,#FBD59A)', color: "transparent", WebkitBackgroundClip: "text" }}>
                    <Typography sx={{ fontSize: "55px", fontFamily: "Lato", fontWeight: "bold" }}>Crypto Market Making Bot</Typography>
                </Box>
            </Box> */}
            <Box sx={{width:"100%", height:"75%", display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
                <Box sx={{width:"100%", height:"50%", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
                    <Box sx={{width:"15%", height:"10%", bgcolor:"grey", borderRadius:"16px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Typography sx={{color:"white", fontSize:"14px"}}>Powered by Top Tech</Typography>
                    </Box>
                    <Typography sx={{fontSize:"55px", color:"white"}}>Build any cross-chain App in</Typography>
                        <Box sx={{fontSize:"55px",background: 'linear-gradient(to right, #D4993F 0, #D4993F 25%,#D69673 25%, #D69673 60%,#D38EA1 60%, #D38EA1 100%)', color: "transparent", WebkitBackgroundClip: "text"}}>less than a week</Box>
                </Box>
                <img src="idk.png" alt="Group-1" border="0" style={{width:"50%", height:"100%"}}/>
            </Box>
        </Box>
    );
}
