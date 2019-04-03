package com.javasampleapproach.multipartfile;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.javasampleapproach.multipartfile.controller.filestorage.FileStorage;

@SpringBootApplication
public class SpringBootUploadDownloadMultipartFileApplication implements CommandLineRunner {
	 
		@Resource
		FileStorage fileStorage;
	    
	    public static void main(String[] args) throws Exception {
	        SpringApplication.run(SpringBootUploadDownloadMultipartFileApplication.class, args);
	    }
	    
		@Override
		public void run(String... args) throws Exception {
			fileStorage.deleteAll();
			fileStorage.init();
		}
	 
	}