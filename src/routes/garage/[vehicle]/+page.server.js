import { pb } from '$lib/pocketbase';

export async function load({ params }) {
    const garage = await pb.collection('garage').getOne(`${params.vehicle}`);

    const services = await pb.collection('services').getFullList({
        filter: `vehicle='${params.vehicle}'`,
    })

    return { garage, services }
}