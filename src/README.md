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

