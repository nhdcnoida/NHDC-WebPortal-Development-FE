"use client";
import React from "react";
import Link from "next/link";

const ScheduleTable = ({ title, titleHi, rows, showDate = false, columns = [], columnsHi = [], lang = "en" }) => {
  const allColumns =
    showDate
      ? lang === "hi"
        ? ["क्र. सं.", "शीर्षक", "अपलोड करने की तिथि", "कार्यवाही"]
        : ["S. No.", "Title", "Date of Uploading", "Action"]
      : lang === "hi"
        ? columnsHi.length > 0
          ? columnsHi
          : ["क्र. सं.", "शीर्षक", "कार्यवाही"]
        : columns.length > 0
          ? columns
          : ["S. No.", "Title", "Action"];

  const getActionLabel = (type) => {
    if (lang === "hi") {
      switch (type) {
        case "view":
          return "देखें";
        case "apply":
          return "आवेदन करने के लिए यहाँ क्लिक करें";
        case "viewAdvertisement":
          return "विज्ञापन देखें";
        default:
          return "देखें";
      }
    }
    switch (type) {
      case "view":
        return "View";
      case "apply":
        return "Click here to Apply";
      case "viewAdvertisement":
        return "View Advertisement";
      default:
        return "View";
    }
  };

  const renderActions = (row) => {
    const actions = [];

    if (row.actions && row.actions.length > 0) {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {row.actions.map((action, index) => (
            <Link
              key={index}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "4px 8px",
                color: "#246AD2",
                textDecoration: "none",
                fontSize: "14px",
                display: "block",
                textAlign: "center",
              }}
            >
              {action.label || getActionLabel(action.type)}
            </Link>
          ))}
        </div>
      );
    }

    if (row.link) {
      actions.push(
        <Link
          key="view"
          href={row.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "4px 8px",
            color: "#246AD2",
            textDecoration: "none",
            fontSize: "14px",
            display: "block",
          }}
        >
          {getActionLabel("view")}
        </Link>
      );
    }

    if (row.applyLink) {
      actions.push(
        <Link
          key="apply"
          href={row.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "4px 8px",
            color: "#2563eb",
            textDecoration: "none",
            fontSize: "14px",
            display: "block",
          }}
        >
          {getActionLabel("apply")}
        </Link>
      );
    }

    return <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>{actions}</div>;
  };

  const renderNewIndicator = (row) => {
    if (row.isNew || row.showNew) {
      return (
        <span
          style={{
            display: "inline-block",
            background:
              "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
            backgroundSize: "300% 300%",
            animation: "gradient 2s ease infinite",
            color: "white",
            fontSize: "10px",
            fontWeight: "bold",
            padding: "2px 6px",
            borderRadius: "3px",
            marginLeft: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {lang === "hi" ? "नया" : "NEW"}
        </span>
      );
    }
    return null;
  };

  const renderTitleWithLinks = (row) => {
    return (
      <div>
        <span>{lang === "hi" ? row.titleHi || row.title : row.title}  {renderNewIndicator(row)}</span>
        {row.links && row.links.length > 0 && (
          <div style={{ marginTop: "8px" }}>
            {row.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#246AD2",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginRight: "12px",
                  display: "inline-block",
                }}
              >
                {link.text} 
              </Link>
            ))}
          </div>
        )}
       
      </div>
    );
  };

  return (
    <div>
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <h2
        style={{
          fontSize: "2rem",
          margin: "2rem 0 1rem",
          color: "#62402A",
        }}
      >
        {lang === "hi" ? titleHi || title : title}
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "600px",
            border: "1px solid #ccc",
          }}
        >
          <thead>
            <tr>
              {allColumns.map((col, i) => (
                <th
                  key={i}
                  style={{
                    border: "1px solid #ccc",
                    padding: "12px",
                    background: "#F7D7D8",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "white" }}>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "12px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {row.sno}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "12px" }}>
                  {renderTitleWithLinks(row)}
                </td>
                {showDate && (
                  <td
                    style={{
                      border: "1px solid #ccc",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    {row.date}
                  </td>
                )}
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  {renderActions(row)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;