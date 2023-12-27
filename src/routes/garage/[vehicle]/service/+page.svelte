<script>
    import { page } from '$app/stores';
    import { pb } from '$lib/pocketbase'
    import { goto } from '$app/navigation';

    let service;
    let mileage;

    const vehicle_id = $page.params.vehicle;

    async function add_service() {
        const data = {
            "service": service,
            "vehicle": vehicle_id,
            "at_miles": mileage
        };

        const service_record = await pb.collection('services').create(data);

        const garage_data = {
            "mileage": mileage,
        };

        const garage_record = await pb.collection('garage').update(`${vehicle_id}`, garage_data);

        goto(`/garage/${vehicle_id}`);
    }
</script>

<!-- would like to add a feature to allow uploading of maybe like a record or the actual work being done
    just need to figure out pocketbase file upload stuff
-->
<a href="/garage/{vehicle_id}" class="font-bold text-3xl">&lt;--</a>
<div class="flex justify-center items-center">
    <form on:submit={add_service} class="flex flex-col w-96 text-center gap-1">
        <label for="">Service</label>
        <input type="text" class="border border-black rounded-md p-1" placeholder="service details here" bind:value={service}>
        <label for="">Miles</label>
        <input type="number" class="border border-black rounded-md p-1" placeholder="mileage here" bind:value={mileage}>
        <input type="submit" value="Add Service" class="bg-black text-white rounded-full px-2 py-1 w-fit mx-auto cursor-pointer">
    </form>
</div>