import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(2000).then(() => {
    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.secondName)) {
      throw new SubmissionError({
        secondName: 'No way!',
        _error: 'Login failed!'
      })
    } else {
      console.log(values);
    }
  })
}

export default submit;
