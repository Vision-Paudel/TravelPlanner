package com.vp.travelplanner.exceptions;

public class CityAlreadyExistsException extends RuntimeException{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public CityAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public CityAlreadyExistsException(String message) {
        super(message);
    }

}
