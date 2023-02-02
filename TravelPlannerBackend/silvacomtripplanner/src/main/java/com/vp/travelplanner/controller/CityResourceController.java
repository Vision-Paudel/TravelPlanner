package com.vp.travelplanner.controller;

import com.vp.travelplanner.dto.City;
import com.vp.travelplanner.service.CityService;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CityResourceController {

    public final CityService cityService;

    public CityResourceController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("")
    public ResponseEntity<String> homePage(){
        String message = "<h1>How to Use this API<h1>" +
                            "<h3>Add city through Post request to /city and city in body as JSON <br>" +
                            "Get all cities through Get request to /city <br>" +
                            "Get all city names through Get request to /city/name/all <br>" +
                            "Get city by name through Get request to /city/{name} supplying the name <br>" +
                            "Update city by name through Put request to /city/{name} supplying the name and city in body as JSON <br>" +
                            "Delete city by name through Delete request to /city/{name} supplying the name <br>" +
                            "Delete all cities through Delete request to /city <br> </h3>";
        
        ResponseEntity<String> responseToUser = new ResponseEntity<>(message, HttpStatus.OK);
//        HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//        httpHeaders.add("Access-Control-Allow-Origin", "*");
        return responseToUser;
    }

    @PostMapping("/city")
    public ResponseEntity<City> addCity(@RequestBody City city){
        City cityToReturn = cityService.addCity(city);
        ResponseEntity<City> responseToUser = new ResponseEntity<>(cityToReturn, HttpStatus.CREATED);
//        HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//        httpHeaders.add("Access-Control-Allow-Origin", "*");
        return responseToUser;
    }

    @GetMapping("/city")
    public ResponseEntity<List<City>> getAllCities(){
        List<City> cities = cityService.findAllCities();
        ResponseEntity<List<City>> responseToUser = new ResponseEntity<>(cities, HttpStatus.OK);
//        HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//        httpHeaders.add("Access-Control-Allow-Origin", "*");
        return responseToUser;
    }

    @GetMapping("/city/name/all")
    public ResponseEntity<List<String>> getAllCityNames(){
        List<String> names = cityService.findAllCityNames();
        ResponseEntity<List<String>> responseToUser = new ResponseEntity<>(names, HttpStatus.OK);
//        HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//        httpHeaders.add("Access-Control-Allow-Origin", "*");
        return responseToUser;
    }

    @GetMapping("/city/{name}")
    public ResponseEntity<City> getCityByName(@PathVariable String name){
        City city = cityService.findCityByName(name);
        ResponseEntity<City> responseToUser = new ResponseEntity<>(city, HttpStatus.OK);
//        HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//        httpHeaders.add("Access-Control-Allow-Origin", "*");
        return responseToUser;
    }

    @PutMapping("/city/{name}")
    public ResponseEntity<City> updateCity(@PathVariable String name, @RequestBody City city){
        if(name.equals(city.getName())) {
            City cityToReturn = cityService.updateCity(city);
            ResponseEntity<City> responseToUser = new ResponseEntity<>(cityToReturn, HttpStatus.ACCEPTED);
//            HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//            httpHeaders.add("Access-Control-Allow-Origin", "*");
            return responseToUser;
        }
        else{
        	ResponseEntity<City> responseToUser = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
//        	HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//            httpHeaders.add("Access-Control-Allow-Origin", "*");
            return responseToUser;
        }
    }

    @DeleteMapping("/city/{name}")
    public ResponseEntity<String> deleteCity(@PathVariable String name){
        cityService.deleteCity(name);

        String message = "Successfully deleted city by the name of " + name;
        ResponseEntity<String> responseToUser = new ResponseEntity<>(message, HttpStatus.OK);
//        HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//        httpHeaders.add("Access-Control-Allow-Origin", "*");
        return responseToUser;
    }

    @DeleteMapping("/city")
    public ResponseEntity<String> deleteAllCities(){
        cityService.deleteAllCities();

        String message = "Successfully deleted all cities";
        ResponseEntity<String> responseToUser = new ResponseEntity<>(message, HttpStatus.OK);
//        HttpHeaders httpHeaders = HttpHeaders.writableHttpHeaders(responseToUser.getHeaders());        
//        httpHeaders.add("Access-Control-Allow-Origin", "*");
        return responseToUser;
    }

}
