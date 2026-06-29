package com.example.send_bill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SendBillApplication extends SpringBootServletInitializer { // 1. Extended SpringBootServletInitializer

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(SendBillApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(SendBillApplication.class, args);
	}

}