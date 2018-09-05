import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const validateAsync = (values) =>
  sleep(2000).then(() => {
    // simulate server latency
    if (['Mateusz', 'Dawid', 'Michał'].includes(values.firstName)) {
      throw new SubmissionError({
        firstName: 'No way!',
        _error: 'No way!'
      })
    } else {
      console.log(values);
    }
  });
