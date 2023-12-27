<script>
    import { page } from '$app/stores';
    export let data;
    
    $: vehicle = data.garage;
    $: services = data.services;
</script>

<a href="/garage" class="font-bold text-3xl">&lt;--</a>
<div class="flex flex-col justify-center items-center mt-4 gap-2">
    <div class="border-2 border-black rounded-md p-2 flex flex-col text-center">
        <span class="text-2xl font-bold">{vehicle.vehicle}</span>
        <span>{vehicle.mileage} mi</span>
    </div>
    <a href="{$page.params.vehicle}/service" class="text-xl font-bold text-white bg-black p-2 rounded-lg mx-auto w-fit transition-all hover:opacity-75 hover:scale-90">Add Service</a>
    <div class="flex flex-col gap-2">
        {#each services as service}
            <div class="flex flex-col border border-black rounded-md p-2">
                <span>{service.service} @ {service.serviced_on.substring(0, 10)}</span>
                <span>with {service.at_miles} mi</span>
            </div>
        {/each}
    </div>
</div>