const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const validateAsync = (values) => {
  return sleep(2000).then(() => {
    let errors = {};
    if (['Mateusz', 'Dawid', 'Michał'].includes(values.firstName)) {
      errors.firstName = 'Nice try';
    }

    if (Object.keys(errors).length) {
      throw errors;
    }
  });
};
