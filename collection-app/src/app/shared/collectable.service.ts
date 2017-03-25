import { Collectable } from './collectable.model';

export class CollectableService {
  private collectables: Collectable[]  = [
    { description: 'A very rare copy of "jQuery for Dummies"',
      type: 'Book'
    },
    {
      description: 'The first Letter ever written',
      type: 'Piece of Paper'
    },
    {
      description: 'A photograph showing nothing',
      type: 'Photo'
    },
    {
      description: 'A box with all sold Zunes',
      type: 'Garbage'
    }
  ];

  private collection: Collectable[] = [];

  public getCollectables() {
    return this.collectables;
  }

  public getCollection() {
    return this.collection;
  }

  public addToCollection(item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  public removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}
