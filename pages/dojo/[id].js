import { useRouter } from 'next/router';

const Dojo = () => {
    const router = useRouter();
    return <div>Dojo Page {router.query.id}</div>
}

export default Dojo;