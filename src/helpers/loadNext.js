import ksa from 'ksana-simple-api';
import {DB_NAME} from '../constants/AppConstants';
import {isCrashStr} from '.';

export default function loadNext(options) {

  return new Promise((resolve, reject) => {

    options = Object.assign({db: DB_NAME}, options);

    if (isCrashStr(options.q)) {
      options.q = '';
    }

      console.log('start ksa next');

    ksa.next(options, (err, rows) => {
      if (err) {
        reject(err);
          console.log('loadNext reject');
      }
      else {
        resolve(rows);
          console.log('loadNext resolve', rows);
      }
    });
  });
}
