const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals")
      .then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB, onCLS, onINP, onLCP }) => {
          console.log("masukkkkk", onCLS(onPerfEntry));
          // getCLS(onPerfEntry);
          // getFID(onPerfEntry);
          // getFCP(onPerfEntry);
          // getLCP(onPerfEntry);
          // getTTFB(onPerfEntry);
        }
      )
      .catch((error) => {
        console.log("jjjjjjjjjS", error);
      });
  }
};

export default reportWebVitals;
