const minInHour = 60;

function two(value) {
  return String(value).length < 2 ? `0${value}` : value;
}

export class Duration {
  h;
  m;

  constructor({ h, m }) {
    this.h = Number(h);
    this.m = Number(m);
  }

  toString() {
    return `${two(this.h)}h${two(this.m)}`;
  }

  valueOf() {
    return this.h * minInHour + this.m;
  }
}

export class Deal {
  departure;
  arrival;
  duration;
  cost;
  discount;
  reference;
  transport;

  get hasDiscount() {
    return this.discount > 0;
  }

  get discountCost() {
    return this.cost * (1 - this.discount / 100);
  }

  constructor({
    transport,
    departure,
    arrival,
    duration,
    cost,
    discount,
    reference
  }) {
    this.transport = transport;
    this.departure = departure;
    this.arrival = arrival;
    this.cost = cost;
    this.discount = discount;
    this.reference = reference;
    this.duration = new Duration(duration);
  }
}
