import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class SqlStorageProvider {

  private db: SQLiteObject;
  constructor(private sqlite: SQLite) {
    
  }

  initializeDatabase() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
      return db.executeSql('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

  getAll() {
    return this.db.executeSql('SELECT key, value FROM kv', []).then(data => {
      let results = [];
      for (let i = 0; i < data.rows.length; i++) {
        results.push({id: data.rows.item(i).key, name: data.rows.item(i).value});
      }
      return results;
    });
  }

  save(key: string, value: string) {
    return this.db.executeSql('INSERT OR REPLACE INTO kv(key, value) VALUES (?,?)', [key, value]).then(data => {
      if(data.rows.length > 0){
        return data.rows.item(0).value;
      }
    });
  }

  remove(key: string) {
    return this.db.executeSql('DELETE FROM kv WHERE key = ?', [key]);
  }

}
