<script>
    import { onMount } from "svelte";
    import { pb } from '$lib/pocketbase';
    import VehicleBox from '$lib/garage/VehicleBox.svelte'

    let vehicles = [];

    onMount(async() => {
        vehicles = await pb.collection('garage').getFullList();
    });
</script>


<div class="flex flex-col text-center gap-2 mt-4">
    <h1 class="text-3xl font-bold">Your Garage</h1>
    <a href="/garage/add" class="text-xl font-bold text-white bg-black p-2 rounded-lg mx-auto w-fit transition-all hover:opacity-75 hover:scale-90">Add New Vehicle</a>
    {#each vehicles as vehicle}
    <!-- could maybe also add a little square with a picture of the vehicle? -->
        <a href="/garage/{vehicle.id}" class="hover:opacity-75">
            <div class="flex flex-col border border-black w-72 mx-auto p-2 rounded-md">
                <span class="text-lg">{vehicle.vehicle}</span>
                <span>{vehicle.mileage} mi</span>
                <span>last serviced on {vehicle.last_service.substring(0, 10)}</span>
            </div>
        </a>
    {/each}
</div>