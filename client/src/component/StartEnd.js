import React from "react";
import { Link } from "react-router-dom";

const StartEnd = (props) => {
  const btn = {
    display: "block",
    padding: "21px",
    margin: "7px",
    minWidth: "max-content",
    textAlign: "center",
    width: "100x",
    alignSelf: "center",
  };
  const btnstart = {
    display: "block",
    padding: "21px",
    margin: "7px",
    minWidth: "max-content",
    textAlign: "center",
    width: "100x",
    alignSelf: "center",
  };
  const btnend = {
    display: "block",
    padding: "21px",
    margin: "7px",
    minWidth: "max-content",
    textAlign: "center",
    width: "100x",
    alignSelf: "center",
  };
  return (
    <div
      className="container-main"
      style={{ borderTop: "1px solid", marginTop: "0px" }}
    >
      {!props.elStarted ? (
        <>
          {/* edit here to display start election Again button */}
          {!props.elEnded ? (
            <>
              <div
                className="container-item attention"
                style={{ display: "block" }}
              >
                <h2>Do not forget to add candidates.</h2>
                <p>
                  Go to{" "}
                  <Link
                    title="Add a new "
                    to="/addCandidate"
                    style={{
                      color: "black",
                      textDecoration: "underline",
                    }}
                  >
                    add candidates
                  </Link>{" "}
                  page.
                </p>
              </div>
              <div className="container-item">
                <button type="submit" style={{
                    alignItems: "center",
                    appearance: "none",
                    backgroundColor: "#3EB2FD",
                    backgroundImage:
                      "linear-gradient(1deg, #4F58FD, #149BF3 99%)",
                    backgroundSize: "calc(100% + 20px) calc(100% + 20px)",
                    borderRadius: "100px",
                    borderWidth: "0",
                    boxShadow: "none",
                    boxSizing: "border-box",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    display: "inline-flex",
                    fontFamily: "CircularStd, sans-serif",
                    fontSize: "1rem",
                    height: "auto",
                    justifyContent: "center",
                    lineHeight: "1.5",
                    padding: "6px 20px",
                    position: "relative",
                    textAlign: "center",
                    textDecoration: "none",
                    transition: "background-color .2s, background-position .2s",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    touchAction: "manipulation",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                  }}>
                  Start Election {props.elEnded ? "Again" : null}
                </button>
              </div>
            </>
          ) : (
            <div className="container-item">
              <center>
                <p>Re-deploy the contract to start election again.</p>
              </center>
            </div>
          )}
          {props.elEnded ? (
            <div className="container-item">
              <center>
                <p>The election ended.</p>
              </center>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="container-item">
            <center>
              <p>The election started.</p>
            </center>
          </div>
          <div className="container-item">
            <button
              type="button"
              // onClick={this.endElection}
              onClick={props.endElFn}
              style={{
                alignItems: "center",
                appearance: "none",
                backgroundColor: "#3EB2FD",
                backgroundImage:
                  "linear-gradient(1deg, #4F58FD, #149BF3 99%)",
                backgroundSize: "calc(100% + 20px) calc(100% + 20px)",
                borderRadius: "100px",
                borderWidth: "0",
                boxShadow: "none",
                boxSizing: "border-box",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "inline-flex",
                fontFamily: "CircularStd, sans-serif",
                fontSize: "1rem",
                height: "auto",
                justifyContent: "center",
                lineHeight: "1.5",
                padding: "6px 20px",
                position: "relative",
                textAlign: "center",
                textDecoration: "none",
                transition: "background-color .2s, background-position .2s",
                userSelect: "none",
                WebkitUserSelect: "none",
                touchAction: "manipulation",
                verticalAlign: "top",
                whiteSpace: "nowrap",
              }}
            >
              End
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StartEnd;
