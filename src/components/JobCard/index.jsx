import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

import styles from "./jobCard.module.css";
import CircularProgressWithLabel from "../CircularProgressWithLabel";

function getRandomValue() {
  return Math.floor(Math.random() * 101);
}

const JobCard = ({ data = [] }) => {
  return (
    <>
      {data?.map((jobItem, index) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          key={`${jobItem?.companyName} ${index}`}
          className={styles.jobCardContainer}
        >
          <Card
            style={{
              marginBottom: 16,
            }}
            className={styles.cardItem}
          >
            <div className={styles.dateMatch}>
              <div className={styles.dates}>
                <Typography variant="body2" color="black" className="date">
                  Posted ⏳ 2{jobItem?.daysAgo ?? "1"} days ago
                </Typography>
              </div>
              <CircularProgressWithLabel
                value={getRandomValue()}
                variant="determinate"
                style={{
                  color: "rgb(85, 239, 196)",
                  width: "50px",
                  height: "50px",
                  transform: "rotate(-90deg)",
                }}
              />
            </div>
            <CardContent
              sx={{ justifyContent: "flex-start", textAlign: "left" }}
            >
              <Box
                component={"div"}
                gap={"0.5rem"}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <img src={jobItem?.logoUrl} alt="logo" width={25} height={40} />
                <div className={styles.companyInformation}>
                  <h3>{jobItem?.companyName ?? ""}</h3>
                  <h2>{jobItem?.jobRole ?? ""}</h2>
                  <p className={styles.cardText}>{jobItem?.location ?? ""}</p>
                </div>
              </Box>
              <Typography variant="body2" className={styles.salaryRange}>
                Estimated Salary: {jobItem?.minJdSalary ?? 0}-
                {jobItem?.maxJdSalary ?? "N/A"} ✅
              </Typography>
              <div className={styles.description}>
                <Typography variant="body2">
                  {jobItem?.jobDetailsFromCompany}
                </Typography>
              </div>
              <div className={styles.viewMore}>
                <a href={jobItem?.jdLink}>View Job</a>
              </div>
              <div style={{ marginBottom: 10 }}>
                <Typography
                  variant="div"
                  className={`${styles.infoContainer} ${styles.jobRequirement}`}
                >
                  <h3>Minimum Experience:</h3>
                </Typography>
                <Typography variant="body2">
                  {jobItem?.minExp ?? "0"} years
                </Typography>
              </div>

              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "rgb(85, 239, 196)",
                  color: "rgb(0, 0, 0)",
                  fontWeight: "500",
                  padding: "8px 18px",
                }}
              >
                ⚡ Easy Apply
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginTop: "8px",
                  width: "100%",
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "500",
                  padding: "8px 18px",
                }}
              >
                Unlock referral asks
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default JobCard;
