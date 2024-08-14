<template>
    <div class="overflow-x-hidden flex flex-col min-h-screen">
        <Nav></Nav>
        <div class="relative h-screen overflow-hidden flex-grow">
            <img class="object-cover h-full w-full mt-12" :src="image1" alt="background" />
            <div class="absolute top-0 w-full h-full flex flex-col justify-start pr-24 pt-24">
                <h1 class="text-[70px] text-white text-right font-major-mono-display">
                    HIGH <br />QUALITY
                </h1>
                <img class="object-cover h-[10px] w-auto self-end" :src="image2" alt="overlay image" />
                <p class="text-white text-right">
                    Some additional text below the image.
                </p>
            </div>
        </div>
        <div class="relative h-screen bg-black overflow-hidden flex-grow">
            <div class="absolute top-0 w-full h-full flex justify-start items-center pl-40">
                <img class="object-cover h-[400px]" :src="image3" alt="overlay image" />
                <div class="ml-8">
                    <p class="text-white text-xl">THIS IS</p>
                    <h1 class="text-white text-6xl font-major-mono-display">
                        CAFE<br />DELIGHT
                    </h1>
                    <p class="text-white">
                        Enjoy the best quality food and drink while having a
                        comfortable dining<br />experience where we meet all
                        customer preferences.
                    </p>
                    <button class="py-1 px-2 text-sm rounded text-black bg-orange-400 mt-4"
                        onclick="window.location.href='/menu'">
                        Explore Menu
                    </button>
                </div>
            </div>
        </div>
        <div class="relative h-screen bg-[#292C35] overflow-hidden flex-grow">
            <div class="absolute top-0 w-full h-full flex justify-start items-center pl-40">
                <div class="ml-8">
                    <h1 class="text-white text-6xl font-major-mono-display">
                        you deserve.<br />the dessert.
                    </h1>
                    <p class="text-white">
                        even though you’re sweet, have a taste of Cafe Delight’s
                        dessert<br />sweeten your coffee time.
                    </p>
                    <button class="py-1 px-2 text-sm rounded text-black bg-orange-400 mt-4"
                        onclick="window.location.href='/menu'">
                        Explore Menu
                    </button>
                </div>
                <img class="object-cover h-[400px] ml-20" :src="image4" alt="overlay image" />
            </div>
        </div>
        <Fot class="mt-auto"></Fot>
    </div>
</template>
<script>
import Fot from "../Layouts/Footer.vue";
import Nav from "../Layouts/Nav.vue";
import image1 from "@/Pages/data/image.png";
import image2 from "@/Pages/data/image2.png";
import image3 from "@/Pages/data/image3.png";
import image4 from "@/Pages/data/image4.png";
export default {
    components: {
        Nav,
        Fot,
    },
    data() {
        return {
            image1,
            image2,
            image3,
            image4,
        };
    },
};
</script>

<style scoped>
.overflow-x-hidden {
    overflow-x: hidden;
}

.min-h-screen {
    min-height: 100vh;
}
</style>
