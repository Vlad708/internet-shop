import { observable, computed } from 'mobx';

class PhonesStore {
	@observable all = [
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
	      image: "./images/phones/_35%20(1).JPG",
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
	      name: "'Nokia Lumia 1520'",
	      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
	      price: 674,
	      image: "./images/phones/Lumia1520-Front-Back-png.png",
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
	      image: "/images/phones/htc-one-m7-802w-dual-sim-silver.jpg",
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
	      image: "/images/phones/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
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

	// Get count of available phones
	@computed get phonesCount() {
		return this.all.length;
	}

}

const phonesStore = new PhonesStore();

export default phonesStore;
