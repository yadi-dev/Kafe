<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <nav class="bg-black p-4 fixed top-0 left-0 right-0 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/">
        <img :src="image" class="h-12 pl-4">
      </a>
      <div class="flex space-x-6 items-center">
        <a href="https://yandex.ru/maps/-/CDcE6ZNI"
          class="text-white hover:text-orange-400 transition duration-200">Location</a>
        <div class="relative">
          <div @click.prevent="toggleDropdown" class="text-white cursor-pointer flex items-center space-x-1">
            <span>Online Order</span>
            <i :class="{ 'fas fa-chevron-down': !isDropdownVisible, 'fas fa-chevron-up': isDropdownVisible }"
              class="transition-transform duration-200 text-xs"></i>
          </div>
          <div v-if="isDropdownVisible" @blur="blurHandler" tabindex="-1"
            class="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-20">
            <div class="py-1">
              <a href="#" class="block px-4 py-2 text-sm text-white hover:text-orange-400 focus:outline-none"
                @click="showReservationForm = true">Reservation</a>
              <a href="/menu"
                class="block px-4 py-2 text-sm text-white border-t hover:text-orange-400 focus:outline-none"
                @click="toggleDropdown">Order</a>
            </div>
          </div>
        </div>
        <div class="bg-gray-800 text-orange-400 py-1 px-2 text-base flex items-center space-x-2 rounded">
          <div class="text-sm text-orange-400">Order Now</div>
          <div class="flex">
            <button
              :class="['py-1 px-2 text-sm rounded-l', isOrder ? 'bg-orange-400 text-white' : 'bg-white text-black']"
              @click="selectOrder('order')">
              Order
            </button>
            <button
              :class="['py-1 px-2 text-sm rounded-r', !isOrder ? 'bg-orange-400 text-white' : 'bg-white text-black']"
              @click="selectOrder('pick-up')">
              Pick-Up
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showReservationForm" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-30">
  <div class="bg-white p-4 rounded-lg w-80">
    <h2 class="text-lg mb-3">Reservation Form</h2>
    <form @submit.prevent="submitReservation">
      <div class="mb-3">
        <label for="name" class="block text-gray-700 text-sm">Name</label>
        <input v-model="reservationForm.name" type="text" id="name"
          class="w-full p-1 border border-gray-300 rounded text-sm" required>
      </div>
      <div class="mb-3">
        <label for="phone" class="block text-gray-700 text-sm">Phone Number</label>
        <input v-model="reservationForm.phone" type="tel" id="phone"
          class="w-full p-1 border border-gray-300 rounded text-sm" required>
      </div>
      <div class="mb-3">
        <label for="email" class="block text-gray-700 text-sm">Email</label>
        <input v-model="reservationForm.email" type="email" id="email"
          class="w-full p-1 border border-gray-300 rounded text-sm" required>
      </div>
      <div class="mb-3">
        <label for="date" class="block text-gray-700 text-sm">Date</label>
        <input v-model="reservationForm.date" type="date" id="date"
          class="w-full p-1 border border-gray-300 rounded text-sm" required>
      </div>
      <div class="mb-3">
        <label for="time" class="block text-gray-700 text-sm">Time</label>
        <input v-model="reservationForm.time" type="time" id="time"
          class="w-full p-1 border border-gray-300 rounded text-sm" required>
      </div>
      <div class="mb-3">
        <label for="package" class="block text-gray-700 text-sm">Package</label>
        <select v-model="reservationForm.package" id="package" class="w-full p-1 border border-gray-300 rounded text-sm" required>
          <option value="Package 1">Package 1</option>
          <option value="Package 2">Package 2</option>
          <option value="Package 3">Package 3</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="guests" class="block text-gray-700 text-sm">Number of Guests</label>
        <input v-model="reservationForm.guests" type="number" id="guests" min="1"
          class="w-full p-1 border border-gray-300 rounded text-sm" required>
      </div>
      <div class="flex justify-between">
        <button type="button" @click="cancelReservation"
          class="py-1 px-3 bg-gray-500 text-white rounded text-sm">Cancel</button>
        <button type="submit" class="py-1 px-3 bg-orange-400 text-white rounded text-sm">Submit</button>
      </div>
    </form>
      </div>
    </div>
  </nav>
</template>

<script>
import image from "@/Pages/data/image5.png";
export default {
  name: 'Navbar',
  data() {
    return {
      image,
      isDropdownVisible: false,
      isOrder: false,
      showReservationForm: false,
      reservationForm: {
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        package: ''
      }
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    blurHandler() {
      this.isDropdownVisible = false;
    },
    selectOrder(type) {
      this.isOrder = type === 'order';
    },
    cancelReservation() {
      this.showReservationForm = false;
      this.resetReservationForm();
    },
    submitReservation() {
      const baseUrl = 'https://wa.me/';
      const phoneNumber = '088704468542';
      const message = encodeURIComponent(`Reservation Details:\n\nName: ${this.reservationForm.name}\nPhone Number: ${this.reservationForm.phone}\nEmail: ${this.reservationForm.email}\nDate: ${this.reservationForm.date}\nTime: ${this.reservationForm.time}\nPackage: ${this.reservationForm.pa}\nNumber of Guests: ${this.reservationForm.guests}`);
      const url = `${baseUrl}${phoneNumber}?text=${message}`;
      window.location.href = url;
      this.showReservationForm = false;
      this.resetReservationForm();
    },
    resetReservationForm() {
      this.reservationForm = {
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: ''
      };
    }
  }
};
</script>
