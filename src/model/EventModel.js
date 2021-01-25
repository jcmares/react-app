class EventModel {
  id;

  header;

  place;

  dateBegin;

  constructor(id, header, place, dateBegin) {
    this.id = id;
    this.header = header;
    this.place = place;
    this.dateBegin = dateBegin;
  }
}

export default EventModel;
