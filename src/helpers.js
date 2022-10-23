export const getDate = function () {
  const time = new Date().getHours();

  if (time >= 6 && time < 12) {
    return "morning";
  } else if (time >= 12 && time < 17) {
    return "afternoon";
  } else if (time >= 17 && time < 21) {
    return "evening";
  } else {
    return "night";
  }
};
 