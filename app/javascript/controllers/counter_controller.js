import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    console.log('Hello!');
    console.log('Je connecte le Controller');
    console.log(this.countTarget);
  }

  refresh() {
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerText = data.restaurants.length;
      });
  }
}
