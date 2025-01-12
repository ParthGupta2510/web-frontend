import { Typography, Container, Box, Button } from "@material-ui/core";
import React from "react";

import Layout from "../../components/Layout";
import Styles from "./elections.module.css";
import LaunchIcon from "@material-ui/icons/Launch";
import { Link } from "react-router-dom";
export default function Elections() {
  document.title = "Elections 2023 | TSG";
  return (
    <Layout>
      <Container className={Styles.electionsContainer}>
        <Typography
          variant="h4"
          style={{
            color: "#f1c40f",
            fontFamily: "Lato",
            fontWeight: "600",
          }}
          align="center"
        >
          {" "}
          Gymkhana Elections 2023
        </Typography>
        <Box className={Styles.electionBody}>
          <Typography variant="body2">
            Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carries
            out election to select office bearers from students for smooth
            conduction of student related activities.
          </Typography>
          <Typography variant="body2">
            The nomination, approval and
            voting will be done using digital platform developed by ERP, IIT
            Kharagpur. The date for Gymkhana Election is as follows:
          </Typography>
          <Typography variant="body2">
            Date of Election: 4th April 2023 (Tuesday) <br />
            Time of Election: 9:00 am to 6:00 pm <br />
            Venue: CIC <br />
            Platform: ERP
          </Typography>
        </Box>
        <Box className={Styles.electionBody}>
          <Typography variant="h5">Notices:</Typography>
          <Box className={Styles.notices}>
          <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Elections 2023 Results
              </div>
              <Button>
                <a
                  href="/data/media/files/Results_2023.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Result <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                View Votes of Candidates
              </div>
              <Button>
                <a
                  href="/data/media/files/Votes_2023.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Votes <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Button>
              <Link to="/elections/candidates">Candidates And Proposals</Link>
            </Button>
            <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                SOAPBOX SCHEDULE 2023
              </div>
              <Button>
                <a
                  href="/data/media/files/SOAPBOX_Schedule_22-23.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Schedule <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Final List of Candidates for TSG Election (2023-24)
              </div>
              <Button>
                <a
                  href="/data/media/files/Final_List_of_Candidates_for_Election_of_Office_Bearers_of_TSG.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View List &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                The Venue for the TSG Election (2023 - 2024) will be Computer & Informatics Center (CIC), Takshashila, Srinivasa Ramanujan Complex, IIT Kharagpur
              </div>
            </Typography>
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                <strong className="text-danger">The Deadline to get approval from the faculty members for the Gymkhana Elections for the Academic Year (2023 - 2024) has been extended to 24th March 2023, 11:59 PM</strong>
              </div>
            </Typography> */}
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Provisional List of Candidates for TSG Election (2023-24)
              </div>
              <Button>
                <a
                  href="/data/media/files/Provisional_List_of_Candidates_for_Election_of_Office_Bearers_of_Technology_Students.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View List &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography> */}
            <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                TSG Election (2023-24) Notification
              </div>
              <Button>
                <a
                  href="/data/media/files/Election_2023-24.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Schedule and Rules &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography>
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                The date for submission of Revised Proposals the posts of Vice
                President and General Secretaries is extended upto 10:00 am on
                March 29, 2022.
              </div>
              <Button>
                <a
                  href="/data/media/files/Extension-Final-Proposal_21-22.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Notice &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography> */}
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                SOAP has been scheduled on 1st and 2nd of April 2022.
              </div>
              <Button>
                <a
                  href="/data/media/files/SOAP_Schedule_21-22.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Notice &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography> */}
            
          </Box>
        </Box>
        <Box className={Styles.electionBody}>
          <Typography variant="h5">Relevant Documents:</Typography>
          <Box className={Styles.buttonGroup}>
            {" "}
            <Button>
              <a
                href="/data/media/files/Results_2023.pdf"
                alt="result"
                target="_blank"
              >
                Result
              </a>
            </Button>
            <Button>
              {" "}
              <a
                href="/data/media/files/Election-Rules.pdf"
                alt="notification"
                target="_blank"
              >
                Rules
              </a>
            </Button>
            <Button>
              {" "}
              <a
                href="/data/media/files/Final_List_of_Candidates_for_Election_of_Office_Bearers_of_TSG.pdf"
                alt="notification"
                target="_blank"
              >
                Final 
                List of Nominations
              </a>
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
