import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const DB = await openDB('jate', 1)
  const transaction = DB.transaction('jate', 'readwrite')
  const store = transaction.objectStore('jate')
  const request = store.put({id:1, value:content})
  const results = await request 
  console.log(results.value);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const DB = await openDB('jate', 1)
  const transaction = DB.transaction('jate', 'readonly')
  const store = transaction.objectStore('jate')
  const request = store.get(1)
  const results = await request 
  if(results) {
    console.log('retrieved data')
  } else {
    console.log('database not found')
  }
  return results?.value 
}

initdb();
