import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(2000).then(() => {
    // simulate server latency
    if (['Mateusz', 'Dawid', 'Michał'].includes(values.firstName)) {
      throw new SubmissionError({
        secondName: 'No way!',
        _error: 'No way!'
      })
    } else {
      console.log(values);
    }
  })
}

export default submit;
