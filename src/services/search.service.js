import "babel-polyfill";
import { citiesService } from "./cities.service";
import { DealsService } from "./deals.service";
import { Deal } from "./deal";

export class SearchParams {
  departure;
  arrival;
  sortBy;
}

const nodeDefaults = { isOut: false, minDistance: Infinity, cameBy: null };

class Node {
  constructor(name) {
    Object.assign(this, nodeDefaults, { name });
  }
}

class Edge {
  isUsed = false;

  constructor(props) {
    Object.assign(this, props);
  }

  get distance() {
    return this.weight + this.from.minDistance;
  }
}

function getNodeEdges(node, allEdges) {
  return allEdges.filter(edge => edge.from === node && !edge.isUsed);
}

function getNearestNode(nodes) {
  if (nodes.length < 2) {
    return nodes[0];
  }
  return nodes.reduce((n1, n2) => (n1.minDistance < n2.minDistance ? n1 : n2));
}

function getMinDistanceNode(nodes) {
  const activeNodes = nodes.filter(n => !n.isOut);
  return getNearestNode(activeNodes);
}

export class SearchService {
  nodes;
  edges;

  dealsService = new DealsService();

  initGraph(deals, cities, getWeight) {
    this.nodes = cities.map(city => new Node(city));

    this.edges = deals.map(_deal => {
      return new Edge({
        _deal,
        weight: getWeight(_deal), // todo: add similar for duration
        from: this.nodes.find(x => x.name === _deal.departure),
        to: this.nodes.find(x => x.name === _deal.arrival)
      });
    });
  }

  async search(searchParams) {
    const sortBy = {
      fastest: deal => deal.duration,
      cheapest: deal => deal.discountCost
    };

    await Promise.all([
      this.dealsService.getDeals(),
      citiesService.getAllCities()
    ]).then(([deals, cities]) =>
      this.initGraph(deals, cities, sortBy[searchParams.sortBy])
    );

    const fromNode = this.nodes.find(
      node => node.name === searchParams.departure
    );
    const toNode = this.nodes.find(node => node.name === searchParams.arrival);

    // Deikstra
    fromNode.minDistance = 0;
    for (
      let node = fromNode;
      node !== undefined;
      node = getMinDistanceNode(this.nodes)
    ) {
      getNodeEdges(node, this.edges).forEach(edge => {
        edge.isUsed = true;
        if (edge.to.minDistance > edge.distance) {
          edge.to.minDistance = edge.distance;
          edge.to.cameBy = edge;
        }
      });
      node.isOut = true;
    }

    const resultDeals = [];

    for (let edge = toNode.cameBy; edge !== null; edge = edge.from.cameBy) {
      resultDeals.push(edge._deal);
    }

    return resultDeals.reverse();
  }
}
