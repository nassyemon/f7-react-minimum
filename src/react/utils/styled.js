export const withTransition = (properties) => ({ theme }) => `
transition: ${theme.transitions.create(properties, {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})};
`