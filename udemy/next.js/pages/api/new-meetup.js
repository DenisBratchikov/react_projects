import { MongoClient } from 'mongodb';

const CONNTECT_ADDRESS = 'my_string';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const client = await MongoClient.connect(CONNTECT_ADDRESS);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        await meetupsCollection.insertOne(req.body);

        client.close();
        res.status(201).json({ message: 'Meetup inserted!' });
    }
}
