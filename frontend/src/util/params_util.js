export const getQueryString = (type, userId) => {
  let params = new URLSearchParams();
  let priorities = ["Low", "Medium", "High", "CATastrophic"];
  let statuses = ["No Progress", "Planned", "In Progress", "Blocked"];
  priorities.forEach((pri) => params.append("priority", pri));
  statuses.forEach((status) => params.append("status", status));
  params.set(type, userId);
  if (type === "subscribed") {
    params.set(`${type}Inclusion`, "all");
  } else {
    params.set(`${type}Inclusion`, "is");
  }
  return params.toString();
};
