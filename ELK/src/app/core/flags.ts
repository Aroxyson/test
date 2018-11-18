import {dateSortOrder} from './dateSortOrder';

export class Flags {
  request = false;
  approval = false;
  revision = false;
  nameSort = false;
  dateSortOrder: dateSortOrder = dateSortOrder.disabled;
  dateSortForced = false;
  dateFilter = {
    start: Date,
    end: Date
  };
  importance = false;
}
