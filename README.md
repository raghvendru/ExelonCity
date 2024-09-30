# CITY API's

## Add new city(POST)
---> http://localhost:4000/api/cities
  { 
 "name":"vijayapur",
 "population":200000,
 "country":"india",
 "latitude":80,
 "longitude":80 
    }

## Get all cities(GET)
---> http://localhost:4000/api/cities

## Update city(POST)
---> http://localhost:4000/api/cities/66fa40847737306073d2ea17

## Delete city(DELETE)
--->  http://localhost:4000/api/cities/66fa40847737306073d2ea17

## page,limit,filter,sort,search
---> http://localhost:4000/api/cities?page=1&limit=4&sort=latitude&filter={"latitude":80}&fields=name

## Collection

{
	"info": {
		"_postman_id": "15b59043-304f-4614-9582-aea5f4f16402",
		"name": "Cities",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "15793999"
	},
	"item": [
		{
			"name": "addCity",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{ \n \"name\":\"manglore\",\n \"population\":300000,\n \"country\":\"india\",\n \"latitude\":80,\n \"longitude\":80 \n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4000/api/cities",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"cities"
					]
				}
			},
			"response": []
		},
		{
			"name": "UpdateCity",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{ \n \"name\":\"bagalkotee\",\n \"population\":400000\n  \n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4000/api/cities/66fa40847737306073d2ea17",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"cities",
						"66fa40847737306073d2ea17"
					]
				}
			},
			"response": []
		},
		{
			"name": "getCity",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{ \n \"name\":\"manglore\",\n \"population\":300000,\n \"country\":\"india\",\n \"latitude\":80,\n \"longitude\":80 \n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4000/api/cities",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"cities"
					]
				}
			},
			"response": []
		},
		{
			"name": "page",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{ \n \"name\":\"manglore\",\n \"population\":300000,\n \"country\":\"india\",\n \"latitude\":80,\n \"longitude\":80 \n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4000/api/cities?page=1&limit=5&sort=latitude&filter={\"latitude\":80}&fields=name",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"cities"
					],
					"query": [
						{
							"key": "page",
							"value": "1"
						},
						{
							"key": "limit",
							"value": "5"
						},
						{
							"key": "sort",
							"value": "latitude"
						},
						{
							"key": "filter",
							"value": "{\"latitude\":80}"
						},
						{
							"key": "fields",
							"value": "name"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "DeleteCity",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{ \n \"name\":\"manglore\",\n \"population\":300000,\n \"country\":\"india\",\n \"latitude\":80,\n \"longitude\":80 \n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4000/api/cities/66fa40847737306073d2ea17",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"cities",
						"66fa40847737306073d2ea17"
					]
				}
			},
			"response": []
		}
	]
}


