import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(meetupData) {
        await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'applicaton/json'
            }
        }).then((data) => data.json());
        router.push('/');
    }
    return (
        <>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amazing networking oppotunities."
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
}
