import { BreedDTO } from '~/demo/adapters/http/breed-system/BreedDTO';
import { Breed } from '~/demo/domain/entities/Breed';
import { BreedSystemAdapter } from '~/demo/domain/ports/BreedSystemAdapter';

const jsonStringArrayOfTen = `[
    {
        "weight": {
            "imperial": "30 - 150",
            "metric": "14 - 68"
        },
        "height": {
            "imperial": "14 - 17",
            "metric": "36 - 43"
        },
        "id": 11,
        "name": "American Bully",
        "country_code": "US",
        "bred_for": "Family companion dog",
        "breed_group": "",
        "life_span": "8 – 15 years",
        "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
        "reference_image_id": "sqQJDtbpY",
        "image": {
            "id": "sqQJDtbpY",
            "width": 1024,
            "height": 683,
            "url": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg"
        }
    },
    {
        "weight": {
            "imperial": "20 - 40",
            "metric": "9 - 18"
        },
        "height": {
            "imperial": "15 - 19",
            "metric": "38 - 48"
        },
        "id": 12,
        "name": "American Eskimo Dog",
        "country_code": "US",
        "bred_for": "Circus performer",
        "breed_group": "Non-Sporting",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
        "reference_image_id": "Bymjyec4m",
        "image": {
            "id": "Bymjyec4m",
            "width": 1000,
            "height": 802,
            "url": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
        }
    },
    {
        "weight": {
            "imperial": "7 - 10",
            "metric": "3 - 5"
        },
        "height": {
            "imperial": "9 - 12",
            "metric": "23 - 30"
        },
        "id": 13,
        "name": "American Eskimo Dog (Miniature)",
        "country_code": "US",
        "bred_for": "Companionship",
        "life_span": "13 – 15 years",
        "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
        "reference_image_id": "_gn8GLrE6",
        "image": {
            "id": "_gn8GLrE6",
            "width": 730,
            "height": 487,
            "url": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg"
        }
    },
    {
        "weight": {
            "imperial": "65 - 75",
            "metric": "29 - 34"
        },
        "height": {
            "imperial": "21 - 28",
            "metric": "53 - 71"
        },
        "id": 14,
        "name": "American Foxhound",
        "country_code": "US",
        "bred_for": "Fox hunting, scent hound",
        "breed_group": "Hound",
        "life_span": "8 - 15 years",
        "temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
        "reference_image_id": "S14n1x9NQ",
        "image": {
            "id": "S14n1x9NQ",
            "width": 3000,
            "height": 2400,
            "url": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg"
        }
    },
    {
        "weight": {
            "imperial": "30 - 60",
            "metric": "14 - 27"
        },
        "height": {
            "imperial": "17 - 21",
            "metric": "43 - 53"
        },
        "id": 15,
        "name": "American Pit Bull Terrier",
        "country_code": "US",
        "bred_for": "Fighting",
        "breed_group": "Terrier",
        "life_span": "10 - 15 years",
        "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
        "reference_image_id": "HkC31gcNm",
        "image": {
            "id": "HkC31gcNm",
            "width": 300,
            "height": 244,
            "url": "https://cdn2.thedogapi.com/images/HkC31gcNm.png"
        }
    },
    {
        "weight": {
            "imperial": "50 - 60",
            "metric": "23 - 27"
        },
        "height": {
            "imperial": "17 - 19",
            "metric": "43 - 48"
        },
        "id": 16,
        "name": "American Staffordshire Terrier",
        "country_code": "US",
        "bred_for": "",
        "breed_group": "Terrier",
        "life_span": "12 - 15 years",
        "temperament": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
        "reference_image_id": "rJIakgc4m",
        "image": {
            "id": "rJIakgc4m",
            "width": 357,
            "height": 500,
            "url": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg"
        }
    },
    {
        "weight": {
            "imperial": "25 - 45",
            "metric": "11 - 20"
        },
        "height": {
            "imperial": "15 - 18",
            "metric": "38 - 46"
        },
        "id": 17,
        "name": "American Water Spaniel",
        "country_code": "US",
        "bred_for": "Bird flushing and retrieving",
        "breed_group": "Sporting",
        "life_span": "10 - 12 years",
        "temperament": "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
        "reference_image_id": "SkmRJl9VQ",
        "image": {
            "id": "SkmRJl9VQ",
            "width": 1600,
            "height": 1264,
            "url": "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg"
        }
    },
    {
        "weight": {
            "imperial": "80 - 150",
            "metric": "36 - 68"
        },
        "height": {
            "imperial": "27 - 29",
            "metric": "69 - 74"
        },
        "id": 18,
        "name": "Anatolian Shepherd Dog",
        "bred_for": "Livestock herding",
        "breed_group": "Working",
        "life_span": "11 - 13 years",
        "temperament": "Steady, Bold, Independent, Confident, Intelligent, Proud",
        "reference_image_id": "BJT0Jx5Nm",
        "image": {
            "id": "BJT0Jx5Nm",
            "width": 1216,
            "height": 1131,
            "url": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg"
        }
    },
    {
        "weight": {
            "imperial": "48 - 55",
            "metric": "22 - 25"
        },
        "height": {
            "imperial": "20 - 22",
            "metric": "51 - 56"
        },
        "id": 19,
        "name": "Appenzeller Sennenhund",
        "bred_for": "Herding livestock, pulling carts, and guarding the farm",
        "life_span": "12 – 14 years",
        "temperament": "Reliable, Fearless, Energetic, Lively, Self-assured",
        "reference_image_id": "HkNkxlqEX",
        "image": {
            "id": "HkNkxlqEX",
            "width": 400,
            "height": 600,
            "url": "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg"
        }
    },
    {
        "weight": {
            "imperial": "44 - 62",
            "metric": "20 - 28"
        },
        "height": {
            "imperial": "17 - 20",
            "metric": "43 - 51"
        },
        "id": 21,
        "name": "Australian Cattle Dog",
        "country_code": "AU",
        "bred_for": "Cattle herding, herding trials",
        "breed_group": "Herding",
        "life_span": "12 - 14 years",
        "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
        "reference_image_id": "IBkYVm4v1",
        "image": {
            "id": "IBkYVm4v1",
            "width": 736,
            "height": 850,
            "url": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg"
        }
    }
]`;

const responseData: BreedDTO[] = JSON.parse(jsonStringArrayOfTen);

export default class MockBreedSystemHttpAdapter implements BreedSystemAdapter {
  limit?: number;
  page?: number;
  constructor(limit = 1, page = 10) {
    this.limit = limit;
    this.page = page;
  }
  getBreedById!: (id: string) => Promise<Breed>;

  getBreeds(): Promise<Breed[]> {
    return new Promise((resolve) => {
      resolve(responseData);
    });
  }
}
