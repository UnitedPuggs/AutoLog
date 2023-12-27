<script>
import { pb } from '$lib/pocketbase';
import { goto } from '$app/navigation';
 
let vehicle;
let mileage;
let last_service;

async function add_vehicle() {
    const data = {
        "vehicle": vehicle,
        "mileage": mileage,
    }

    const garage_record = await pb.collection('garage').create(data);
    goto('/garage');
}
</script>

<a href="/garage" class="font-bold text-3xl">&lt;--</a>
<div class="flex justify-center items-center">
    <form on:submit={add_vehicle} class="flex flex-col items-center w-96 gap-1">
        <label for="">Vehicle</label>
        <input type="text" bind:value={vehicle} class="border border-black p-1 rounded-lg" placeholder="vehicle here" required>
        <label for="">Mileage</label>
        <input type="number" bind:value={mileage} class="border border-black p-1 rounded-lg" placeholder="miles here" required>
        <!-- 
        Datetime doesn't match pocketbase datetime yippee
        I'll just fix this sometime later
        <label for="">Last Serviced</label>
        <input type="datetime-local" bind:value={last_service} class="border border-black w-fi px-1 text-center rounded-lg">
        <span>{last_service}</span>
        -->
        <input type="submit" value="Add" class="cursor-pointer bg-black text-white px-4 py-1 rounded-full hover:opacity-75">
    </form>
</div>