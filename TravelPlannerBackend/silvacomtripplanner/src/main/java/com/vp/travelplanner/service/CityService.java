package com.vp.travelplanner.service;

import com.vp.travelplanner.dao.CityDao;
import com.vp.travelplanner.dto.City;
import com.vp.travelplanner.exceptions.CityAlreadyExistsException;
import com.vp.travelplanner.exceptions.CityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    private final CityDao cityDao;

    @Autowired
    public CityService(CityDao cityDao) {
        super();
        this.cityDao = cityDao;
    }

    public City addCity(City city) {
        try {
            City cityFound = findCityByName(city.getName());
            throw new CityAlreadyExistsException("City by name of " + city.getName() + " already exists!");
        }
        catch(CityNotFoundException ex) {
            return cityDao.save(city);
        }
    }

    public List<City> findAllCities(){
        return cityDao.findAll();
    }

    public List<String> findAllCityNames(){
        List<String> names = cityDao.findAll().stream().map(City::getName).collect(Collectors.toList());
        return names;
    }

    public City findCityByName(String name) {
        return cityDao.findById(name).orElseThrow(() -> new CityNotFoundException("City by name of " + name + " was not found!"));
    }

    public City updateCity(City city){
        return cityDao.save(city);
    }

    public void deleteCity(String name) {
        cityDao.deleteById(name);
    }

    public void deleteAllCities() {
        cityDao.deleteAll();
    }

}
