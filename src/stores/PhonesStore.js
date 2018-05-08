import { observable, computed, action } from 'mobx';

class PhonesStore {
	@observable phones = [
		{
	      id: 1,
	      categoryName: 'Apple',
	      name: "Apple iPhone 5c",
	      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
	      price: 823,
	      cpu: "1.3GHz",
	      camera: "8mp (3264x2448)",
	      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
	      weight: "132 grams (4.7 ounces) with battery",
	      display: "4.0 326 pixel density",
	      battery: "1480 mAh",
	      memory: [16, 32],
	      os: 'iOS 8'
	    },
	    {
	      id: 2,
	      categoryName: 'Apple',
	      name: "Apple iPhone 6",
	      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
	      price: 953,
	      image: "/images/phones/51u6y9Rm8QL._SY300_.jpg",
	      cpu: "1.3GHz",
	      camera: "8mp (3264x2448)",
	      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
	      weight: "132 grams (4.7 ounces) with battery",
	      display: "4.0 326 pixel density",
	      battery: "1480 mAh",
	      memory: [16, 32],
	      os: 'iOS 9'
	    },
	    {
	      id: 3,
	      categoryName: 'Lenovo',
	      name: "Lenovo A6000",
	      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
	      price: 764,
	      cpu: "1.3GHz",
	      camera: "8mp (3264x2448)",
	      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
	      weight: "132 grams (4.7 ounces) with battery",
	      display: "4.0 326 pixel density",
	      battery: "1480 mAh",
	      memory: [16, 32, 64],
	      os: 'Android 7.1.1 (Nougat)'
	    },
	    {
	      id: 4,
	      categoryName: 'Microsoft',
	      name: "Nokia Lumia 1520",
	      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
	      price: 674,
	      cpu: "1.3GHz",
	      camera: "8mp (3264x2448)",
	      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
	      weight: "132 grams (4.7 ounces) with battery",
	      display: "4.0 326 pixel density",
	      battery: "1480 mAh",
	      memory: [16, 32, 64],
	      os: 'Windows Phone 8.1 Lumia Denim'
	    },
	    {
	      id: 5,
	      categoryName: 'Htc',
	      name: "HTC One",
	      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
	      price: 674,
	      cpu: "1.3GHz",
	      camera: "8mp (3264x2448)",
	      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
	      weight: "132 grams (4.7 ounces) with battery",
	      display: "4.0 326 pixel density",
	      battery: "1480 mAh",
	      memory: [16, 32, 64],
	      os: 'Android 6.0.1 (Marshmallow)'
	    },
	    {
	      id: 6,
	      categoryName: 'Samsung',
	      name: "Samsung Galaxy S6",
	      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
	      price: 674,
	      cpu: "1.3GHz",
	      camera: "8mp (3264x2448)",
	      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
	      weight: "132 grams (4.7 ounces) with battery",
	      display: "4.0 326 pixel density",
	      battery: "1480 mAh",
	      memory: [16, 32, 64],
	      os: 'Android 7.0 (Nougat)'
	    }
	];

	@observable myTrash = [];

	// Get count of available phones
	@computed get phonesCount() {
		return this.phones.length;
	}

	// get total count of price
	@computed get getTotalPrice() {
		console.log(this.myTrash, '===Called===');
		var priceArray = this.myTrash.map((item) => {
			return item.price;
		});
		return priceArray.reduce((acc, val) => acc + val, 0);
	}

	//  Remove item from array
	// TODO: Use this function for creating 'action' -> removeProductFromList
	@action removeElement = (id) =>  {
		var removeIndex = this.phones.map((item) => {
			return item.id;
		}).indexOf(id);
	  ~removeIndex && this.phones.splice(removeIndex, 1);
	}

	// Add product to Trash list
	@action addToTrash = (id) => {
		var selectedItem = this.phones.find((item) => {
			return item.id === id;
		});
		this.myTrash.push(selectedItem);
	}
}

const phonesStore = window.phonesStore = new PhonesStore();
export default phonesStore;
