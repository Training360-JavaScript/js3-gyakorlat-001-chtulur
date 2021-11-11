const HU = {
  date(sth) {
    return new Intl.DateTimeFormat("hu-HU").format(sth);
  },
  curreny(amount) {
    return new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
    }).format(amount);
  },
  list(arr) {
    let lastGuy = arr.pop();
    return `${arr.join(", ")} és ${lastGuy}`;
  },
};

export default HU;
