import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from 'body-parser';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
const main = express();
const entriesCollection = 'entries';

main.use('/api/v2', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
// webApi is your functions name, and you will pass main as
// a parameter
export const webApi = functions.https.onRequest(main);

// Add new contact
app.post('/entries', async (req, res) => {
  try {
    const entries: any = {
      id: req.body['id'],
      isAList: req.body['isAList'],
      entryTitle: req.body['entryTitle'],
      correlations: req.body['correlations']
    };

    const newDoc = await firebaseHelper.firestore.createNewDocument(
      db,
      entriesCollection,
      entries
    );

    res.status(201).send(`Created a new contact: ${newDoc.id}`);
  } catch (error) {
    console.log('ERR: ', error);

    res
      .status(400)
      .send(`Contact should only contains firstName, lastName and email!!!`);
  }
});

// Update new contact
app.patch('/entries/:entriesId', async (req, res) => {
  const updatedDoc = await firebaseHelper.firestore.updateDocument(
    db,
    entriesCollection,
    req.params.contactId,
    req.body
  );

  res.status(204).send(`Update a new contact: ${updatedDoc}`);
});

// View a contact
app.get('/entries/:entriesId', (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, entriesCollection, req.params.contactId)
    .then((doc) => res.status(200).send(doc))
    .catch((error) => res.status(400).send(`Cannot get contact: ${error}`));
});

// View all entries
app.get('/entries', (req, res) => {
  firebaseHelper.firestore
    .backup(db, entriesCollection)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(`Cannot get contacts: ${error}`));
});

// Delete a contact
app.delete('/entries/:entriesId', async (req, res) => {
  const deletedContact = await firebaseHelper.firestore.deleteDocument(
    db,
    entriesCollection,
    req.params.contactId
  );
  res.status(204).send(`Contact is deleted: ${deletedContact}`);
});
