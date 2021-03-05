
all: server client

server: 
	 cd ./bookstore && ./mvnw spring-boot:run 

client: 
	echo "Client side..."

