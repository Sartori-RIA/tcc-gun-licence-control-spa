import * as moment from 'moment';

export class DateConverter {
  static convertDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }
}
