
all:  server client

server: 
	 cd ./bookstore && ./mvnw spring-boot:run 

client: 
	cd ./bookstore-client && yarn start

