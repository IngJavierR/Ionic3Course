import { Component } from '@angular/core';
import { SqlStorageProvider } from '../../providers/sql-storage/sql-storage';

@Component({
  selector: 'page-manage-sql',
  templateUrl: 'manage-sql.html',
})
export class ManageSqlPage {

  id: string;
  name: string;
  persons: any[];
  constructor(private sqlStorage: SqlStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageSqlPage');
  }

  save() {
    this.sqlStorage.save(this.id, this.name);
  }

  show() {
    this.sqlStorage.getAll().then(persons => this.persons = persons);
  }

  delete(person) {
    this.sqlStorage.remove(person.id).then(() => this.show());
  }

}
