<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

  <div>
    <Nav></Nav>
    <div class="bg-black min-h-screen pt-16">
      <div class="bg-[#D9D9D9] p-4 rounded-r-lg max-w-[1000px] relative">
        <div class="text-2xl text-center">
          <h1 class="text-2xl font-bold">LATEST MENU</h1>
          <p class="text-2xl">
            GET DISCOUNT
            <span class="text-[66px] top-8 font-bold absolute text-orange-400">10%</span>
          </p>
        </div>
        <div class="max-w-3xl">
          <div class="flex overflow-x-auto py-4 no-scrollbar">
            <div v-for="(card, index) in cards" :key="index" class="flex-none p-2 m-1">
              <div class="bg-white h-full p-2 rounded-tr-xl rounded-bl-xl shadow-lg flex flex-col justify-between">
                <img :src="card.image" alt="Image" class="object-cover rounded-t-lg w-[150px] h-[150px] " />
                <div class="flex flex-col flex-grow mt-2">
                  <h2 class="text-sm text-orange-400">
                    {{ card.title }}
                  </h2>
                  <div class="flex items-center space-x-2">
                    <p class="text-gray-900 text-xs line-through">
                      {{ card.description }}
                    </p>
                    <p class="text-gray-900 text-xs">
                      {{ card.description1 }}
                    </p>
                  </div>
                  <button class="mt-2 px-2 py-1 bg-orange-400 text-white rounded text-xs">
                    See Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="left-[900px] bottom-96 h-[498px] relative" :src="image6" alt="overlay image" />

      <div class="text-center text-orange-400 text-6xl top-96">
        COFFEE
      </div>
      <div>
        <div class="flex flex-wrap overflow-x-auto p-4 justify-center">
          <div v-for="(card2, index) in card2" :key="index" class="flex-none  p-2 m-1">
            <div class="bg-black h-full p-2 rounded-xl flex flex-col justify-between border-2 border-orange-300">
              <img :src="card2.image" alt="Image" class="object-cover rounded-t-lg w-[150px] h-[150px]" />
              <div class="flex flex-col flex-grow mt-2">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm text-orange-400">
                    {{ card2.title }}
                  </h2>
                  <button class="px-2 py-1 bg-orange-400 text-white rounded text-xs" @click="openPopup(card2)">
                    <i class="fas fa-shopping-cart"></i> Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-4 rounded-lg w-80">
        <h2 class="text-xl mb-2">{{ selectedCard.title }}</h2>
        <img :src="selectedCard.image" alt="Image" class="w-[150px] h-[150px] object-cover rounded-t-lg " />
        <p class="text-gray-700">
          Price: IDR <span>{{ formatPrice(selectedCard.price) }}</span>
        </p>
        <div class="flex items-center mt-2">
          <button class="px-2 py-1 bg-gray-300 rounded-l" @click="decreaseQuantity">
            -
          </button>
          <input type="number" class="w-12 text-center border-t border-b" v-model="quantity" min="1" readonly />
          <button class="px-2 py-1 bg-gray-300 rounded-r" @click="increaseQuantity">
            +
          </button>
        </div>
        <p class="text-gray-700 mt-2">
          Total Price : IDR <span>{{ formatPrice(totalPrice) }}</span>
        </p>
        <div class="flex justify-end mt-4">
          <button class="px-4 py-2 bg-orange-400 text-white rounded mr-2" @click="purchaseItem">
            Buy
          </button>
          <button class="px-4 py-2 bg-gray-300 rounded" @click="closePopup">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "../Layouts/Nav.vue";
import image6 from "@/Pages/data/image6.png";
import cofe from "@/Pages/data/cofe.png";
import raf from "@/Pages/data/raf.png";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      image6,
      card2: [
        {
          title: "Dalgona Cofe",
          image: cofe,
          price: 10000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 15000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 15000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 15000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 15000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 12000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 13000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 9000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 16000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 14000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 14000,
        },
        {
          title: "Cofe",
          image: "https://via.placeholder.com/200",
          price: 14000,
        },
      ],
      cards: [
        {
          image: raf,
          title: "Rus Cofe",
          description: "IDR 40.000",
          description1: "IDR 36.000",
          price: 5000,
        },
        {
          image: "https://via.placeholder.com/200",
          title: "Card Title 2",
          description: "IDR ",
          description1: "IDR NaN",
          price: 10000,
        },
        {
          image: "https://via.placeholder.com/200",
          title: "Card Title 3",
          description: "IDR",
          description1: "IDR NaN",
          price: 15000,
        },
        {
          image: "https://via.placeholder.com/200",
          title: "Card Title 4",
          description: "IDR",
          description1: "IDR NaN",
          price: 20000,
        },
        {
          image: "https://via.placeholder.com/200",
          title: "Card Title 5",
          description: "IDR",
          description1: "IDR NaN",
          price: 25000,
        },
      ],
      showPopup: false,
      selectedCard: null,
      quantity: 1,
    };
  },
  computed: {
    totalPrice() {
      return this.selectedCard.price * this.quantity;
    },
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    openPopup(card) {
      this.selectedCard = card;
      this.quantity = 1;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.selectedCard = null;
    },
    increaseQuantity() {
      this.quantity += 1;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    purchaseItem() {
      alert(
        `Purchased ${this.quantity} ${this.selectedCard.title
        }(s) for IDR${this.formatPrice(this.totalPrice)}`
      );
      this.closePopup();
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
