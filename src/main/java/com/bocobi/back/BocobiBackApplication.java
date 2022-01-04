package com.bocobi.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class BocobiBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BocobiBackApplication.class, args);
	}

}
