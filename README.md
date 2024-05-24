# StarWars.Node

Star Wars REST API in Node.

## Getting Started

### Prerequisites

- Install and start Docker: https://docs.docker.com/get-docker/

## Running in Docker

To simply deploy/run the Star Wars REST API via Docker, you can run the command:

```bash
docker run -p 8080:8080 ghcr.io/bashfulbandit/starwars.node.api:latest
```

## Running via `docker compose`

There is an example `docker-compose.yaml` file in the root of the repository.
This can be used to easily start up an instance of the `StarWars.Node.Api`.

```yaml
services:
  api:
    image: ghcr.io/bashfulbandit/starwars.node.api:latest
    ports:
      - 8080:8080
```

### API Endpoint for getting started and documentation

There is a Healthcheck API endpoint at `http://localhost:8080/api/healthz`.

## Coding Exercise API Endpoints

### `GET /api/characters/{characterId}/starships`

#1 - Return a list of the Starships related to Luke Skywalker

Luke Skywalker's `characterId` is `1`.

Query Parameters:

- `page` - Defaults to `1`.
- `pageSize` - Defaults to `25`.

```json{
	"pagination": {
		"hasNext": false,
		"hasPrevious": false,
		"pageCount": 1,
		"pageNumber": 1,
		"pageSize": 25,
		"totalCount": 2
	},
	"species": [
		{
			"MGLT": "100",
			"cargoCapacity": "110",
			"consumables": "1 week",
			"costInCredits": "149999",
			"createdAt": "2014-12-12T11:19:05.340000Z",
			"crew": "1",
			"hyperdriveRating": "1.0",
			"id": "12",
			"length": "12.5",
			"manufacturers": [
					"Incom Corporation"
			],
			"name": "X-wing",
			"passengers": "0",
			"updatedAt": "2014-12-20T21:23:49.886000Z"
		},
		{
			"MGLT": "50",
			"cargoCapacity": "80000",
			"consumables": "2 months",
			"costInCredits": "240000",
			"createdAt": "2014-12-15T13:04:47.235000Z",
			"crew": "6",
			"hyperdriveRating": "1.0",
			"id": "22",
			"length": "20",
			"manufacturers": [
					"Sienar Fleet Systems"
			],
			"name": "Imperial shuttle",
			"passengers": "20",
			"updatedAt": "2014-12-20T21:23:49.900000Z"
		}
	]
}
```

### `GET /api/episodes/{episodeId}/species`

#2 - Return the classification of all species in the 1st episode

1st Star Wars episode `episodeId` is `1`. If you go by release order a.k.a. The New Hope.
1st Star Wars episode `episodeId` is `4`. If you go by episode order a.k.a. The Phantom Menace.

Query Parameters:

- `page` - Defaults to `1`.
- `pageSize` - Defaults to `25`.

```json
{
	"pagination": {
		"hasNext": false,
		"hasPrevious": false,
		"pageCount": 1,
		"pageNumber": 1,
		"pageSize": 25,
		"totalCount": 5
	},
	"species": [
		{
			"averageHeight": "180",
			"averageLifespan": "120",
			"classification": "mammal",
			"createdAt": "2014-12-10T13:52:11.567000Z",
			"designation": "sentient",
			"eyeColors": [
				"brown",
				"blue",
				"green",
				"hazel",
				"grey",
				"amber"
			],
			"hairColors": [
				"blonde",
				"brown",
				"black",
				"red"
			],
			"id": "1",
			"language": "Galactic Basic",
			"name": "Human",
			"skinColors": [
				"caucasian",
				"black",
				"asian",
				"hispanic"
			],
			"updatedAt": "2014-12-20T21:36:42.136000Z"
		},
		{
			"averageHeight": "n/a",
			"averageLifespan": "indefinite",
			"classification": "artificial",
			"createdAt": "2014-12-10T15:16:16.259000Z",
			"designation": "sentient",
			"eyeColors": [
				"n/a"
			],
			"hairColors": [
				"n/a"
			],
			"id": "2",
			"language": "n/a",
			"name": "Droid",
			"skinColors": [
				"n/a"
			],
			"updatedAt": "2014-12-20T21:36:42.139000Z"
		},
		{
			"averageHeight": "210",
			"averageLifespan": "400",
			"classification": "mammal",
			"createdAt": "2014-12-10T16:44:31.486000Z",
			"designation": "sentient",
			"eyeColors": [
				"blue",
				"green",
				"yellow",
				"brown",
				"golden",
				"red"
			],
			"hairColors": [
					"black",
					"brown"
			],
			"id": "3",
			"language": "Shyriiwook",
			"name": "Wookie",
			"skinColors": [
				"gray"
			],
			"updatedAt": "2014-12-20T21:36:42.142000Z"
		},
		{
			"averageHeight": "170",
			"averageLifespan": "unknown",
			"classification": "sentient",
			"createdAt": "2014-12-10T17:05:26.471000Z",
			"designation": "reptilian",
			"eyeColors": [
				"black"
			],
			"hairColors": [
				"n/a"
			],
			"id": "4",
			"language": "Galatic Basic",
			"name": "Rodian",
			"skinColors": [
				"green",
				"blue"
			],
			"updatedAt": "2014-12-20T21:36:42.144000Z"
		},
		{
			"averageHeight": "300",
			"averageLifespan": "1000",
			"classification": "gastropod",
			"createdAt": "2014-12-10T17:12:50.410000Z",
			"designation": "sentient",
			"eyeColors": [
				"yellow",
				"red"
			],
			"hairColors": [
				"n/a"
			],
			"id": "5",
			"language": "Huttese",
			"name": "Hutt",
			"skinColors": [
				"green",
				"brown",
				"tan"
			],
			"updatedAt": "2014-12-20T21:36:42.146000Z"
		}
	]
}
```

### `GET /api/population`

#3 - Return the total population of all planets in the Galaxy

```json
{
  "population": 1711401432500
}
```

### Postman Collection

There is a Postman [collection](./docs/star-wars-api.collection.json) in the `docs` directory of this repository that can be used to
interact with a running instance of the Star Wars API.

The Postman Collection is also a great way to learn about the various API endpoints that are available to use.

### Support

We use GitHub for tracking bugs and feature requests related to the Star Wars API.

Don't know how something in this project works? Curious if this project can achieve your desired functionality?
Please open an issue on GitHub with the label question.
