
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",

  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };


  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
};

const formatTime = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", optionsTime);
    if (formatted === "Invalid Time") {
        return "";
    }
    return formatted;
};


export {
	formatDate,
	formatTime
}