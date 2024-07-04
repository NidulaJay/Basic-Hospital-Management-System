package com.mobiteltest.hospital_managemant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HospitalManagemantApplication {

	public static void main(String[] args) {
		SpringApplication.run(HospitalManagemantApplication.class, args);
	}

}

/*
spring.datasource.url=jdbc:mysql://localhost:3306/hospital_management
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
 */