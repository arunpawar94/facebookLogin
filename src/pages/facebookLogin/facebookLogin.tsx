import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import VideoPreviewController from "./facebookLoginController";
import { withStyles } from "@mui/styles";
import { facebookTextImage, userImage } from "../../assets";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type TextAlign = "center" | "right";
type FlexDirection = "column";
type FlexWrap = "wrap";
type Position = "relative";

class VideoPreview extends VideoPreviewController {
  submitModal = () => {
    const { classes } = this.props;
    return (
      <Modal open={this.state.isModalOpen} className={classes.mainModal}>
        <Box className={classes.modalUpperBox}>
          <Box className={classes.modalInnerBox}>
            <CheckCircleIcon />
            <Typography>Submitted</Typography>
            <CancelIcon
              className={classes.modalCloseIcon}
              onClick={() => {
                this.handleModalClose();
              }}
            />
          </Box>
        </Box>
      </Modal>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.mainHome}>
        <Box className={classes.upperDiv}>
          <Box className={classes.upperLeftBox}>
            <CardMedia
              className={classes.facebookTextImage}
              component="img"
              src={facebookTextImage}
            />
            <Typography className={classes.recentText}>
              Recent logins
            </Typography>
            <Typography className={classes.clickAdd}>
              Click your picture or add an account.
            </Typography>
            <Box className={classes.accountsContainer}>
              <Card
                className={classes.cardContainer}
                onMouseEnter={() => this.mouseEnterFunction()}
                onMouseLeave={() => this.mouseLeaveFunction()}
              >
                <CancelIcon
                  className={
                    this.state.isCardHover
                      ? classes.HoverCancelIcon
                      : classes.cancelIcon
                  }
                />
                <CardMedia
                  className={classes.userImage}
                  component="img"
                  src={userImage}
                />
                <Typography className={classes.userNameTypography}>
                  Arun Pawar
                </Typography>
              </Card>
              <Card className={classes.cardContainer}>
                <Box className={classes.addIconContainer}>
                  <AddCircleIcon className={classes.addIcon} />
                </Box>
                <Typography className={classes.addAccountText}>
                  Add Account
                </Typography>
              </Card>
            </Box>
          </Box>
          <Box className={classes.upperRightBox}>
            <Box className={classes.emailPasswordContainer}>
              <TextField
                type="email"
                name="email"
                placeholder="Email address or phone number"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Typography className={classes.errorMessage}>
                {this.state.emailError}
              </Typography>
              <Box className={classes.passwordFieldContainer}>
                <TextField
                  type={this.state.isVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                {this.state.password.length !== 0 ? (
                  <Box className={classes.visibilityIconContainer}>
                    {this.state.isVisible ? (
                      <VisibilityIcon
                        onClick={() => {
                          this.handlePasswordVisible();
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => {
                          this.handlePasswordVisible();
                        }}
                      />
                    )}
                  </Box>
                ) : null}
              </Box>
              <Typography className={classes.errorMessage}>
                {this.state.passwordError}
              </Typography>
              <Button
                className={classes.loginButton}
                onClick={() => {
                  this.handleSubmit();
                }}
              >
                Log in
              </Button>
              <Typography className={classes.forgetPasswordLink}>
                Forgotten password?
              </Typography>
              <Divider className={classes.dividerClass} />
              <Button className={classes.createButton}>
                Create new account
              </Button>
            </Box>
            <Box className={classes.createPageBox}>
              <Typography className={classes.createPageText}>
                Create a Page
              </Typography>{" "}
              <Typography>for a celebrity, brand or business.</Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.lowerBox}>
          <Box className={classes.lowerInnerBox}>
            <Typography>
              English (UK) हिन्दी मराठी اردو ਪੰਜਾਬੀ বাংলা ગુજરાતી தமிழ் తెలుగు
              മലയാളം ಕನ್ನಡ <AddBoxIcon />
            </Typography>
            <Divider />
            <Typography>
              SignUp Login Messenger Facebook Lite Video Places Games
              Marketplace MetaPay MetaStore MetaQuest Meta AI Instagram Threads
              Fundraisers Services Voting Information Centre Privacy Policy
              Privacy CentreGroupsAboutCreate adCreate
              PageDevelopersCareersCookiesAdChoicesTermsHelpContact uploading
              and non-usersSettingsActivity log
            </Typography>
            <Typography>Meta © 2024</Typography>
          </Box>
        </Box>
        {this.submitModal()}
      </Box>
    );
  }
}

const style = {
  mainHome: {
    "& .MuiTypography-root": {
      fontFamily: "Arial, sans-serif !important",
    },
    "& .MuiButton-root": {
      textTransform: "none",
      fontSize: "19px",
    },
  },
  facebookTextImage: {
    width: "211px !important",
    position: "relative" as Position,
    left: "-20px",
  },
  recentText: {
    fontSize: "36px !important",
    color: "#333",
  },
  upperDiv: {
    background: "#f0f2f5",
    padding: "100px 0",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap" as FlexWrap,
  },
  clickAdd: {
    fontSize: "15px !important",
    color: "#606770",
    paddingBottom: "24px",
  },
  accountsContainer: {
    display: "flex",
    gap: "60px",
  },
  userImage: {
    width: "160px !important",
    borderRadius: "5px 5px 0 0",
  },
  userNameTypography: {
    textAlign: "center" as TextAlign,
    padding: "10px 0",
    width: "100%",
    backgroundColor: "white !important",
    borderRadius: "0 0 5px 5px",
  },
  addIconContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    color: "#1976f2",
  },
  cardContainer: {
    width: "160px",
    display: "flex",
    flexDirection: "column" as FlexDirection,
    alignItems: "center",
    background: "#f5f6f7 !important",
    position: "relative" as Position,
    overflow: "visible !important",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 0 10px 3px #aca9a98a",
    },
  },
  cancelIcon: {
    position: "absolute" as Position,
    left: "2px",
    top: "2px",
    color: "#17161663",
    fontSize: "20px !important",
  },
  HoverCancelIcon: {
    position: "absolute" as Position,
    left: "-8px",
    top: "-8px",
    color: "white",
    fontSize: "32px !important",
  },
  addAccountText: {
    textAlign: "center" as TextAlign,
    padding: "10px 0",
    width: "100%",
    backgroundColor: "white !important",
    color: "#1976f2",
    borderRadius: "0 0 5px 5px",
  },
  addIcon: {
    fontSize: "42px !important",
  },
  upperRightBox: {
    width: "100%",
    maxWidth: "400px",
    padding: "50px",
  },
  emailPasswordContainer: {
    display: "flex",
    flexDirection: "column" as FlexDirection,
    background: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px 3px #aca9a98a",
    gap: "15px",
    alignItems: "center",
    "& .MuiInputBase-input": {
      fontFamily: "sans-serif !important",
    },
    "& .MuiTextField-root": {
      width: "100%",
      height: "50px",
      "& .MuiOutlinedInput-root": {
        height: "50px",
        "& fieldset": {
          border: "1px solid #a9a4a4b5",
          borderRadius: "6px",
        },
        "&:focus-within": {
          "& fieldset": {
            border: "1px solid blue",
            boxShadow: "0px 0px 4px 0px #5b5bf5",
          },
        },
      },
    },
  },
  passwordFieldContainer: {
    width: "100%",
    border: "1px solid #a9a4a4b5",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    "&:focus-within": {
      border: "1px solid blue",
      boxShadow: "0px 0px 4px 0px #5b5bf5",
    },
    "& .MuiTextField-root": {
      width: "100%",
      height: "50px",
      "& .MuiOutlinedInput-root": {
        height: "50px",
        "& fieldset": { border: "none" },
      },
      "&:focus-within": {
        "& fieldset": {
          border: "none !important",
          boxShadow: "none !important",
        },
      },
    },
  },
  visibilityIconContainer: {
    padding: "5px 5px 0 0",
  },
  dividerClass: {
    width: "100%",
  },
  loginButton: {
    width: "100%",
    color: "white !important",
    backgroundColor: "#0866ff !important",
    "&:hover": {
      backgroundColor: "#227af1 !important",
    },
  },
  forgetPasswordLink: {
    color: "#0866ff",
    fontSize: "13px !important",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  createButton: {
    color: "white !important",
    backgroundColor: "#42B72A !important",
    "&:hover": {
      backgroundColor: "#36a420 !important",
    },
  },
  createPageBox: {
    display: "flex",
    padding: "30px 0",
    justifyContent: "center",
    gap: "5px",
    "& .MuiTypography-root": {
      fontSize: "14px",
    },
  },
  createPageText: {
    fontWeight: "700 !important",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  lowerBox: {
    padding: "20px 0",
    background: "white",
    color: "#8a8d91",
    display: "flex",
    justifyContent: "center",
    "& .MuiTypography-root": {
      fontSize: "12px !important",
      wordSpacing: "10px !important",
      verticalAlign: "middle",
    },
  },
  lowerInnerBox: {
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    flexDirection: "column" as FlexDirection,
    gap: "15px",
  },
  mainModal: {
    border: "none",
    width: "100vw",
    height: "100vh",
  },
  modalUpperBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalInnerBox: {
    background: "white",
    width: "400px",
    height: "250px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as FlexDirection,
    color: "green",
    position: "relative" as Position,
    "& .MuiSvgIcon-root": {
      fontSize: "60px"
    },
    "& .MuiTypography-root": {
      fontSize: "30px !important"
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "12px !important",
    width: "100%",
    height: "15px"
  },
  modalCloseIcon: {
    color: "red",
    fontSize: "25px !important",
    position: "absolute" as Position,
    top: "10px",
    right: "10px",
    cursor: "pointer"
  },
};
export default withStyles(style)(VideoPreview);
