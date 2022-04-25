import Notiflix from "notiflix";
export default class ImagesApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 40;
    }
    async fetchImages() {
        const API_KEY = '24700389-41a6c20aad42dc08b671c5623';
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`;
        const response = await fetch(url);
        const data = await response.json();
        const images = await thisHitsOfImages(data);
        return images;
    }
    thisHitsOfImages(data) {
        this.page += 1;
        return data.hits;
    }
    resetPage() {
        this.page = 1;
    }
    resetPage() {
        this.page = 1;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}