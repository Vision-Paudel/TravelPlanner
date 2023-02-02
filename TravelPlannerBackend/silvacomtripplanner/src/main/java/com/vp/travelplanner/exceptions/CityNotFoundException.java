package com.vp.travelplanner.exceptions;

public class CityNotFoundException extends RuntimeException{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public CityNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public CityNotFoundException(String message) {
        super(message);
    }

}
