import React from "react";

const PackageCard = ({ title, description, highlights }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>

      {highlights && highlights.length > 0 && (
        <>
          <h3 style={styles.subtitle}>Highlights:</h3>
          <ul style={styles.list}>
            {highlights.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "0px",
    maxWidth: "700px",
    margin: "auto",
    color: "#111",
    fontFamily: "poppins",
  },
  title: {
    marginBottom: "12px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#3B3B3B"
  },
  subtitle: {
    marginTop: "16px",
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#3B3B3B"
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#404040"
  },
  list: {
    paddingLeft: "18px",
    lineHeight: "1.8",
    color: "#404040"
  },
};

export default PackageCard;
