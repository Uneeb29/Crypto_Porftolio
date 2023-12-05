import { Box, Paper, Typography } from "@mui/material";

export default function Timeline() {
  return (
    <Box
      sx={{
        height: "40%",
        width: "100%",
        bgcolor: "transparent",
        perspective: "1000px",
        display: "flex",
        flexDirection: "column",
        mt:5,
        mb:5
      }}
    >
    <Box sx={{ background: 'linear-gradient(90deg, #AF7AEF,#F9A09B,#FBD59A)', color: "transparent", WebkitBackgroundClip: "text" }}>
      <Typography sx={{ fontSize: "32px", fontFamily: "Lato", fontWeight: "bold" }}>Timeline of Project Dev</Typography>
    </Box>
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", height:"90%"}}>
      {[1, 2, 3].map((item) => (
        <Paper
          key={item}
          elevation={2}
          sx={{
            bgcolor: "white",
            position: "relative",
            width: "30%",
            height: "100%",
            transition: "transform 0.8s ease",
            transformStyle: "preserve-3d",
            "&:hover": { transform: "rotateY(180deg)" },
            background:"rgb(6, 5, 29,0.59)",
            boxShadow:"box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius:"16px",
            border: "1px solid rgba(255, 255, 255, 0.18)"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            <div>Front</div>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              transform: "rotateY(180deg)",
            }}
          >
            <div>Back</div>
          </Box>
        </Paper>
      ))}
      </Box>
    </Box>
  );
}
