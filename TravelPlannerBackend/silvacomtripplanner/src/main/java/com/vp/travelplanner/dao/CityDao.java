package com.vp.travelplanner.dao;

import com.vp.travelplanner.dto.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityDao extends JpaRepository<City, String> {
	
	
}
