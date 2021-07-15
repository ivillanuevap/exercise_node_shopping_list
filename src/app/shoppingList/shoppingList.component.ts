import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.scss']
})
export class ShoppingList implements OnInit {
  items: Item[];
  listsNames: string[];
  listsItems: any[];

  ngOnInit() {
    this.items = [
      { list: 0, name: 'Milk' },
      { list: 0, name: 'Eggs' },
      { list: 0, name: 'Cheese' },
    ];
    this.listsNames = [ "To Buy", "Bought" ];
    this.configureItemsForRendering();
  }

  configureItemsForRendering = () => {
    this.listsItems = [];
    for (let i = 0; i < this.listsNames.length; ++i) {
      this.listsItems.push([]);
    }
    for (let item of this.items) {
      const listId = item.list;
      this.listsItems[listId].push(item);
    }
  }

  generateItem(list, name) {
    let newItem = { list: list, name: name };
    this.listsItems[newItem.list].push(newItem);
  }

  //TODO - Add function for create item button
  //TODO - if input value is empty then do nothing
  //TODO - if input has value then generateItem in first list and clean input text

  //TODO - Add function for left move button

  //TODO - Add function for right move button

  //TODO - Add function for remove item button
  
}

interface Item {
  list: number;
  name: string;
}