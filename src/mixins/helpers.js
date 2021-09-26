export const formatNumber = {
  filters: {
    formatNumber: (value) => new Intl.NumberFormat("en").format(value),
  },
};
