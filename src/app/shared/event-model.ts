export class EventModel {
  id: string;
  name: string;
  date: string; // na ezt azert prodban ezt szebben kene :)
  pictureURL: string;
  description: string;
  tickets: { [key: string]: string };

  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
