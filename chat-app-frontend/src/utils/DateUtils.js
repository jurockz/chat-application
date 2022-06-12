const MINUTE_IN_MILLISECONDS = 60 * 1000;
const HOUR_IN_MILLISECONDS = 60 * MINUTE_IN_MILLISECONDS;
const DAY_IN_MILLISECONDS = 24 * HOUR_IN_MILLISECONDS;

export const compareLongerThanOneHour = (t1, t2) => {
  return Math.abs(t1 - t2) > HOUR_IN_MILLISECONDS;
};

const getTime = (t) => {
  const date = new Date(t);
  return date.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getMessageBubbleDate = (timestamp) => {
  const date = new Date(timestamp);
  if (getDayNameShort(timestamp) === "Heute")
    return getDayNameShort(timestamp) + ", " + getTime(timestamp);
  return (
    getDayNameShort(timestamp) +
    " " +
    date.getDate() +
    " " +
    getMonthName(timestamp) +
    ", " +
    getTime(timestamp)
  );
};

export const getMessageDate = (timestamp) => {
  const lastMessageDate = new Date(timestamp);
  const currentDate = new Date();
  const showTime =
    currentDate.getFullYear() === lastMessageDate.getFullYear() &&
    currentDate.getMonth() === lastMessageDate.getMonth() &&
    currentDate.getDate() === lastMessageDate.getDate();
  const showDay = currentDate.getTime() - 6 * DAY_IN_MILLISECONDS < timestamp;
  if (showTime)
    return lastMessageDate.toLocaleString("default", {
      hour: "2-digit",
      minute: "2-digit",
    });
  if (showDay) {
    return getDayName(timestamp);
  }
  return (
    lastMessageDate.getDate() +
    "." +
    lastMessageDate.getMonth() +
    "." +
    lastMessageDate.getFullYear()
  );
};

const getDayName = (timestamp) => {
  const date = new Date(timestamp);
  const DateNow = new Date();
  if (
    date.getFullYear() === DateNow.getFullYear() &&
    date.getMonth() === DateNow.getMonth() &&
    date.getDate() === DateNow.getDate()
  )
    return "Heute";
  switch (date.getDay()) {
    case 0:
      return "Sonntag";
    case 1:
      return "Montag";
    case 2:
      return "Dienstag";
    case 3:
      return "Mittwoch";
    case 4:
      return "Donnerstag";
    case 5:
      return "Freitag";
    case 6:
      return "Samstag";
    default:
      return "...";
  }
};

const getDayNameShort = (timestamp) => {
  const date = new Date(timestamp);
  const DateNow = new Date();
  if (
    date.getFullYear() === DateNow.getFullYear() &&
    date.getMonth() === DateNow.getMonth() &&
    date.getDate() === DateNow.getDate()
  )
    return "Heute";
  switch (date.getDay()) {
    case 0:
      return "So.";
    case 1:
      return "Mo.";
    case 2:
      return "Di.";
    case 3:
      return "Mi.";
    case 4:
      return "Do.";
    case 5:
      return "Fr.";
    case 6:
      return "Sa.";
    default:
      return "...";
  }
};

const getMonthName = (timestamp) => {
  const date = new Date(timestamp);
  switch (date.getMonth()) {
    case 0:
      return "Januar";
    case 1:
      return "Februar";
    case 2:
      return "März";
    case 3:
      return "April";
    case 4:
      return "Mai";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Dezember";
    default:
      return "...";
  }
};
